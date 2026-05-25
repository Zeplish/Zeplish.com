import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div
          className="text-2xl font-bold font-heading tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Zeplish<span className="text-accent">.</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: "Services", id: "services" },
            { label: "Case Studies", id: "case-studies" },
            { label: "Process", id: "process" },
            { label: "Industries", id: "industries" },
            { label: "Contact", id: "contact" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <Button
          onClick={() => scrollTo("contact")}
          className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Book a Free Consultation
        </Button>
      </div>
    </header>
  );
}
