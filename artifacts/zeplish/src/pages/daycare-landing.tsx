import { useEffect } from "react";
import { motion } from "framer-motion";
import { Bell, FileText, LayoutDashboard, ClipboardList, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const features = [
  {
    icon: Bell,
    title: "Automated Reminders",
    desc: "Email and SMS alerts sent automatically before any document expires — for staff and enrolled children.",
  },
  {
    icon: FileText,
    title: "Document Tracking",
    desc: "Expiry dates, reminder history, and compliance status for every person in your care setting.",
  },
  {
    icon: LayoutDashboard,
    title: "Compliance Dashboard",
    desc: "See overdue, missing, expiring, and up-to-date documents across your whole setting at a glance.",
  },
  {
    icon: ClipboardList,
    title: "Audit-Ready Reports",
    desc: "Full compliance history for students and employees — ready for inspections at any time.",
  },
];

const outcomes = [
  "Zero missed document renewals — the system tracks everything automatically",
  "Full compliance visibility across all students and staff",
  "Automated advance reminders sent before any document expires",
  "Owner saves hours every week previously spent on manual follow-ups",
];

export function DaycareLandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Document Compliance Software for Daycares & Nurseries | Zeplish";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Custom document compliance software for daycares and nurseries. Track expiry dates, automate renewal reminders, and stay compliant — without the spreadsheets. Built by Zeplish."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/20">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1a2744] text-white pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">

          <nav className="flex items-center gap-1.5 text-white/50 text-sm mb-10">
            <button onClick={() => { window.location.href = "/"; }} className="hover:text-white transition-colors">Home</button>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">Daycare Compliance Software</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-sm text-white/80 mb-6">
                Built for Daycares &amp; Nurseries
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
                Document compliance software built for daycares &amp; nurseries.
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                Stop chasing expiry dates across spreadsheets. Track every document for every child and staff member — and let the system send reminders automatically.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => { window.location.href = "/#contact"; }}
                  className="bg-accent text-white hover:bg-accent/90 group"
                >
                  Book a free consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <button
                  onClick={() => { window.location.href = "/doctrackr"; }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 text-white/80 hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  View the DocTrackr case study
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-white/80" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-white/55 text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What it solves */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              The compliance problem every daycare owner knows
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Daycares and nurseries manage dozens of documents per child and per staff member — immunization records, first aid certificates, DBS checks, food hygiene certs, and more. Every one has an expiry date.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 rounded-2xl p-8 border"
            >
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                <span className="text-rose-600 font-bold text-sm">01</span>
              </div>
              <h3 className="font-bold font-heading text-lg mb-3">The Problem</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Documents tracked in spreadsheets and email. Expiry dates missed. Staff compliance hard to monitor. Manual follow-up calls and emails consuming hours of the owner's week — every week.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-sm">02</span>
              </div>
              <h3 className="font-bold font-heading text-lg mb-3">What We Build</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A custom compliance dashboard with a full document database, per-employee and per-student status, and automated SMS and email reminders before anything expires — manageable without technical knowledge.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50 rounded-2xl p-8 border"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-sm">03</span>
              </div>
              <h3 className="font-bold font-heading text-lg mb-3">The Result</h3>
              <ul className="space-y-3">
                {outcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Case study callout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Live Case Study</div>
              <h3 className="text-xl font-bold font-heading mb-2">We already built this for a US daycare.</h3>
              <p className="text-white/70 text-sm max-w-lg">
                DocTrackr is a live, deployed compliance system built by Zeplish for a US-based daycare. See exactly what was built, how it works, and what changed for the business.
              </p>
            </div>
            <button
              onClick={() => { window.location.href = "/doctrackr"; }}
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              View DocTrackr case study
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1a2744] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Running a daycare and still tracking documents manually?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              We'll build a compliance system around your exact setting — your document types, your staff, your schedule. Fixed price, fast delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => { window.location.href = "/#contact"; }}
                size="lg"
                className="bg-accent text-white hover:bg-accent/90 group h-12 px-8"
              >
                Book a free consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <button
                onClick={() => { window.location.href = "/doctrackr"; }}
                className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors text-sm h-12"
              >
                See the DocTrackr case study
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
