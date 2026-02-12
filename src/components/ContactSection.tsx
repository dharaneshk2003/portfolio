import { Mail, MapPin, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`);
    window.open(`mailto:${portfolioData.email}?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-primary font-mono text-sm mb-2">Let's connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm currently open to new opportunities and interesting projects. Whether you have a question, a proposal, or just want to say hi — my inbox is always open.
              </p>
              <div className="space-y-4">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  {portfolioData.email}
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  India
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formState.name}
                onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors text-sm"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors text-sm resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity w-full justify-center"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
