import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo.png";
import heroSycamore from "@/assets/hero-sycamore.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroSycamore}
        alt="Sunlit sycamore tree canopy"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, hsl(217 50% 20% / 0.82), hsl(217 45% 14% / 0.78))" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(217 50% 10% / 0.45) 0%, transparent 65%)",
        }}
      />
      <div className="container relative z-10 text-center px-6">
        <img
          src={logo}
          alt="Sycamore Bridge"
          className="h-40 md:h-56 mx-auto mb-8 mix-blend-overlay opacity-60 [filter:sepia(0.4)_brightness(1.4)_contrast(0.9)]"
        />
        <p className="text-primary-foreground/85 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light font-serif">
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
