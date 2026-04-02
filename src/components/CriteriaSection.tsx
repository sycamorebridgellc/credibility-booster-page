import { CheckCircle } from "lucide-react";

const criteria = [
  "Revenue between $1M and $5M",
  "Profitable with consistent cash flow",
  "Strong, loyal customer base",
  "Owner looking to retire or transition",
  "Dedicated employees and healthy culture",
  "Located in [your region / anywhere in the U.S.]",
];

const CriteriaSection = () => {
  return (
    <section className="py-24" style={{ background: "var(--section-gradient)" }}>
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Acquisition Criteria
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            What I'm Looking For
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm looking for a business with a strong foundation where I can add value 
            as a hands-on operator. Here's what I typically look for:
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {criteria.map((item) => (
            <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
              <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-foreground font-sans">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CriteriaSection;
