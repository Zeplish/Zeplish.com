import { motion } from "framer-motion";
import { Users, FileCheck, LayoutDashboard, Target, MessageSquare, Receipt, GraduationCap, Building2, FileScan, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import content from "@/content.json";

const icons = [Users, FileCheck, LayoutDashboard, Target, MessageSquare, Receipt, GraduationCap, Building2, FileScan, Settings];

export function Services() {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            {content.services.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {content.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full hover:border-accent/40 hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <div className="mb-4 h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg font-heading">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
