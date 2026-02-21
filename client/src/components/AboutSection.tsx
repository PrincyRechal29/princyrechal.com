/*
 * DESIGN: Obsidian Architecture — About section
 * Asymmetric layout: text left, visual right
 * Thin horizontal rule with glowing endpoints as design motif
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Server, GitBranch, Shield } from "lucide-react";

const ABOUT_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/9DKEyQsPSCLZFNYuLzb6Eq/sandbox/2VnZUkfBi2hXv5XDfJ77XC-img-2_1771637496000_na1fn_YWJvdXQtdmlzdWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOURLRXlRc1BTQ0xaRk5ZdUx6YjZFcS9zYW5kYm94LzJWblpVa2ZCaTJoWHY1WERmSjc3WEMtaW1nLTJfMTc3MTYzNzQ5NjAwMF9uYTFmbl9ZV0p2ZFhRdGRtbHpkV0ZzLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DN6JS6r7ENq~zNRSXZUSSJWafkb~BLgbmq-0S6ANjfz2ZIySLC5U9L1iTLfOQ~0qdBxeCbkYBANVy2ScWPkhpH~P-Wij6G6GTbJIfuxQuuzABt2vAoCy4uG~Lihxp2UxwasHPLElIwmkNDkQQuM4BFLDXv4ZR4auTnaFW1pWom-um0g9ytEfPhL8ue--jz7GB7i85APn~A0L67EDpCf2F-F20~tyZHvAl5nTCN8RdT6762WlIzj51-wT2Q~QduTOAgO15TzU-FgYgEhlheKMtJEhdqnYQLmGkVlyLSRETzV50pvKHjRBAYYQOvJ0bdwzvwOHTOq1P2rCQpPRptIIIA__";

const highlights = [
  { icon: Cloud, label: "Cloud Platforms", value: "GCP & Azure" },
  { icon: Server, label: "Infrastructure", value: "Kubernetes & Docker" },
  { icon: GitBranch, label: "Automation", value: "Terraform & CI/CD" },
  { icon: Shield, label: "Reliability", value: "Scalable Systems" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0D1117] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#58A6FF]/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="section-label">About Me</span>
              <div className="accent-line mt-2 w-12" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-3xl md:text-4xl text-[#E6EDF3] mb-6 leading-tight"
            >
              Engineering reliable systems
              <br />
              <span className="gradient-text">at cloud scale</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-[#8B949E] font-subheading leading-relaxed"
            >
              <p>
                I'm a cloud-focused engineer with deep hands-on experience across
                <span className="text-[#C9D1D9] font-medium"> Google Cloud Platform (GCP)</span> and
                <span className="text-[#C9D1D9] font-medium"> Microsoft Azure</span>. My work centers
                on building infrastructure that is not just functional, but resilient, observable, and
                built to scale.
              </p>
              <p>
                From provisioning virtual machines and configuring networking to setting up load balancers,
                autoscaling groups, and GKE clusters — I approach every infrastructure challenge with a
                systems-thinking mindset. I believe that great infrastructure is invisible: it just works.
              </p>
              <p>
                I work extensively with <span className="text-[#C9D1D9] font-medium">Terraform</span> for
                infrastructure-as-code, design and implement
                <span className="text-[#C9D1D9] font-medium"> CI/CD pipelines</span> that accelerate
                delivery, and orchestrate containerized workloads with
                <span className="text-[#C9D1D9] font-medium"> Kubernetes</span>. I'm driven by a passion
                for continuous learning and the belief that automation is the foundation of reliability.
              </p>
            </motion.div>

            {/* Highlights grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-[#161B22] hover:border-[#58A6FF]/20 transition-colors duration-200"
                >
                  <div className="mt-0.5 p-1.5 rounded-md bg-[#58A6FF]/10">
                    <Icon size={14} className="text-[#58A6FF]" />
                  </div>
                  <div>
                    <p className="font-mono-custom text-[10px] text-[#58A6FF]/70 uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="font-subheading text-sm font-medium text-[#C9D1D9]">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/50">
              <img
                src={ABOUT_IMG}
                alt="Cloud Infrastructure Visualization"
                className="w-full object-cover"
                style={{ aspectRatio: "1/1" }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/60 to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-4 -left-4 bg-[#161B22] border border-white/10 rounded-xl p-4 shadow-xl shadow-black/40">
              <p className="font-mono-custom text-[10px] text-[#58A6FF]/70 uppercase tracking-wider mb-1">Focus</p>
              <p className="font-display font-bold text-white text-lg">Cloud-Native</p>
              <p className="font-subheading text-xs text-[#8B949E]">Infrastructure</p>
            </div>

            <div className="absolute -top-4 -right-4 bg-[#161B22] border border-[#58A6FF]/20 rounded-xl p-4 shadow-xl shadow-black/40">
              <p className="font-mono-custom text-[10px] text-[#58A6FF]/70 uppercase tracking-wider mb-1">Stack</p>
              <p className="font-display font-bold text-[#58A6FF] text-lg">K8s + IaC</p>
              <p className="font-subheading text-xs text-[#8B949E]">Kubernetes & Terraform</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
