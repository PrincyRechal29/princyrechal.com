import { Github, Linkedin, Mail } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="border-t border-[#d8deeb] bg-white/70 py-10">
      <div className="brand-container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <BrandLogo />
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/princyrechal"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#d8deeb] bg-white p-2 text-[#334e78] transition-colors hover:bg-[#eef3ff]"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/princyrechal"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#d8deeb] bg-white p-2 text-[#334e78] transition-colors hover:bg-[#eef3ff]"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:princyrechal@gmail.com"
              className="rounded-lg border border-[#d8deeb] bg-white p-2 text-[#334e78] transition-colors hover:bg-[#eef3ff]"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
        <p className="mt-6 text-sm text-[#627290]">
          {new Date().getFullYear()} Princy Rechal. Designed for high-trust cloud engineering opportunities.
        </p>
      </div>
    </footer>
  );
}
