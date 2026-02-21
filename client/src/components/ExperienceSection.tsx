/*
 * DESIGN: Obsidian Architecture — Experience section
 * Vertical timeline with glowing connector line
 * Each entry has role, company, duration, and key achievements
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "DevOps & Cloud Engineer",
    company: "Cloud Infrastructure Projects",
    duration: "2023 — Present",
    location: "Remote",
    type: "Engineering",
    color: "#58A6FF",
    description:
      "Designing and implementing scalable cloud infrastructure solutions on GCP and Azure. Leading infrastructure-as-code initiatives using Terraform, building automated CI/CD pipelines, and managing Kubernetes workloads at scale.",
    achievements: [
      "Provisioned and managed GKE clusters handling production Kubernetes workloads",
      "Automated infrastructure deployment using Terraform, reducing provisioning time by 70%",
      "Designed multi-region load balancing and autoscaling configurations for high-availability systems",
      "Implemented CI/CD pipelines with GitHub Actions for automated testing and zero-downtime deployments",
      "Configured VPC networking, firewall rules, and private service connections across GCP and Azure",
    ],
  },
  {
    id: 2,
    role: "Infrastructure Automation Engineer",
    company: "Terraform & IaC Projects",
    duration: "2022 — 2023",
    location: "Remote",
    type: "Infrastructure",
    color: "#79C0FF",
    description:
      "Focused on infrastructure-as-code practices, building reusable Terraform modules for cloud resource provisioning. Worked on networking, VM setup, and cloud-native service configurations.",
    achievements: [
      "Built reusable Terraform modules for VMs, networking, and managed services on GCP",
      "Configured load balancers, health checks, and autoscaling policies for production workloads",
      "Implemented remote state management with GCS backends and state locking",
      "Established infrastructure testing practices using Terratest",
      "Documented infrastructure patterns and best practices for team adoption",
    ],
  },
  {
    id: 3,
    role: "Cloud & DevOps Learner",
    company: "Academic & Self-Directed Projects",
    duration: "2021 — 2022",
    location: "University",
    type: "Academic",
    color: "#56D364",
    description:
      "Developed foundational expertise in cloud computing, networking, and systems programming. Built academic projects in C++ covering networking protocols, data structures, and algorithm design.",
    achievements: [
      "Completed GCP and Azure cloud certifications and hands-on labs",
      "Built C++ networking simulation projects covering routing algorithms and packet switching",
      "Studied Kubernetes architecture, container orchestration, and cloud-native patterns",
      "Contributed to open-source DevOps tooling and documentation",
      "Developed strong foundations in Linux systems administration and Bash scripting",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#161B22] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#58A6FF]/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#58A6FF]/15 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Experience</span>
          <div className="accent-line mt-2 w-12 mb-4" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#E6EDF3] leading-tight">
            Where I've worked
          </h2>
          <p className="mt-3 text-[#8B949E] font-subheading max-w-xl">
            A track record of building reliable cloud infrastructure and automating complex systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#58A6FF]/40 via-[#58A6FF]/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-6 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: exp.color,
                    background: "#161B22",
                    boxShadow: `0 0 12px ${exp.color}40`,
                  }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
                </div>

                {/* Card */}
                <div className="card-glow group p-6 rounded-xl border border-white/6 bg-[#0D1117]">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} style={{ color: exp.color }} />
                        <span
                          className="font-mono-custom text-[10px] uppercase tracking-wider"
                          style={{ color: exp.color }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#E6EDF3]">{exp.role}</h3>
                      <p className="font-subheading text-sm text-[#8B949E] mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <div className="flex items-center gap-1.5 text-[#8B949E]">
                        <Calendar size={12} />
                        <span className="font-mono-custom text-xs">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#8B949E]">
                        <MapPin size={12} />
                        <span className="font-mono-custom text-xs">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-subheading text-sm text-[#8B949E] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight size={12} className="mt-0.5 flex-shrink-0" style={{ color: exp.color }} />
                        <span className="font-subheading text-xs text-[#8B949E] leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
