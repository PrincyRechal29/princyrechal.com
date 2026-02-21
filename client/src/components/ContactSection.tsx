/*
 * DESIGN: Obsidian Architecture — Contact section
 * Split layout: left info panel, right contact form
 * Clean form with dark inputs, electric blue focus states
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, ArrowRight } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "princyrechal",
    url: "https://linkedin.com/in/princyrechal",
    color: "#0A66C2",
    description: "Connect professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "princyrechal",
    url: "https://github.com/princyrechal",
    color: "#E6EDF3",
    description: "View my code",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "princyrechal@gmail.com",
    url: "mailto:princyrechal@gmail.com",
    color: "#58A6FF",
    description: "Send a message",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`);
    const subject = encodeURIComponent(formState.subject || "Portfolio Contact");
    window.location.href = `mailto:princyrechal@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-white/8 text-[#E6EDF3] font-subheading text-sm placeholder-[#484F58] focus:outline-none focus:border-[#58A6FF]/60 focus:ring-1 focus:ring-[#58A6FF]/30 transition-all duration-200";

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0D1117] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#58A6FF]/20 to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-15" />

      {/* Glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[#58A6FF]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Contact</span>
            <div className="accent-line mt-2 w-12 mb-6" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#E6EDF3] leading-tight mb-4">
              Let's build something
              <br />
              <span className="gradient-text">together</span>
            </h2>
            <p className="font-subheading text-[#8B949E] leading-relaxed mb-8 max-w-md">
              Whether you're looking for a cloud engineer, want to discuss infrastructure challenges,
              or just want to connect — I'd love to hear from you. I'm currently open to new opportunities.
            </p>

            <div className="flex items-center gap-2 mb-8">
              <MapPin size={14} className="text-[#58A6FF]" />
              <span className="font-subheading text-sm text-[#8B949E]">Open to remote & hybrid opportunities</span>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, label, handle, url, color, description }) => (
                <a
                  key={label}
                  href={url}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-white/6 bg-[#161B22] hover:border-white/12 hover:bg-[#1C2128] transition-all duration-200"
                >
                  <div
                    className="p-2.5 rounded-lg flex-shrink-0"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-subheading text-sm font-medium text-[#C9D1D9]">{label}</p>
                    <p className="font-mono-custom text-xs text-[#8B949E] truncate">{handle}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#8B949E] group-hover:text-[#58A6FF] transition-colors">
                    <span className="font-subheading text-xs hidden sm:block">{description}</span>
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="p-8 rounded-2xl border border-white/8 bg-[#161B22]">
              <h3 className="font-display font-semibold text-lg text-[#E6EDF3] mb-6">Send a message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#56D364]/15 flex items-center justify-center mb-4">
                    <Send size={20} className="text-[#56D364]" />
                  </div>
                  <p className="font-display font-semibold text-[#E6EDF3] mb-2">Message sent!</p>
                  <p className="font-subheading text-sm text-[#8B949E]">Your email client should have opened. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono-custom text-[10px] text-[#8B949E] uppercase tracking-wider mb-1.5 block">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="font-mono-custom text-[10px] text-[#8B949E] uppercase tracking-wider mb-1.5 block">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono-custom text-[10px] text-[#8B949E] uppercase tracking-wider mb-1.5 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="What's this about?"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="font-mono-custom text-[10px] text-[#8B949E] uppercase tracking-wider mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#58A6FF] text-[#0D1117] font-subheading font-semibold text-sm rounded-lg hover:bg-[#79BEFF] transition-all duration-200 shadow-[0_0_20px_rgba(88,166,255,0.25)] hover:shadow-[0_0_30px_rgba(88,166,255,0.4)]"
                  >
                    <Send size={14} />
                    Send Message
                  </button>

                  <p className="font-mono-custom text-[10px] text-[#484F58] text-center">
                    This will open your email client
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
