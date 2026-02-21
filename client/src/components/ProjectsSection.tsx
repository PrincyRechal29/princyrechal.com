/*
 * DESIGN: Obsidian Architecture — Projects section
 * Asymmetric masonry-style card grid, featured project card is larger
 * Subtle hexagonal background texture
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers, Cloud, Code2, Network } from "lucide-react";

const PROJECTS_BG = "https://private-us-east-1.manuscdn.com/sessionFile/9DKEyQsPSCLZFNYuLzb6Eq/sandbox/2VnZUkfBi2hXv5XDfJ77XC-img-3_1771637498000_na1fn_cHJvamVjdHMtYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOURLRXlRc1BTQ0xaRk5ZdUx6YjZFcS9zYW5kYm94LzJWblpVa2ZCaTJoWHY1WERmSjc3WEMtaW1nLTNfMTc3MTYzNzQ5ODAwMF9uYTFmbl9jSEp2YW1WamRITXRZbWMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OOaVmY0mh-pWcnpfkZ2xhLWE3CF5~JTXp5j5-RTIV3BARNXNHx-N~L2ly6dxhKxEqzq9nr~TBEJJ7OeUp0tEqBp3GupyHQwWU1ht7~juW~m~v6VpvWbYr7O9c3YoQZ3ZznvjdFjwrGZbjo9SeYDzEGjTnPQ01okQi2Bg6movWgMKKtuy16YAaNV2H5Y4IrmoHRmI7XYDmSfhnOWCngyVgpW0YvyOISqpJo8E-OfMUu2EPDJoB0pP1kqzctxBCRlQwGFrPe-7R32Vt8bU5TvIiCeetGkBGLbPhP9nzyBMq4LX6aBGP9ciaEKRQtqj50L7~wLLmtHr-LvUrsHqDHfRJQ__";

const projects = [
  {
    id: 1,
    featured: true,
    icon: Layers,
    iconColor: "#58A6FF",
    title: "CubeGraph",
    subtitle: "Kubernetes Incident Intelligence Platform",
    description:
      "An intelligent observability platform designed to detect, correlate, and diagnose Kubernetes incidents in real time. CubeGraph aggregates cluster events, pod logs, and metrics to surface actionable incident intelligence — reducing mean time to resolution (MTTR) for cloud-native teams.",
    tags: ["Kubernetes", "GKE", "Go", "Prometheus", "Grafana", "Event Correlation"],
    status: "Active",
    statusColor: "#56D364",
    links: { github: "https://github.com/princyrechal", demo: null },
  },
  {
    id: 2,
    featured: false,
    icon: Cloud,
    iconColor: "#79C0FF",
    title: "Cloud Infrastructure Automation",
    subtitle: "Terraform + GCP/Azure IaC",
    description:
      "End-to-end infrastructure automation using Terraform modules for GCP and Azure. Provisions VPCs, subnets, VM instances, load balancers, autoscaling groups, and GKE clusters with a single declarative configuration. Includes state management, remote backends, and CI/CD integration.",
    tags: ["Terraform", "GCP", "Azure", "IaC", "CI/CD", "Autoscaling"],
    status: "Production",
    statusColor: "#56D364",
    links: { github: "https://github.com/princyrechal", demo: null },
  },
  {
    id: 3,
    featured: false,
    icon: Network,
    iconColor: "#56D364",
    title: "CI/CD Pipeline Framework",
    subtitle: "Automated Deployment Pipelines",
    description:
      "A reusable CI/CD pipeline framework built with GitHub Actions and integrated with Kubernetes deployments. Features automated testing, container image builds, vulnerability scanning, and zero-downtime rolling deployments to GKE clusters.",
    tags: ["GitHub Actions", "Docker", "Kubernetes", "Helm", "Security Scanning"],
    status: "Active",
    statusColor: "#56D364",
    links: { github: "https://github.com/princyrechal", demo: null },
  },
  {
    id: 4,
    featured: false,
    icon: Code2,
    iconColor: "#F78166",
    title: "Network Simulation (C++)",
    subtitle: "Academic Networking Project",
    description:
      "A C++ implementation of core networking protocols including routing algorithms (Dijkstra's shortest path), packet switching simulation, and network topology visualization. Demonstrates deep understanding of OSI model layers and network infrastructure fundamentals.",
    tags: ["C++", "Networking", "Algorithms", "Simulation", "Data Structures"],
    status: "Academic",
    statusColor: "#8B949E",
    links: { github: "https://github.com/princyrechal", demo: null },
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#0D1117] relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${PROJECTS_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/80 via-transparent to-[#0D1117]/80" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#58A6FF]/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Projects</span>
          <div className="accent-line mt-2 w-12 mb-4" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#E6EDF3] leading-tight">
            What I've built
          </h2>
          <p className="mt-3 text-[#8B949E] font-subheading max-w-xl">
            A selection of projects spanning cloud infrastructure, DevOps automation, and systems programming.
          </p>
        </motion.div>

        {/* Featured project */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8 card-glow group p-8 rounded-2xl border border-white/8 bg-[#161B22] relative overflow-hidden"
          >
            {/* Featured badge */}
            <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#58A6FF]/10 border border-[#58A6FF]/25">
              <span className="w-1.5 h-1.5 rounded-full bg-[#58A6FF]" />
              <span className="font-mono-custom text-[10px] text-[#58A6FF]">Featured</span>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl" style={{ background: `${featured.iconColor}15` }}>
                    <featured.icon size={20} style={{ color: featured.iconColor }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#E6EDF3]">{featured.title}</h3>
                    <p className="font-mono-custom text-xs text-[#8B949E] mt-0.5">{featured.subtitle}</p>
                  </div>
                </div>
                <p className="font-subheading text-[#8B949E] leading-relaxed text-sm">{featured.description}</p>
              </div>

              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="skill-badge">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: featured.statusColor }} />
                    <span className="font-mono-custom text-[11px]" style={{ color: featured.statusColor }}>{featured.status}</span>
                  </div>
                  <a
                    href={featured.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#8B949E] hover:text-[#58A6FF] transition-colors text-sm font-subheading"
                  >
                    <Github size={14} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Rest of projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {rest.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="card-glow group p-6 rounded-xl border border-white/6 bg-[#161B22] flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl" style={{ background: `${project.iconColor}15` }}>
                  <project.icon size={18} style={{ color: project.iconColor }} />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.statusColor }} />
                  <span className="font-mono-custom text-[10px]" style={{ color: project.statusColor }}>{project.status}</span>
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-base text-[#E6EDF3] mb-1">{project.title}</h3>
                <p className="font-mono-custom text-[10px] text-[#8B949E] mb-3">{project.subtitle}</p>
                <p className="font-subheading text-[#8B949E] text-sm leading-relaxed line-clamp-3">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="skill-badge">{tag}</span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-1 border-t border-white/5">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#8B949E] hover:text-[#58A6FF] transition-colors text-xs font-subheading"
                >
                  <Github size={12} />
                  Code
                </a>
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#8B949E] hover:text-[#58A6FF] transition-colors text-xs font-subheading"
                  >
                    <ExternalLink size={12} />
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
