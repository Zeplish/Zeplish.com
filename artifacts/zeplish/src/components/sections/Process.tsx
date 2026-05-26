import { motion } from "framer-motion";
import content from "@/content.json";

export function Process() {
  return (
    <section className="py-24 bg-background" id="process">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            {content.process.title}
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 space-y-10 pb-8">
          {content.process.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[21px] top-1 h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold font-heading text-sm shadow-sm">
                {index + 1}
              </div>
              <div className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold font-heading mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
