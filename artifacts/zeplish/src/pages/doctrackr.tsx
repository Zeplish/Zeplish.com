import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import {
  Bell,
  FileText,
  LayoutDashboard,
  Users,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Shield,
  Clock,
  ClipboardList,
  Mail,
  X,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import casestudies from "@/data/casestudies.json";

import loginImg from "@assets/Screenshot_2026-06-06_at_4.33.20_PM_1780743809532.png";
import dashboardImg from "@assets/Screenshot_2026-06-06_at_4.31.48_PM_1780743787926.png";
import documentTypesImg from "@assets/Screenshot_2026-06-06_at_4.32.02_PM_1780743787945.png";

const study = casestudies.find((s) => s.slug === "doctrackr")!;
const CAL_URL = "https://cal.com/zeplish/15min";

const pricingFeatures = [
  "Staff document tracking",
  "Student document tracking",
  "Expiry date dashboard",
  "Parent reminder emails",
  "Staff reminder emails",
  "Custom document types",
  "Admin access",
  "Hosting included",
  "Basic support included",
];

const fitChecklist = [
  "Tracks staff or student documents manually",
  "Uses spreadsheets for expiry dates",
  "Sends parent reminders manually",
  "Wants to reduce inspection-time stress",
  "Needs a simple document renewal system",
  "Wants better visibility into expiring records",
];

const faqs = [
  {
    q: "Is DocTrackr built only for daycares?",
    a: "DocTrackr can be used by any organization that tracks expiring documents, but this version is designed specifically for daycare and childcare centers.",
  },
  {
    q: "Does DocTrackr store actual documents?",
    a: "DocTrackr tracks document names, expiry dates, and reminders. Your center can decide whether to store files separately or add file storage later if needed.",
  },
  {
    q: "Can we add our own document types?",
    a: "Yes. You can create custom document types based on your daycare's exact requirements.",
  },
  {
    q: "Can parents receive reminders?",
    a: "Yes. Parent reminder emails can be sent automatically for student-related documents.",
  },
  {
    q: "Can staff receive reminders?",
    a: "Yes. Staff members receive renewal reminders for their own documents before they expire.",
  },
  {
    q: "Is this complicated to use?",
    a: "No. DocTrackr is designed to be simple for daycare administrators and directors — no technical knowledge required.",
  },
  {
    q: "How much does it cost?",
    a: "DocTrackr is $199/month, which works out to less than $7/day.",
  },
];

const beforeItems = [
  "Spreadsheets updated manually every week",
  "Expiry dates missed until it's urgent",
  "Staff and parents chased by phone or email",
  "Scrambling to gather records before inspections",
  "No single view of what's missing or expired",
];

const afterItems = [
  "Every document tracked automatically in one dashboard",
  "Reminders sent weeks before expiry dates",
  "Staff and parents notified without any manual effort",
  "Records always organized and inspection-ready",
  "One clear view of every document status at a glance",
];

const featureRows = [
  {
    img: documentTypesImg,
    imgAlt: "DocTrackr document types management screen",
    imgUrl: "doctrackr.zeplish.com/documents",
    headline: "Track every document your center requires",
    bullets: [
      "Staff: CPR certs, background checks, first aid, health forms, training records",
      "Students: enrollment, immunization, medical forms, emergency contacts",
      "Create custom document types specific to your daycare",
      "All expiry dates stored in one organized place",
    ],
    reverse: false,
    bg: "bg-white",
  },
  {
    img: loginImg,
    imgAlt: "DocTrackr login page",
    imgUrl: "doctrackr.zeplish.com",
    headline: "Automatic reminders — no manual follow-up needed",
    bullets: [
      "Emails sent to staff before their documents expire",
      "Parents notified automatically about student record renewals",
      "Admins and directors copied on upcoming renewals",
      "Reduce the back-and-forth completely",
    ],
    reverse: true,
    bg: "bg-slate-50",
  },
  {
    img: dashboardImg,
    imgAlt: "DocTrackr compliance dashboard",
    imgUrl: "doctrackr.zeplish.com/dashboard",
    headline: "One dashboard — always know what needs attention",
    bullets: [
      "Instantly see active, expiring, and expired documents",
      "Separate views for staff and student records",
      "Track parent reminder status without chasing anyone",
      "Inspection prep in minutes, not hours",
    ],
    reverse: false,
    bg: "bg-white",
  },
];

function BrowserFrame({ img, alt, url }: { img: string; alt: string; url: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border bg-white ring-1 ring-slate-900/5">
      <div className="h-9 bg-slate-100 border-b flex items-center px-3 gap-2">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-300" />
        </div>
        <div className="flex-1 bg-white rounded text-[10px] text-slate-400 px-2 py-0.5 truncate">{url}</div>
      </div>
      <div className="bg-slate-100">
        <img src={img} alt={alt} className="w-full h-auto block" />
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="text-muted-foreground text-sm leading-relaxed pb-4">{a}</p>}
    </div>
  );
}

export function DocTrackrPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "DocTrackr — Daycare Document Compliance Software | Zeplish";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute("content", "DocTrackr helps Florida daycare centers track staff and student document expiry dates, send automatic renewal reminders, and stay inspection-ready. $199/month.");
    (async () => {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const openCal = () => window.open(CAL_URL, "_blank", "noopener,noreferrer");
  const scrollToDemo = () => document.getElementById("book-demo")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/20">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-[#1a2744] text-white pt-28 pb-0 overflow-hidden">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="relative container mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/40 text-sm mb-10">
            <button onClick={() => { window.location.href = "/"; }} className="hover:text-white transition-colors">Home</button>
            <ChevronRight className="h-3.5 w-3.5" />
            <button onClick={() => { window.location.href = "/#case-studies"; }} className="hover:text-white transition-colors">Products</button>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/60">DocTrackr</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="pb-20"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs text-white/70 mb-6 font-medium">
                <FileText className="h-3 w-3" />
                Daycare Document Compliance
              </div>

              <h1 className="text-5xl md:text-6xl font-bold font-heading leading-[1.05] mb-5">
                Stop tracking documents in spreadsheets.
              </h1>
              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-md">
                DocTrackr gives your daycare a simple dashboard to track expiry dates, send automatic reminders, and stay inspection-ready — for less than $7/day.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["$199/month", "No setup fees", "Cancel anytime"].map((t) => (
                  <span key={t} className="text-xs font-medium text-white/60 bg-white/8 border border-white/12 rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={openCal}
                  className="inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 px-6 py-3 rounded-lg font-semibold text-sm group transition-colors shadow-lg shadow-accent/25"
                >
                  Book a 15-minute demo
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#pricing"
                  onClick={(e) => { e.preventDefault(); document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg border border-white/20 text-white/75 hover:text-white hover:bg-white/8 transition-colors text-sm font-medium"
                >
                  See pricing ↓
                </a>
              </div>
            </motion.div>

            {/* Right: hero screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative pb-0 hidden lg:block"
            >
              {/* Glow */}
              <div className="absolute -inset-4 bg-blue-500/15 rounded-3xl blur-2xl" />
              <div className="relative">
                <BrowserFrame img={dashboardImg} alt="DocTrackr compliance dashboard" url="doctrackr.zeplish.com/dashboard" />
              </div>
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-1.5 text-white/40 hover:text-white/70 transition-colors text-xs"
              >
                View live site <ExternalLink className="h-3 w-3" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-2xl font-bold font-heading mb-12 text-foreground"
          >
            How compliance tracking changes with DocTrackr
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border shadow-sm">
            {/* Without */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-rose-50 px-8 py-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center">
                  <X className="h-3.5 w-3.5 text-rose-500" />
                </div>
                <span className="font-bold text-rose-700 text-sm uppercase tracking-wide">Without DocTrackr</span>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-rose-900/80">
                    <X className="h-4 w-4 text-rose-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* With */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-emerald-50 px-8 py-8 border-l"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                </div>
                <span className="font-bold text-emerald-700 text-sm uppercase tracking-wide">With DocTrackr</span>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-emerald-900/80">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURE ROWS ── */}
      {featureRows.map((row, i) => (
        <section key={row.headline} className={`py-24 ${row.bg}`}>
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${row.reverse ? "lg:grid-flow-dense" : ""}`}>
              {/* Screenshot */}
              <motion.div
                initial={{ opacity: 0, x: row.reverse ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={row.reverse ? "lg:col-start-2" : ""}
              >
                <BrowserFrame img={row.img} alt={row.imgAlt} url={row.imgUrl} />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={row.reverse ? "lg:col-start-1 lg:row-start-1" : ""}
              >
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/8 rounded-full px-3 py-1 mb-5">
                  {i === 0 && <><FileText className="h-3 w-3" /> Document Tracking</>}
                  {i === 1 && <><Bell className="h-3 w-3" /> Automated Reminders</>}
                  {i === 2 && <><LayoutDashboard className="h-3 w-3" /> Dashboard</>}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-5 leading-tight">{row.headline}</h2>
                <ul className="space-y-3.5">
                  {row.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ── BENEFITS ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">Why daycare centers use DocTrackr</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Built for small teams that need compliance covered — without the overhead of enterprise software.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Bell, title: "Fewer missed renewals", desc: "Stay ahead of expiry dates before they create problems." },
              { icon: Clock, title: "Less time chasing paperwork", desc: "Cut hours spent following up with staff and parents every week." },
              { icon: Shield, title: "Inspection confidence", desc: "Walk into every licensing review knowing your records are in order." },
              { icon: Users, title: "Designed for small teams", desc: "Simple enough for a director to manage without technical help." },
              { icon: ClipboardList, title: "Fully customizable", desc: "Add any document type your center tracks — no rigid templates." },
              { icon: Mail, title: "Reminders that actually reach people", desc: "Email reminders go to staff, parents, and admins automatically." },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-white border-l-4 border-l-[#1a2744] border border-slate-200 rounded-xl p-6"
              >
                <b.icon className="h-5 w-5 text-[#1a2744] mb-3" />
                <h3 className="font-bold text-sm mb-1.5">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">Simple, transparent pricing</h2>
            <p className="text-muted-foreground">One plan, everything included.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border-2 border-[#1a2744] shadow-xl"
          >
            {/* Header */}
            <div className="bg-[#1a2744] text-white px-8 pt-8 pb-10 text-center relative">
              <div className="inline-flex items-center gap-1.5 bg-emerald-400/20 text-emerald-300 text-xs font-semibold rounded-full px-3 py-1 mb-4 border border-emerald-400/20">
                <CheckCircle2 className="h-3 w-3" /> Everything included
              </div>
              <div className="flex items-end justify-center gap-1 mb-1">
                <span className="text-7xl font-bold font-heading leading-none">$199</span>
                <span className="text-white/50 text-xl mb-2">/mo</span>
              </div>
              <p className="text-white/55 text-sm">Less than $7/day</p>
            </div>

            {/* Body */}
            <div className="bg-white px-8 py-8">
              <ul className="grid grid-cols-1 gap-3 mb-8">
                {pricingFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="bg-slate-50 rounded-xl p-4 mb-6 text-center">
                <p className="text-xs text-muted-foreground">No large software setup &nbsp;·&nbsp; No enterprise pricing &nbsp;·&nbsp; No long training</p>
              </div>

              <button
                onClick={openCal}
                className="flex w-full items-center justify-center gap-2 bg-accent text-white hover:bg-accent/90 px-6 py-3.5 rounded-lg font-semibold text-sm group transition-colors shadow-md shadow-accent/20"
              >
                Book a 15-minute demo
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-xs text-muted-foreground mt-3">
                We'll walk you through setup on your first call. No credit card required for the demo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── IS IT RIGHT FOR YOU? ── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold font-heading mb-2">Is DocTrackr right for your daycare?</h2>
            <p className="text-muted-foreground text-sm">DocTrackr is a good fit if your center:</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border rounded-2xl p-8"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              {fitChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold font-heading">Common questions</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-50 border rounded-2xl px-7 py-2"
          >
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INLINE BOOKING ── */}
      <section id="book-demo" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">Book a free 15-minute demo</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              See DocTrackr in action. Pick a time — no pressure, no commitment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border overflow-hidden shadow-sm bg-white"
          >
            <Cal
              namespace="15min"
              calLink="zeplish/15min"
              style={{ width: "100%", height: "700px", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </motion.div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Prefer to open in a new tab?{" "}
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center gap-1">
              Book on cal.com <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="py-24 bg-[#1a2744] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Keep your records organized before they become urgent
            </h2>
            <p className="text-white/60 text-base mb-8">
              DocTrackr tracks documents, sends reminders, and keeps your daycare inspection-ready — all for less than $7/day.
            </p>
            <button
              onClick={openCal}
              className="inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 px-8 py-3.5 rounded-lg font-semibold text-sm group transition-colors shadow-lg shadow-accent/30"
            >
              Book a 15-minute demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
