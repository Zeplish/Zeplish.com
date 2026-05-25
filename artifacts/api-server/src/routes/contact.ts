import { Router } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

const router = Router();

const ContactBody = z.object({
  name: z.string().min(2),
  businessName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: "hello@zeplish.com",
    pass: process.env.ZOHO_SMTP_PASSWORD,
  },
});

router.post("/contact", async (req, res) => {
  const parsed = ContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data" });
    return;
  }

  const { name, businessName, email, phone, message } = parsed.data;

  try {
    await transporter.sendMail({
      from: '"Zeplish Website" <hello@zeplish.com>',
      to: "hello@zeplish.com",
      replyTo: email,
      subject: `New enquiry from ${name} — ${businessName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a;">New Consultation Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Business</td><td style="padding: 8px 0; font-weight: 600;">${businessName}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Phone</td><td style="padding: 8px 0;">${phone || "—"}</td></tr>
          </table>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />
          <h3 style="color: #0f172a; margin-bottom: 8px;">What they want to build</h3>
          <p style="color: #334155; white-space: pre-line; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    req.log.error(err, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
