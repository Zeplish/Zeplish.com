import content from "@/content.json";

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-background/10 pb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold font-heading tracking-tight mb-4">
              <span className="text-accent">{content.site.name}</span>
              <span className="text-background">.</span>
            </div>
            <p className="text-background/70 max-w-sm leading-relaxed">
              {content.site.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-3">
              {content.nav.links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-background/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-background">Contact</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li>
                <a href={`mailto:${content.site.email}`} className="hover:text-white transition-colors">
                  {content.site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-background/40 text-sm">
          <p>{content.site.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
