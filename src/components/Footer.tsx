import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-serif mb-2">Satanand</h3>
            <p className="text-primary-foreground/70 text-sm">
              MIS Executive & Automation Expert
            </p>
          </div>

          <div className="flex items-center gap-8">
            <nav className="flex gap-6 text-sm">
              <a href="#about" className="text-primary-foreground/70 hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Contact
              </a>
            </nav>

            <button
              onClick={scrollToTop}
              className="p-2 bg-primary/20 hover:bg-primary rounded-full transition-colors group"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5 text-primary-foreground group-hover:text-primary-foreground" />
            </button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Satanand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
