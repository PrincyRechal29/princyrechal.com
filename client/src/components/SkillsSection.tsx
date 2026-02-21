/*
 * DESIGN: Obsidian Architecture — Skills section
 * Category cards with monospace skill badges, animated on scroll entry
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Layers, Network, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Cloud,
    label: "Cloud Platforms",
    color: "#58A6FF",
    skills: ["Google Cloud Platform (GCP)", "Microsoft Azure", "Cloud Run", "GKE", "Azure AKS", "Cloud Storage", "VPC Networks"],
  },
  {
    icon: Layers,
    label: "DevOps & Automation",
    color: "#79C0FF",
    skills: ["Terraform", "Docker", "Kubernetes", "CI/CD Pipelines", "GitHub Actions", "Helm", "ArgoCD"],
  },
  {
    icon: Network,
    label: "Infrastructure",
    color: "#56D364",
    skills: ["VM Provisioning", "Networking & VPC", "Load Balancing", "Autoscaling", "Firewall Rules", "DNS Management", "SSL/TLS"],
  },
  {
    icon: Wrench,
    label: "Tools & Platforms",
    color: "#F78166",
    skills: ["Linux", "Git & GitHub", "Prometheus", "Grafana", "Bash Scripting", "YAML/JSON", "Monitoring & Alerting"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#161B22] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#58A6FF]/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#58A6FF]/15 to-transparent" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Technical Skills</span>
          <div className="accent-line mt-2 w-12 mb-4" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#E6EDF3] leading-tight">
            The tools I build with
          </h2>
          <p className="mt-3 text-[#8B949E] font-subheading max-w-xl">
            A curated stack of technologies I use daily to design, build, and operate cloud-native infrastructure.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map(({ icon: Icon, label, color, skills }) => (
            <motion.div
              key={label}
              variants={cardVariants}
              className="card-glow group p-6 rounded-xl border border-white/6 bg-[#0D1117] flex flex-col gap-5"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <h3 className="font-display font-semibold text-sm text-[#C9D1D9]">{label}</h3>
              </div>

              {/* Divider */}
              <div className="h-px" style={{ background: `linear-gradient(90deg, ${color}30, transparent)` }} />

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono-custom text-[11px] px-2.5 py-1 rounded-full border transition-all duration-200"
                    style={{
                      borderColor: `${color}25`,
                      background: `${color}08`,
                      color: `${color}CC`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent — tech stack logos row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <p className="section-label text-center mb-6">Core Technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["GCP", "Azure", "Kubernetes", "Terraform", "Docker", "CI/CD", "Linux", "GitHub", "Prometheus", "Grafana", "Helm", "Bash"].map((tech) => (
              <span
                key={tech}
                className="font-mono-custom text-xs px-4 py-2 rounded-full border border-white/8 bg-white/3 text-[#8B949E] hover:text-[#58A6FF] hover:border-[#58A6FF]/30 hover:bg-[#58A6FF]/5 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
