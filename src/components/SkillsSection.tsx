import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio-data";
import ScrollReveal from "./ScrollReveal";

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "mobile", label: "Mobile" },
  { key: "sapAbap", label: "SAP ABAP" },
  { key: "languages", label: "Languages" },
  { key: "tools", label: "Tools" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [active, setActive] = useState<CategoryKey>("frontend");
  const skills = portfolioData.skills[active];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-primary font-mono text-sm mb-2">What I work with</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            My <span className="gradient-text">Skills</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  active === cat.key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-6 sm:p-8 max-w-2xl"
        >
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
