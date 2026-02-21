/*
 * DESIGN: Obsidian Architecture — fixed top nav, glassmorphism on scroll
 * Thin horizontal rule with glowing endpoints as design motif
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D1117]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
          >
            <span className="font-display font-bold text-lg text-white tracking-tight">
              PR
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#58A6FF] group-hover:shadow-[0_0_8px_#58A6FF] transition-shadow duration-300" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-subheading font-medium transition-colors duration-200 rounded-md group ${
                    isActive
                      ? "text-[#58A6FF]"
                      : "text-[#8B949E] hover:text-[#E6EDF3]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-[#58A6FF] transition-all duration-300 ${
                      isActive ? "w-4/5 opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-60"
                    }`}
                  />
                </button>
              );
            })}
            <a
              href="mailto:princyrechal@gmail.com"
              className="ml-4 px-4 py-1.5 text-sm font-subheading font-medium text-[#58A6FF] border border-[#58A6FF]/40 rounded-md hover:bg-[#58A6FF]/10 hover:border-[#58A6FF]/70 transition-all duration-200"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#8B949E] hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D1117]/95 backdrop-blur-md border-b border-white/5">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2.5 text-sm font-subheading text-[#8B949E] hover:text-white hover:bg-white/5 rounded-md transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:princyrechal@gmail.com"
              className="mt-2 px-3 py-2.5 text-sm font-subheading font-medium text-[#58A6FF] border border-[#58A6FF]/30 rounded-md hover:bg-[#58A6FF]/10 transition-all duration-200 text-center"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
