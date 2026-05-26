import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import content from "@/content.json";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/8 via-background to-background -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-100 via-transparent to-transparent -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium mb-8 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2" />
            {content.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-foreground leading-[1.1] mb-8"
          >
            {content.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {content.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-base h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90 shadow-md"
              onClick={() => scrollTo("contact")}
            >
              {content.hero.ctaPrimary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base h-14 px-8"
              onClick={() => scrollTo("case-studies")}
            >
              {content.hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm font-medium text-muted-foreground"
          >
            {content.hero.trustLine}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
