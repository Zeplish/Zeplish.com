import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import content from "@/content.json";

export function Testimonials() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {content.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/8 border border-background/15 rounded-2xl p-8 flex flex-col h-full hover:bg-background/12 transition-colors"
            >
              <Quote className="h-8 w-8 text-accent/60 mb-6" />
              <p className="text-lg font-medium mb-8 flex-1 text-background/90">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-background">{testimonial.author}</p>
                <p className="text-sm text-background/60">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
