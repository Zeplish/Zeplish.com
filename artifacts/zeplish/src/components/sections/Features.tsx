import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import content from "@/content.json";

export function Features() {
  return (
    <section className="py-24 bg-foreground text-background" id="ai-features">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            {content.aiFeatures.title}
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            {content.aiFeatures.note}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {content.aiFeatures.items.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-background/8 border border-background/15 rounded-xl p-5 hover:bg-background/15 transition-colors flex items-start gap-3"
            >
              <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="font-medium text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
