import { useEffect } from "react";
import { motion } from "framer-motion";
import { Bell, FileText, LayoutDashboard, ClipboardList, CheckCircle2, ArrowRight, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLocation } from "wouter";
import casestudies from "@/data/casestudies.json";

import loginImg from "@assets/Screenshot_2026-06-06_at_4.33.20_PM_1780743809532.png";
import dashboardImg from "@assets/Screenshot_2026-06-06_at_4.31.48_PM_1780743787926.png";
import documentTypesImg from "@assets/Screenshot_2026-06-06_at_4.32.02_PM_1780743787945.png";

const study = casestudies.find((s) => s.slug === "doctrackr")!;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bell,
  FileText,
  LayoutDashboard,
  ClipboardList,
};

const screenshots = [
  { img: loginImg, caption: "Landing & Login", alt: study.images[0].alt },
  { img: dashboardImg, caption: "Compliance Dashboard", alt: study.images[1].alt },
  { img: documentTypesImg, caption: "Document Management", alt: study.images[2].alt },
];

export function DocTrackrPage() {
  const [, navigate] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/20">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1a2744] text-white pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/50 text-sm mb-10">
            <button onClick={() => navigate("/")} className="hover:text-white transition-colors">Home</button>
            <ChevronRight className="h-3.5 w-3.5" />
            <button onClick={() => { window.location.href = "/#case-studies"; }} className="hover:text-white transition-colors">Case Studies</button>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">DocTrackr</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-sm text-white/80 mb-6">
                {study.badge}
              </div>

              {/* DocTrackr branding */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold font-heading">{study.name}</div>
                  <div className="text-white/50 text-xs">{study.hero.tagline}</div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mt-6 mb-4">
                {study.hero.headline}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                {study.hero.subheadline}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleContact}
                  className="bg-accent text-white hover:bg-accent/90 group"
                >
                  Build something like this
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 text-white/80 hover:bg-white/10 transition-colors text-sm font-medium"
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
              {study.features.map((feature) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div
                    key={feature.title}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                      {Icon && <Icon className="h-5 w-5 text-white/80" />}
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

      {/* Case study details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">The full story</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{study.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-slate-50 rounded-2xl p-8 border"
            >
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                <span className="text-rose-600 font-bold text-sm">01</span>
              </div>
              <h3 className="font-bold font-heading text-lg mb-3">The Problem</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{study.problem}</p>
            </motion.div>

            {/* Solution */}
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
              <h3 className="font-bold font-heading text-lg mb-3">The Solution</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
            </motion.div>

            {/* Outcomes */}
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
              <h3 className="font-bold font-heading text-lg mb-3">The Outcome</h3>
              <ul className="space-y-3">
                {study.outcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Tech highlights */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 flex flex-wrap gap-2 justify-center"
          >
            {study.techHighlights.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border bg-slate-50 text-slate-600 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product screenshots */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Inside the product</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A look at what was built — clean, practical, and built for the people who use it every day.
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
                className="group"
              >
                {/* Browser chrome */}
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
              Have a similar problem in your business?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Tell us what you're managing manually. We'll design a custom system that fits your exact workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleContact}
                size="lg"
                className="bg-accent text-white hover:bg-accent/90 group h-12 px-8"
              >
                Book a free consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <button
                onClick={() => { window.location.href = "/#case-studies"; }}
                className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors text-sm h-12"
              >
                See more work
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
