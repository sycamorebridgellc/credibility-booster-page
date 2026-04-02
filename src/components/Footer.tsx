import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ryan Aurand. All rights reserved.
        </p>
        <a
          href="https://www.linkedin.com/company/sycamore-bridge/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
