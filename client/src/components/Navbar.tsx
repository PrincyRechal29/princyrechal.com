import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jumpTo = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled ? "glass-panel" : "bg-white/70 border border-[#d8e0f0]/55"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-left">
            <BrandLogo compact />
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => jumpTo(link.href)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-[#415272] transition-colors hover:bg-[#e8eefb] hover:text-[#0f2e63]"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:princyrechal@gmail.com"
              className="ml-3 rounded-lg bg-[#0f3f8b] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1551aa]"
            >
              Book a Call
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="rounded-lg border border-[#d7deec] p-2 text-[#23385f] md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <nav className="space-y-1 border-t border-[#d8deeb] px-4 py-3 md:hidden">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => jumpTo(link.href)}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#415272] hover:bg-[#e8eefb]"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:princyrechal@gmail.com"
              className="mt-2 block rounded-lg bg-[#0f3f8b] px-3 py-2 text-center text-sm font-semibold text-white"
            >
              Book a Call
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
