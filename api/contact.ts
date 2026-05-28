import type { IncomingMessage, ServerResponse } from "http";
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactBody = z.object({
  name: z
    .string()
    .min(2)
    .max(80)
    .regex(/^[\p{L}\s'\-\.]+$/u, "Invalid name"),
  businessName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  message: z
    .string()
    .min(20)
    .max(2000)
    .refine((m) => m.trim().split(/\s+/).length >= 4, "Message too short"),
  website: z.string().max(0, "Honeypot triggered").optional(),
  formOpenedAt: z.number().optional(),
});

const RATE_MAP = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function getClientIp(req: IncomingMessage): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
  return req.socket?.remoteAddress ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = RATE_MAP.get(ip);
  if (!entry || now > entry.resetAt) {
    RATE_MAP.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

interface VercelRequest extends IncomingMessage {
  body: Record<string, unknown>;
}

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: "hello@zeplish.com",
    pass: process.env["ZOHO_SMTP_PASSWORD"],
  },
});

export default async function handler(req: VercelRequest, res: ServerResponse): Promise<void> {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.writeHead(405);
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const parsed = ContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "Invalid form data. Please check all fields and try again." }));
    return;
  }

  const { name, businessName, email, phone, message, website, formOpenedAt } = parsed.data;

  // Honeypot check — if the hidden field was filled, silently succeed
  if (website && website.length > 0) {
    res.writeHead(200);
    res.end(JSON.stringify({ success: true }));
    return;
  }

  // Time threshold — form must have been open for at least 3 seconds
  if (formOpenedAt && Date.now() - formOpenedAt < 3000) {
    res.writeHead(429);
    res.end(JSON.stringify({ error: "Please take a moment to fill out the form." }));
    return;
  }

  // Rate limiting — max 3 submissions per IP per hour
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    res.writeHead(429);
    res.end(JSON.stringify({ error: "Too many submissions. Please try again later." }));
    return;
  }

  try {
    await transporter.sendMail({
      from: '"Zeplish Website" <hello@zeplish.com>',
      to: "hello@zeplish.com",
      replyTo: email,
      subject: `New enquiry from ${name} — ${businessName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a;">
          <div style="background: #E13A44; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Consultation Request</h2>
          </div>
          <div style="border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; padding: 24px 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; color: #64748b; width: 140px; vertical-align: top;">Name</td><td style="padding: 10px 0; font-weight: 600;">${escHtml(name)}</td></tr>
              <tr style="border-top: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; vertical-align: top;">Business</td><td style="padding: 10px 0; font-weight: 600;">${escHtml(businessName)}</td></tr>
              <tr style="border-top: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; vertical-align: top;">Email</td><td style="padding: 10px 0;"><a href="mailto:${escHtml(email)}" style="color: #E13A44;">${escHtml(email)}</a></td></tr>
              <tr style="border-top: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; vertical-align: top;">Phone</td><td style="padding: 10px 0;">${phone ? escHtml(phone) : "—"}</td></tr>
            </table>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px; font-weight: 700; font-size: 15px;">What they want to build</p>
              <p style="margin: 0; color: #334155; white-space: pre-line; line-height: 1.7;">${escHtml(message)}</p>
            </div>
          </div>
        </div>
      `,
    });

    res.writeHead(200);
    res.end(JSON.stringify({ success: true }));
  } catch {
    res.writeHead(500);
    res.end(JSON.stringify({ error: "Failed to send message. Please try again." }));
  }
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
