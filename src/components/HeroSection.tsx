import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center" style={{ background: "var(--hero-gradient)" }}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzEuMTA1IDAgMi0uODk1IDItMnMtLjg5NS0yLTItMi0yIC44OTUtMiAyIC44OTUgMiAyIDJ6bTAtMjBjMS4xMDUgMCAyLS44OTUgMi0ycy0uODk1LTItMi0yLTIgLjg5NS0yIDIgLjg5NSAyIDIgMnptMCAyMGMxLjEwNSAwIDItLjg5NSAyLTJzLS44OTUtMi0yLTItMiAuODk1LTIgMiAuODk1IDIgMiAyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      <div className="container relative z-10 text-center px-6">
        <img src={logo} alt="Sycamore Bridge" className="h-28 md:h-36 mx-auto mb-8" />
        <p className="text-primary-foreground/60 uppercase tracking-[0.25em] text-sm font-medium mb-6">
          Entrepreneurship Through Acquisition
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground mb-6 leading-tight">
          Ryan Aurand
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Seeking to acquire and operate a small-to-medium business.
          Committed to preserving legacies while driving sustainable growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg" onClick={scrollToContact}>
            Get in Touch
          </Button>
          <Button variant="heroOutline" size="lg" onClick={scrollToAbout}>
            Learn More
          </Button>
        </div>
      </div>
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default HeroSection;
