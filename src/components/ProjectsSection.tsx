import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, LayoutPanelLeft } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import ScrollReveal from "./ScrollReveal";

const tabs = [
  { key: "sap", label: "SAP Projects" },
  { key: "web", label: "Web Projects" },
  { key: "mobile", label: "Mobile Projects" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("web");
  const projects = portfolioData.projects[activeTab];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-primary font-mono text-sm mb-2">What I've built</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            My <span className="gradient-text">Projects</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    {"github" in project && project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {"live" in project && project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                      >
                        {project.tech.includes("React Native") ? <LayoutPanelLeft className="w-4 h-4"/> : <ExternalLink className="w-4 h-4" />}
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-xs font-mono bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <span className="font-semibold text-foreground text-xs uppercase tracking-wider">Problem</span>
                    <p className="mt-1 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground text-xs uppercase tracking-wider">Solution</span>
                    <p className="mt-1 leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-primary text-xs uppercase tracking-wider">Impact</span>
                    <p className="mt-1 leading-relaxed">{project.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
