import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function WhyUs() {
  const points = [
    "Built around your workflow",
    "Simple enough for your team to actually use",
    "No unnecessary enterprise complexity",
    "AI where it genuinely helps",
    "Fast MVP development",
    "Scalable database-backed applications",
    "Clean dashboards and admin panels",
    "Support after launch"
  ];

  return (
    <section className="py-24 bg-muted/30" id="why-us">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
              Why Businesses Choose Zeplish
            </h2>
            <div className="space-y-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-lg font-medium text-foreground/80">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-square bg-background rounded-3xl border shadow-xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
            <div className="h-full w-full rounded-2xl border bg-muted/20 flex flex-col p-6">
              <div className="flex gap-4 items-center mb-8">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex-shrink-0" />
                <div className="space-y-2 flex-1">
                  <div className="h-3 w-1/3 bg-muted rounded-full" />
                  <div className="h-3 w-1/4 bg-muted rounded-full" />
                </div>
              </div>
              <div className="space-y-4 flex-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-16 bg-background rounded-xl border flex items-center px-4 gap-4">
                     <div className="h-8 w-8 rounded-full bg-muted flex-shrink-0" />
                     <div className="h-2 w-1/2 bg-muted rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
