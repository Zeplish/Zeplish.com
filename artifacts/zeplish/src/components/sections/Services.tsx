import { motion } from "framer-motion";
import { Users, FileCheck, LayoutDashboard, Target, MessageSquare, Receipt, GraduationCap, Building2, FileScan, Settings } from "lucide-react";
import content from "@/content.json";

const icons = [Users, FileCheck, LayoutDashboard, Target, MessageSquare, Receipt, GraduationCap, Building2, FileScan, Settings];

export function Services() {
  return (
    <section className="py-24 bg-foreground text-background" id="services">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-background">
            {content.services.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {content.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-background/8 border border-background/15 rounded-2xl p-6 hover:bg-background/14 hover:border-background/25 transition-all"
              >
                <div className="mb-4 h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-background mb-2">{service.title}</h3>
                <p className="text-background/60 text-sm">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
