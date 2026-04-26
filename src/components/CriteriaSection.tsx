import { DollarSign, Building2, ArrowRightLeft } from "lucide-react";

const criteria = [
  {
    icon: DollarSign,
    title: "Financial",
    points: [
      "Five years of consistent profitability",
      "Revenues between $2M and $10M",
      "Cash flows between $500K and $2M",
    ],
  },
  {
    icon: Building2,
    title: "Business Characteristics",
    points: [
      "Founder or family-owned, based in Chicagoland",
      "Reputation for quality and reliability",
      "Significant recurring revenues",
      "Strong, tenured management team",
      "Loyal customer base — no single-client dependency",
    ],
  },
  {
    icon: ArrowRightLeft,
    title: "Transition Opportunity",
    points: [
      "Owner seeking retirement or a reduced daily role",
      "Looking for a dedicated successor, not a financial buyer",
      "Commitment to preserving culture and day-to-day operations",
      "Professional handoff ensuring stability for employees and customers",
    ],
  },
];

const CriteriaSection = () => {
  return (
    <section id="criteria" className="py-24" style={{ background: "var(--section-gradient)" }}>
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Acquisition Criteria
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            What We're Looking For
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We seek healthy, established companies where we can step in as a long-term
            operator — preserving what makes the business special while driving sustainable growth.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {criteria.map((category) => (
            <div key={category.title} className="p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground font-sans text-lg mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-gold flex-shrink-0 leading-relaxed">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CriteriaSection;
