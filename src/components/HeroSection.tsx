import { motion } from "framer-motion";
import { Eye, FolderOpen, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { useState } from "react";
import ResumeDialog from "./ResumeDialog";

const roles = portfolioData.roles;

export default function HeroSection() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-3"
            >
              Hey there! 👋 I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
            >
              {portfolioData.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {roles.map((role, i) => (
                <span
                  key={role}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    i === 0
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed"
            >
              {portfolioData.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-effect"
              >
                <FolderOpen className="w-4 h-4" /> Go to Projects
              </a>
              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card hover:bg-secondary transition-colors font-semibold"
              >
                <Eye className="h-4 w-4"/> View Resume
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: portfolioData.github },
                { icon: Linkedin, href: portfolioData.linkedin },
                { icon: Mail, href: `mailto:${portfolioData.email}` },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden gradient-border glow-effect">
                <img
                  src={profilePhoto}
                  alt={portfolioData.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: window.innerWidth >= 640 ? [-5, 5, -5] : 0 }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 glass-card px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg"
              >
                <span className="font-mono text-xs sm:text-sm text-primary whitespace-nowrap">{'<Let\'s Connect/>'}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <ResumeDialog open={resumeOpen} onOpenChange={setResumeOpen} />
      </div>
    </section>
  );
}
