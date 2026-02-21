/*
 * DESIGN: Obsidian Architecture — Footer
 * Minimal, clean, with glowing top border
 */
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1117] border-t border-white/5 py-10">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-[#E6EDF3]">Princy Rechal</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#58A6FF]" />
            <span className="font-subheading text-xs text-[#8B949E]">DevOps &amp; Cloud Engineer</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/princyrechal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#8B949E] hover:text-[#58A6FF] hover:bg-[#58A6FF]/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/princyrechal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#8B949E] hover:text-[#58A6FF] hover:bg-[#58A6FF]/10 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:princyrechal@gmail.com"
              className="p-2 rounded-lg text-[#8B949E] hover:text-[#58A6FF] hover:bg-[#58A6FF]/10 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-mono-custom text-[11px] text-[#484F58] flex items-center gap-1.5">
            © {year} Princy Rechal. Built with
            <Heart size={10} className="text-[#58A6FF]" fill="currentColor" />
          </p>
        </div>

        {/* Bottom nav */}
        <div className="mt-6 pt-6 border-t border-white/4 flex flex-wrap justify-center gap-6">
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              className="font-subheading text-xs text-[#484F58] hover:text-[#8B949E] transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
