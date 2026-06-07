import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
import { Features } from "@/components/sections/Features";
import { Industries } from "@/components/sections/Industries";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export function Home() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const attempt = (tries: number) => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (tries > 0) {
        setTimeout(() => attempt(tries - 1), 100);
      }
    };
    attempt(10);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/20">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <CaseStudies />
        <Process />
        <Features />
        <Industries />
        <WhyUs />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
