/*
 * DESIGN: Obsidian Architecture — Hero section
 * Large typographic statement on left, animated network mesh on right
 * Dot-grid background, staggered entrance animations
 */
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/9DKEyQsPSCLZFNYuLzb6Eq/sandbox/2VnZUkfBi2hXv5XDfJ77XC-img-1_1771637496000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOURLRXlRc1BTQ0xaRk5ZdUx6YjZFcS9zYW5kYm94LzJWblpVa2ZCaTJoWHY1WERmSjc3WEMtaW1nLTFfMTc3MTYzNzQ5NjAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RgQlHRAp6FZ1ZCYDrIqrG7mISs-MhfbDMcYCJFkPaylQD7tS2gAuHPIquuAkbUmVKWiuZso0JEEG1IcWN9bpmP82Hd3lh5CpMBP335~rFBNGx7~tO4dHItLjyDK-yilD4-wEntdHgcK3dl7GKN6eHvIWphV0~Zrh73VqxW32G3EuPl5pp5yVsO2QgWCgFpSd5UYi9F1VEQcxkzG7RDZF4PKDvbdWZTYRYHf-A~GPeQpSaqeNs9Iftg4uGc4wD2pxSIaxq5Dwbr6MG4~9DzuWjT7lLzHtZ3NmHrjCIzfxRR-M4UyFO-N1KNIm8erGGaX--UeaxqFJYRJP-XZvlYnAUA__";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12 },
  }),
};

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const COUNT = 60;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(88, 166, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(88, 166, 255, 0.5)";
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0D1117" }}
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-[#0D1117]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />

      {/* Animated canvas — right side */}
      <canvas
        ref={canvasRef}
        className="absolute right-0 top-0 w-1/2 h-full opacity-60"
        style={{ pointerEvents: "none" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-7xl pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 mb-8"
          >
            <span className="section-label">Available for opportunities</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display font-bold leading-[1.05] tracking-tight mb-4"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            <span className="text-[#E6EDF3]">Princy</span>
            <br />
            <span className="gradient-text">Rechal</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-mono-custom text-sm text-[#58A6FF]">~/</span>
            <p className="font-subheading text-lg md:text-xl text-[#8B949E] font-medium">
              DevOps &amp; Cloud Engineer
              <span className="text-[#58A6FF]/60 mx-2">|</span>
              Kubernetes Enthusiast
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-subheading text-base md:text-lg text-[#8B949E] max-w-xl leading-relaxed mb-10"
          >
            Building scalable cloud infrastructure and reliable systems.
            Turning complex infrastructure challenges into elegant, automated solutions.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex items-center gap-2 px-6 py-3 bg-[#58A6FF] text-[#0D1117] font-subheading font-semibold text-sm rounded-md hover:bg-[#79BEFF] transition-all duration-200 shadow-[0_0_20px_rgba(88,166,255,0.3)] hover:shadow-[0_0_30px_rgba(88,166,255,0.5)]"
            >
              View Projects
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 border border-[#58A6FF]/40 text-[#58A6FF] font-subheading font-medium text-sm rounded-md hover:bg-[#58A6FF]/10 hover:border-[#58A6FF]/70 transition-all duration-200"
            >
              Connect with Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4"
          >
            <a
              href="https://linkedin.com/in/princyrechal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#8B949E] hover:text-[#58A6FF] transition-colors duration-200 text-sm font-subheading"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <span className="w-px h-4 bg-[#30363D]" />
            <a
              href="https://github.com/princyrechal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#8B949E] hover:text-[#58A6FF] transition-colors duration-200 text-sm font-subheading"
            >
              <Github size={16} />
              GitHub
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label text-[10px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#58A6FF]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
