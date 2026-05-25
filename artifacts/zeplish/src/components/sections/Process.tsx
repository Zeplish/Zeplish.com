import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function Process() {
  const steps = [
    { title: "Discovery Call", desc: "We understand your business process, pain points and current tools." },
    { title: "Workflow Mapping", desc: "We convert your manual process into a clear software flow." },
    { title: "Prototype", desc: "We show you screens and user journey before full development." },
    { title: "Development", desc: "We build the application with dashboards, database, automations and AI features." },
    { title: "Launch & Support", desc: "We deploy, test, train your team and improve based on feedback." }
  ];

  return (
    <section className="py-24" id="process">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            How We Build Your Custom Software
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-muted ml-4 md:ml-8 space-y-12 pb-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[21px] top-1 h-10 w-10 rounded-full bg-background border-4 border-muted flex items-center justify-center font-bold text-foreground">
                {index + 1}
              </div>
              <div className="bg-card border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
