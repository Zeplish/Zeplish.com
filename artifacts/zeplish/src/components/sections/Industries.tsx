import { motion } from "framer-motion";
import { Check } from "lucide-react";
import content from "@/content.json";

export function Industries() {
  return (
    <section className="py-24 bg-slate-50" id="industries">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            {content.industries.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {content.industries.items.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-accent/30 hover:shadow-md transition-all"
            >
              <div className="h-7 w-7 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                <Check className="h-3.5 w-3.5 text-accent" />
              </div>
              <span className="font-medium text-foreground/80">{industry}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
