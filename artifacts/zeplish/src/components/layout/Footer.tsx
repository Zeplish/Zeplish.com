export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-background/10 pb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold font-heading tracking-tight mb-4">
              Zeplish<span className="text-accent">.</span>
            </div>
            <p className="text-background/70 max-w-sm">
              Custom AI-powered business software for SMEs. We build software around the way your business actually works.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Services", id: "services" },
                { label: "Case Studies", id: "case-studies" },
                { label: "Process", id: "process" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className="text-background/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-background/70">
              <li>hello@zeplish.com</li>
              <li>zeplish.com</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-background/50 text-sm">
          <p>© 2025 Zeplish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
