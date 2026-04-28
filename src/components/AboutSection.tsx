import { Briefcase, GraduationCap, Target, Users } from "lucide-react";
import headshot from "@/assets/headshot.png";

const credentials = [
  {
    icon: Briefcase,
    title: "Professional Experience",
    description: "Background spanning Fortune 500 companies and tech startups, with expertise in improving operations and managing financial growth.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "MBA from Northwestern University's Kellogg School of Management, concentrating on Marketing and Entrepreneurship.",
  },
  {
    icon: Target,
    title: "Search Focus",
    description: "Seeking one Chicagoland company to lead and manage for the long term — not a portfolio play, but a personal commitment.",
  },
  {
    icon: Users,
    title: "Leadership Philosophy",
    description: "Growth comes from disciplined, daily improvements — not radical changes. The real value of a company is built by the people who show up every day.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="flex-shrink-0">
            <img
              src={headshot}
              alt="Ryan Aurand"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-[30%_center] border-4 border-border shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">About Ryan</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              A Dedicated Buyer for Your Business
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Ryan's background is rooted in the practical side of business—specializing in 
              operational turnarounds, restructuring, and stabilizing distressed organizations. 
              Having worked within operating teams at both Fortune 500 companies and smaller startups, 
              he has developed a straightforward approach to identifying efficiencies and driving steady results.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ryan and his wife live in the Chicagoland area, and his search is motivated by a 
              desire to remain close to family and his local community. He is committed to building 
              genuine relationships with the team and ensuring a smooth, professional handoff — 
              offering a steady hand for day-to-day operations and a focus on maintaining the 
              stability and health of the business.
            </p>
          </div>
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
