import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Zeplish helped us replace manual tracking with a simple software system.",
      author: "Operations Manager",
      company: "Daycare Business"
    },
    {
      quote: "The dashboard gave us visibility we never had before.",
      author: "Founder",
      company: "Real Estate Agency"
    },
    {
      quote: "Our follow-ups became easier and more organized.",
      author: "Director",
      company: "Coaching Institute"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-muted/20 border-none shadow-sm">
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-accent/40 mb-6" />
                  <p className="text-lg font-medium mb-8 flex-1">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
