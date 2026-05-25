import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-accent text-accent-foreground text-center">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Have a Business Process You Want to Automate?
          </h2>
          <p className="text-lg md:text-xl text-accent-foreground/90 mb-10 leading-relaxed">
            If your business is still depending on Excel, WhatsApp, manual reminders or disconnected tools, Zeplish can help you build a custom system that saves time and improves control.
          </p>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="text-base h-14 px-8 mb-4 font-semibold text-accent"
            onClick={scrollToContact}
          >
            Book a Free Consultation
          </Button>
          <p className="text-sm font-medium text-accent-foreground/80">
            Tell us your business problem. We'll suggest what software can be built.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
