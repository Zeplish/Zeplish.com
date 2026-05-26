import { motion } from "framer-motion";
import { MessageCircle, FileSpreadsheet, CalendarX, EyeOff, Clock, Database, BellOff, UserX } from "lucide-react";
import content from "@/content.json";

const icons = [MessageCircle, FileSpreadsheet, CalendarX, EyeOff, Clock, Database, BellOff, UserX];

export function Problem() {
  return (
    <section className="py-24 bg-slate-50" id="problem">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            {content.problem.title}<br />
            <span className="text-muted-foreground">{content.problem.subtitle}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {content.problem.items.map((text, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="font-medium text-foreground/85 leading-snug">{text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
