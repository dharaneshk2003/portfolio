import { Code2, Heart, Lightbulb, Rocket } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing readable, maintainable code" },
  { icon: Lightbulb, label: "Problem Solver", desc: "Turning complexity into simplicity" },
  { icon: Rocket, label: "Fast Learner", desc: "Adapting to new technologies quickly" },
  { icon: Heart, label: "UI Enthusiast", desc: "Crafting delightful user experiences" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            About <span className="gradient-text">Me</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-1 gap-12 items-start">
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {portfolioData.about}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="glass-card p-4 group hover:border-primary/30 transition-colors">
                  <Icon className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-sm mb-1">{label}</h4>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
