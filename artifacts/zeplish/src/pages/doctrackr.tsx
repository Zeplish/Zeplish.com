import { useEffect, useState } from "react";
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
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import casestudies from "@/data/casestudies.json";

import loginImg from "@assets/Screenshot_2026-06-06_at_4.33.20_PM_1780743809532.png";
import dashboardImg from "@assets/Screenshot_2026-06-06_at_4.31.48_PM_1780743787926.png";
import documentTypesImg from "@assets/Screenshot_2026-06-06_at_4.32.02_PM_1780743787945.png";

const study = casestudies.find((s) => s.slug === "doctrackr")!;

const CAL_URL = "https://cal.com/zeplish/15min";

const screenshots = [
  { img: loginImg, caption: "Landing & Login", alt: study.images[0].alt },
  { img: dashboardImg, caption: "Compliance Dashboard", alt: study.images[1].alt },
  { img: documentTypesImg, caption: "Document Management", alt: study.images[2].alt },
];

const staffDocs = [
  "CPR certification",
  "First aid certification",
  "Background checks",
  "Training certificates",
  "Health forms",
  "Employment documents",
  "Licensing-related records",
  "Any custom document your center needs",
];

const studentDocs = [
  "Enrollment forms",
  "Medical forms",
  "Immunization records",
  "Parent documents",
  "Emergency contact forms",
  "Annual renewals",
  "Any custom student document",
];

const dashboardItems = [
  "Active students",
  "Active staff",
  "Expiring documents",
  "Expired documents",
  "Upcoming renewals",
  "Parent reminder status",
  "Staff reminder status",
];

const reminderRecipients = [
  "Staff members",
  "Parents",
  "Administrators",
  "Center directors",
];

const benefits = [
  {
    icon: Bell,
    title: "Fewer missed document renewals",
    desc: "Stay ahead of expiry dates before they become urgent.",
  },
  {
    icon: Clock,
    title: "Less manual follow-up",
    desc: "Reduce the time spent checking spreadsheets and chasing parents or staff.",
  },
  {
    icon: Shield,
    title: "Better inspection readiness",
    desc: "Keep records organized so your daycare feels more prepared for licensing reviews and inspections.",
  },
  {
    icon: Users,
    title: "Simple for small teams",
    desc: "DocTrackr is designed for busy daycare teams, not large corporate departments.",
  },
  {
    icon: ClipboardList,
    title: "Custom to your center",
    desc: "You can track the exact documents your daycare requires.",
  },
];

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
    a: "DocTrackr is focused on tracking document names, expiry dates, and reminders. Your center can decide whether to store files separately or add file storage later if needed.",
  },
  {
    q: "Can we add our own document types?",
    a: "Yes. You can create custom document types based on your daycare's requirements.",
  },
  {
    q: "Can parents receive reminders?",
    a: "Yes. Parent reminder emails can be sent for student-related documents.",
  },
  {
    q: "Can staff receive reminders?",
    a: "Yes. Staff members can receive renewal reminders for their own documents.",
  },
  {
    q: "Is this complicated to use?",
    a: "No. DocTrackr is designed to be simple for daycare administrators and directors.",
  },
  {
    q: "How much does it cost?",
    a: "DocTrackr is $199/month, which is less than $7/day.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-foreground text-base">{q}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  );
}

export function DocTrackrPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "DocTrackr — Daycare Document Compliance Software | Zeplish";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "DocTrackr helps Florida daycare centers track staff and student document expiry dates, send automatic renewal reminders, and stay inspection-ready. $199/month."
      );
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/20">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-[#1a2744] text-white pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/50 text-sm mb-10">
            <button
              onClick={() => { window.location.href = "/"; }}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="h-3.5 w-3.5" />
            <button
              onClick={() => { window.location.href = "/#case-studies"; }}
              className="hover:text-white transition-colors"
            >
              Products
            </button>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">DocTrackr</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-sm text-white/80 mb-6">
                Daycare · US
              </div>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold font-heading">DocTrackr</div>
                  <div className="text-white/50 text-xs">Document Compliance, Automated</div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mt-6 mb-4">
                Stay inspection-ready for less than $7/day
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                Track staff and student document expiry dates automatically, send timely reminders, and reduce last-minute compliance stress at your daycare center.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 px-5 py-2.5 rounded-md font-medium text-sm group transition-colors"
                >
                  Book a 15-minute demo
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/20 text-white/80 hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  View live site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Right: feature grid */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Bell, title: "Automated Reminders", desc: "Email alerts before documents expire — no manual follow-up needed." },
                { icon: FileText, title: "Document Tracking", desc: "Expiry dates and status for every staff member and student." },
                { icon: LayoutDashboard, title: "Status Dashboard", desc: "Overdue, expiring, and active documents visible at a glance." },
                { icon: Mail, title: "Parent Reminders", desc: "Automatic emails to parents when student records need renewal." },
              ].map((f) => (
                <div
                  key={f.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                    <f.icon className="h-5 w-5 text-white/80" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                  <p className="text-white/55 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Daycare compliance should not depend on spreadsheets and memory
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Running a daycare already comes with enough responsibility.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              But when staff documents, student forms, parent paperwork, medical records, training certificates, and renewals are tracked manually, things can easily slip through.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              One missed expiry date can create unnecessary stress before inspections, audits, or licensing reviews.
            </p>
            <div className="inline-block bg-slate-50 border rounded-2xl px-8 py-6 text-left">
              <p className="font-semibold text-foreground mb-1">DocTrackr helps daycare centers stay organized before documents become a problem.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Built for ── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Built for daycare owners, directors, and administrators
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              DocTrackr is a simple document reminder system created specifically for childcare centers that need to keep staff and student records up to date.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border rounded-2xl p-8 max-w-xl mx-auto"
          >
            <p className="font-semibold text-foreground mb-4">It helps your team know:</p>
            <ul className="space-y-3">
              {[
                "Which documents are expiring soon",
                "Which parents need to be reminded",
                "Which staff members need to renew documents",
                "Which records are already expired",
                "What needs attention before an inspection",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t grid grid-cols-3 gap-2 text-center text-sm text-muted-foreground">
              {["No complicated software.", "No messy spreadsheets.", "No manual chasing every week."].map((t) => (
                <div key={t} className="bg-slate-50 rounded-lg px-3 py-2 text-xs font-medium">{t}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What DocTrackr tracks ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              What DocTrackr helps you track
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Track expiry dates for every person in your center — staff and students — in one organized system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Staff */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 border rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#1a2744] flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading">Staff documents</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-5">Track expiry dates for employee documents such as:</p>
              <ul className="space-y-2.5">
                {staffDocs.map((doc) => (
                  <li key={doc} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Students */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-50 border rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#1a2744] flex items-center justify-center">
                  <ClipboardList className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading">Student documents</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-5">Track important student records such as:</p>
              <ul className="space-y-2.5">
                {studentDocs.map((doc) => (
                  <li key={doc} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Reminders + Dashboard ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Reminders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Bell className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                Automatic reminders before documents expire
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                DocTrackr sends reminder emails before important documents expire, so your team does not have to remember every renewal manually.
              </p>
              <p className="text-sm font-semibold text-foreground mb-3">You can remind:</p>
              <ul className="space-y-2.5 mb-6">
                {reminderRecipients.map((r) => (
                  <li key={r} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The system helps reduce missed renewals, repeated follow-ups, and last-minute paperwork pressure.
              </p>
            </motion.div>

            {/* Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <LayoutDashboard className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                Simple dashboard for your daycare
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your admin dashboard gives you a clear view of everything that matters — organized in one place, so you always know what needs attention.
              </p>
              <ul className="space-y-2.5 mb-8">
                {dashboardItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Dashboard screenshot */}
              <div className="rounded-2xl overflow-hidden shadow-lg border bg-white">
                <div className="h-8 bg-slate-100 border-b flex items-center px-3 gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-rose-300" />
                    <div className="h-2 w-2 rounded-full bg-amber-300" />
                    <div className="h-2 w-2 rounded-full bg-green-300" />
                  </div>
                  <div className="flex-1 bg-white rounded text-[10px] text-slate-400 px-2 py-0.5 truncate">
                    doctrackr.zeplish.com/dashboard
                  </div>
                </div>
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={dashboardImg}
                    alt="DocTrackr compliance dashboard"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why DocTrackr ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Why daycare centers use DocTrackr
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`bg-slate-50 border rounded-2xl p-7 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#1a2744]/10 flex items-center justify-center mb-4">
                  <b.icon className="h-5 w-5 text-[#1a2744]" />
                </div>
                <h3 className="font-bold font-heading text-base mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Origin story ── */}
      <section className="py-20 bg-[#1a2744] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-sm text-white/80 mb-8">
              <Star className="h-3.5 w-3.5" />
              Our story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Built after solving this exact problem for a Florida daycare
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              DocTrackr was built for a Florida daycare center that needed a simpler way to track employee and student document expiry dates.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              Instead of managing everything manually, the center now has a system to organize records and send reminders before renewals are missed.
            </p>
            <p className="text-white/80 font-medium">
              Now we are opening DocTrackr for other daycare centers that want the same simple system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">Pricing</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-2 border-[#1a2744] rounded-2xl overflow-hidden"
          >
            {/* Price header */}
            <div className="bg-[#1a2744] text-white px-8 py-10 text-center">
              <div className="text-6xl font-bold font-heading mb-1">$199</div>
              <div className="text-white/60 text-lg">/month</div>
              <div className="mt-3 text-white/80 text-sm font-medium">Less than $7/day to reduce compliance stress</div>
            </div>

            {/* Features */}
            <div className="bg-white px-8 py-8">
              <p className="text-muted-foreground text-sm mb-5">
                DocTrackr helps your daycare track expiring staff and student documents, send timely reminders, and stay more prepared for inspections.
              </p>
              <p className="font-semibold text-foreground text-sm mb-4">Includes:</p>
              <ul className="space-y-3 mb-8">
                {pricingFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-2 text-center mb-8">
                {["No large software setup.", "No confusing enterprise pricing.", "No long training process."].map((t) => (
                  <div key={t} className="bg-slate-50 border rounded-lg px-2 py-2 text-xs text-muted-foreground font-medium">{t}</div>
                ))}
              </div>

              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 bg-accent text-white hover:bg-accent/90 px-6 py-3.5 rounded-md font-medium text-sm group transition-colors"
              >
                Book a 15-minute demo
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Is DocTrackr right for you? ── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold font-heading mb-3">Is DocTrackr right for your daycare?</h2>
            <p className="text-muted-foreground">DocTrackr is a good fit if your center:</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border rounded-2xl p-8"
          >
            <ul className="space-y-4">
              {fitChecklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Product screenshots ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">See how it works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A look at the DocTrackr interface — clean, practical, and built for the people who use it every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {screenshots.map((shot, i) => (
              <motion.div
                key={shot.caption}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="h-9 bg-slate-100 border-b flex items-center px-3 gap-2 flex-shrink-0">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-300" />
                    </div>
                    <div className="flex-1 bg-white rounded text-[10px] text-slate-400 px-2 py-0.5 truncate">
                      doctrackr.zeplish.com
                    </div>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={shot.img}
                      alt={shot.alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <p className="text-center text-sm font-medium text-muted-foreground mt-3">{shot.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-heading mb-3">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border rounded-2xl px-8 py-2"
          >
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-24 bg-[#1a2744] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Keep your daycare records organized before they become urgent
            </h2>
            <p className="text-white/70 text-lg mb-8">
              DocTrackr helps daycare centers track expiring documents, remind the right people, and stay more prepared for compliance reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white hover:bg-accent/90 px-8 py-3.5 rounded-md font-medium text-sm group transition-colors h-12"
              >
                Book a 15-minute demo
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => { window.location.href = "/#case-studies"; }}
                className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors text-sm h-12"
              >
                See more products
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
