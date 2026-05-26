import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import content from "@/content.json";

export function CTA() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-foreground text-background rounded-3xl px-8 py-16 md:px-16 text-center shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
            {content.cta.title}
          </h2>
          <p className="text-lg md:text-xl text-background/75 mb-10 leading-relaxed max-w-2xl mx-auto">
            {content.cta.text}
          </p>

          <Button
            size="lg"
            className="text-base h-14 px-10 mb-4 font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
            onClick={scrollToContact}
          >
            {content.cta.button}
          </Button>
          <p className="text-sm font-medium text-background/60 mt-4">
            {content.cta.subtext}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
