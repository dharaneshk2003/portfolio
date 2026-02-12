import { portfolioData } from "@/data/portfolio-data";
import ScrollReveal from "./ScrollReveal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-primary font-mono text-sm mb-2">Where I've worked</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            My <span className="gradient-text">Experience</span>
          </h2>
        </ScrollReveal>

        <div className="relative pl-12 space-y-12">
          <div className="timeline-line" />

          {portfolioData.experience.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative">
                <div className="timeline-dot top-2" />
                <div className="glass-card p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-primary/10 text-primary">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
