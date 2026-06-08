import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import content from "@/content.json";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, navigate] = useLocation();
  const isHome = location === "/";
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavLink = (id: string) => {
    setMobileOpen(false);
    if (isHome) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleCta = () => {
    setMobileOpen(false);
    if (isHome) {
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? "bg-background/95 backdrop-blur-md border-b shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div
            className="text-2xl font-bold font-heading tracking-tight cursor-pointer select-none"
            onClick={handleLogoClick}
          >
            <span className="text-accent">{content.site.name}</span>
            <span className="text-foreground">.</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {content.nav.links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavLink(link.id)}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <Button
            onClick={handleCta}
            className="hidden lg:inline-flex bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {content.nav.cta}
          </Button>

          <button
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-20 px-6 flex flex-col lg:hidden"
          >
            <nav className="flex flex-col gap-1 mt-4">
              {content.nav.links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavLink(link.id)}
                  className="text-left text-xl font-medium font-heading py-4 border-b border-border text-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="mt-8">
              <Button
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 text-base"
                onClick={handleCta}
              >
                {content.nav.cta}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
