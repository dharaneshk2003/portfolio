import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} {portfolioData.fullName}
          </p>
          <div className="flex gap-4">
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
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
