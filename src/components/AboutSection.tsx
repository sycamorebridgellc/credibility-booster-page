import { Briefcase, GraduationCap, Target, Users } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "MBA, Northwestern University — Kellogg School of Management",
  },
  {
    icon: Briefcase,
    title: "Professional Experience",
    description: "[X] years in [industry/role], with expertise in operations, finance, and strategy.",
  },
  {
    icon: Target,
    title: "ETA Focus",
    description: "Self-funded search targeting businesses with $1M–$5M in revenue and strong fundamentals.",
  },
  {
    icon: Users,
    title: "Leadership Philosophy",
    description: "Hands-on operator committed to empowering teams and honoring the culture you've built.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">About Me</p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            A Dedicated Buyer for Your Business
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm an entrepreneur pursuing the acquisition of a single, well-run small business. 
            My goal is not to flip or restructure — it's to step in as a long-term operator, 
            preserve what makes your business special, and help it reach its next chapter of growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {credentials.map((item) => (
            <div key={item.title} className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 font-sans">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
