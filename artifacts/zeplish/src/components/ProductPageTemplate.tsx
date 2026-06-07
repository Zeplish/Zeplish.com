import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export interface ProductFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export interface ProductPageProps {
  meta: { title: string; description: string };
  hero: {
    heroBg: string;
    ctaBg: string;
    badge: string;
    name: string;
    tagline: string;
    icon: React.ComponentType<{ className?: string }>;
    headline: string;
    subheadline: string;
    features: ProductFeature[];
  };
  story: {
    subtitle: string;
    problem: string;
    solution: string;
    outcomes: string[];
    techTags: string[];
  };
  cta: {
    headline: string;
    subtext: string;
  };
  breadcrumb: { label: string };
}

export function ProductPageTemplate({ meta, hero, story, cta, breadcrumb }: ProductPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", meta.description);
  }, [meta.title, meta.description]);

  const handleContact = () => { window.location.href = "/#contact"; };
  const handleHome = () => { window.location.href = "/"; };

  const { icon: Icon } = hero;

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/20">
      <Navbar />

      {/* Hero */}
      <section className="text-white pt-32 pb-20" style={{ backgroundColor: hero.heroBg }}>
        <div className="container mx-auto px-4 md:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/50 text-sm mb-10">
            <button onClick={handleHome} className="hover:text-white transition-colors">Home</button>
            <ChevronRight className="h-3.5 w-3.5" />
            <button onClick={() => { window.location.href = "/#case-studies"; }} className="hover:text-white transition-colors">Products</button>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">{breadcrumb.label}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-sm text-white/80 mb-6">
                {hero.badge}
              </div>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold font-heading">{hero.name}</div>
                  <div className="text-white/50 text-xs">{hero.tagline}</div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mt-6 mb-4">
                {hero.headline}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                {hero.subheadline}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleContact}
                  className="bg-accent text-white hover:bg-accent/90 group"
                >
                  Build something like this
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <button
                  onClick={() => { window.location.href = "/#contact"; }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 text-white/80 hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  Book a free call
                </button>
              </div>
            </motion.div>

            {/* Right: feature grid */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {hero.features.map((feature) => {
                const FIcon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                      <FIcon className="h-5 w-5 text-white/80" />
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

      {/* Problem / Solution / Outcomes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What this solves</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{story.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
              <p className="text-muted-foreground text-sm leading-relaxed">{story.problem}</p>
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
              <h3 className="font-bold font-heading text-lg mb-3">The Solution</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{story.solution}</p>
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
              <h3 className="font-bold font-heading text-lg mb-3">The Outcome</h3>
              <ul className="space-y-3">
                {story.outcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 flex flex-wrap gap-2 justify-center"
          >
            {story.techTags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full border bg-slate-50 text-slate-600 text-xs font-medium">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-white" style={{ backgroundColor: hero.ctaBg }}>
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{cta.headline}</h2>
            <p className="text-white/70 text-lg mb-8">{cta.subtext}</p>
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
