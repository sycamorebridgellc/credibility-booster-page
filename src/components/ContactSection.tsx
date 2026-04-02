import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you shortly.",
    });
    setFormData({ name: "", email: "", business: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you're considering selling your business or just want to learn more, 
            I'd love to hear from you. All conversations are strictly confidential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-card"
            />
            <Input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-card"
            />
            <Input
              placeholder="Business name (optional)"
              value={formData.business}
              onChange={(e) => setFormData({ ...formData, business: e.target.value })}
              className="bg-card"
            />
            <Textarea
              placeholder="Tell me a bit about your business and what you're looking for..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-card"
            />
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>

          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground font-sans mb-1">Email Directly</h3>
                <a href="mailto:ryan@sycamorebridgellc.com" className="text-muted-foreground hover:text-gold transition-colors">
                  ryan@sycamorebridgellc.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground font-sans mb-1">Schedule a Call</h3>
                <a
                  href="https://calendly.com/ryan-aurand-kellogg/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Book a time on my calendar →
                </a>
              </div>
            </div>
            <div className="p-5 rounded-lg bg-muted border border-border">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Every conversation is confidential. I respect the sensitivity of exploring 
                a business transition and will never share your information."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
