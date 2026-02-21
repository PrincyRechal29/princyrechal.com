import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, CheckCircle2, Cloud, Code2, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const skillGroups = [
  {
    title: "Cloud & Platform",
    items: ["Kubernetes", "GKE", "AKS", "Terraform", "Helm", "Docker"],
    icon: Cloud,
  },
  {
    title: "Reliability & Security",
    items: ["SLO Design", "Observability", "Policy as Code", "Identity Hardening", "DR Planning"],
    icon: ShieldCheck,
  },
  {
    title: "Delivery Systems",
    items: ["GitHub Actions", "Argo CD", "Release Automation", "Quality Gates", "Runtime Monitoring"],
    icon: Layers3,
  },
];

const projects = [
  {
    name: "Multi-Region Kubernetes Foundation",
    result: "Cut deployment lead time by 52% with standardized cluster templates and promotion workflows.",
    stack: ["Terraform", "GKE", "Argo CD"],
  },
  {
    name: "FinOps Guardrails for Shared Cloud",
    result: "Reduced monthly overspend by 28% through tagging policy checks and budget-aware pipelines.",
    stack: ["OPA", "GitHub Actions", "BigQuery"],
  },
  {
    name: "Incident-Ready Observability Platform",
    result: "Dropped MTTR from 47m to 18m using SLO-backed alerts and service ownership dashboards.",
    stack: ["Prometheus", "Grafana", "OpenTelemetry"],
  },
];

const experiences = [
  {
    period: "2024 - Present",
    title: "Cloud & DevOps Engineer",
    summary: "Leading platform reliability initiatives, internal developer tooling, and delivery automation.",
  },
  {
    period: "2022 - 2024",
    title: "Infrastructure Engineer",
    summary: "Built reusable Terraform modules and scalable CI/CD foundations for multi-team cloud workloads.",
  },
  {
    period: "2020 - 2022",
    title: "Systems Engineer",
    summary: "Improved deployment consistency and production observability for customer-facing services.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay } }),
};

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28">
        <section className="brand-container relative pb-20 pt-10 md:pt-16">
          <div className="grid-lines absolute inset-0 -z-10 rounded-3xl opacity-45" />
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              animate={reduceMotion ? {} : "show"}
              variants={fadeUp}
              custom={0}
            >
              <p className="section-kicker mb-5">Cloud Engineering Portfolio</p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#162749] md:text-6xl">
                Building modern infrastructure that teams trust at scale.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4f607f]">
                I design cloud platforms, resilient delivery systems, and operational standards that let product teams move
                faster without sacrificing reliability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-[#123f89] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1957b7]"
                >
                  Explore Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-[#c7d4eb] bg-white/85 px-5 py-3 text-sm font-bold text-[#193868] transition-colors hover:bg-white"
                >
                  Start a Conversation
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-5 text-sm text-[#526280]">
                <span className="inline-flex items-center gap-2">
                  <Sparkles size={16} className="text-[#0f66b4]" /> CI/CD Strategy
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#0f66b4]" /> Reliability by Design
                </span>
                <span className="inline-flex items-center gap-2">
                  <Code2 size={16} className="text-[#0f66b4]" /> Infrastructure as Code
                </span>
              </div>
            </motion.div>

            <motion.aside
              initial={reduceMotion ? false : "hidden"}
              animate={reduceMotion ? {} : "show"}
              variants={fadeUp}
              custom={0.12}
              className="glass-panel rounded-3xl p-6 md:p-8"
            >
              <p className="section-kicker">Snapshot</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#19305a]">Outcome-focused engineering</h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-[#51617f]">
                  <CheckCircle2 size={18} className="mt-0.5 text-[#0f66b4]" />
                  Platform architecture for secure multi-environment delivery.
                </li>
                <li className="flex items-start gap-3 text-[#51617f]">
                  <CheckCircle2 size={18} className="mt-0.5 text-[#0f66b4]" />
                  Consistent release pipelines with quality and rollback controls.
                </li>
                <li className="flex items-start gap-3 text-[#51617f]">
                  <CheckCircle2 size={18} className="mt-0.5 text-[#0f66b4]" />
                  Operational metrics that improve reliability and team velocity.
                </li>
              </ul>
              <div className="mt-7 rounded-2xl border border-[#d2dbec] bg-[#eff4ff] p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-[#4d6794]">Current Focus</p>
                <p className="mt-2 text-sm font-semibold text-[#1e3a67]">
                  Kubernetes governance, secure CI/CD blueprints, and observability maturity.
                </p>
              </div>
            </motion.aside>
          </div>
        </section>

        <section id="about" className="brand-container py-12 md:py-16">
          <div className="glass-panel rounded-3xl p-8 md:p-10">
            <p className="section-kicker">About</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Infrastructure partner for <span className="headline-gradient">high-growth engineering teams</span>
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#4f607f] md:text-lg">
              I work at the intersection of platform engineering and product delivery. My approach balances speed,
              maintainability, and operational safety so teams can ship confidently across cloud environments.
            </p>
          </div>
        </section>

        <section id="skills" className="brand-container py-12 md:py-16">
          <p className="section-kicker mb-3">Capabilities</p>
          <h2 className="mb-8 text-3xl font-bold text-[#1b2f55] md:text-4xl">Skills that move systems forward</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map(({ title, items, icon: Icon }) => (
              <article key={title} className="glass-panel rounded-2xl p-6">
                <div className="mb-4 inline-flex rounded-lg bg-[#e8f1ff] p-2 text-[#1256a7]">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-[#1f355f]">{title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="brand-container py-12 md:py-16">
          <p className="section-kicker mb-3">Selected Work</p>
          <h2 className="mb-8 text-3xl font-bold text-[#1b2f55] md:text-4xl">Recent project outcomes</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="glass-panel rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-[#1f355f]">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#51617f]">{project.result}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <span key={tool} className="chip">
                      {tool}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#1558ab]">
                  Discuss this model <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="brand-container py-12 md:py-16">
          <p className="section-kicker mb-3">Experience</p>
          <h2 className="mb-8 text-3xl font-bold text-[#1b2f55] md:text-4xl">Career progression</h2>
          <div className="space-y-4">
            {experiences.map((item) => (
              <article key={item.title} className="glass-panel rounded-2xl p-6 md:p-7">
                <p className="font-mono text-xs uppercase tracking-[0.13em] text-[#5470a1]">{item.period}</p>
                <h3 className="mt-1 text-xl font-semibold text-[#1f355f]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#51617f]">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="brand-container pb-16 pt-12 md:pb-20 md:pt-16">
          <div className="glass-panel rounded-3xl p-8 md:p-12">
            <p className="section-kicker">Contact</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-[#1b2f55] md:text-5xl">
              Let&apos;s build your next reliable cloud platform.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4f607f] md:text-lg">
              Available for full-time roles and consulting engagements focused on cloud architecture, DevOps transformation,
              and platform reliability.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:princyrechal@gmail.com"
                className="rounded-xl bg-[#123f89] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1957b7]"
              >
                princyrechal@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/princyrechal"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#c7d4eb] bg-white/85 px-5 py-3 text-sm font-bold text-[#193868] transition-colors hover:bg-white"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
