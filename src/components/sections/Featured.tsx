"use client";

import { motion } from "framer-motion";
import { Target, Rocket, Globe, Users, Leaf, Shield, Zap } from "lucide-react";

const roadmapMilestones = [
  {
    year: "2026",
    title: "Foundation & Scale",
    subtitle: "Consolidate & Expand",
    description:
      "Scale NEXT360 across Telangana with 100+ farmer partners. Launch mobile app and AI-powered quality verification system.",
    icon: Target,
    color: "#D97B4D",
    status: "current",
  },
  {
    year: "2027",
    title: "Regional Expansion",
    subtitle: "South India Presence",
    description:
      "Expand operations to Andhra Pradesh, Karnataka, and Tamil Nadu. Establish regional collection and distribution hubs.",
    icon: Globe,
    color: "#4E8F57",
    status: "upcoming",
  },
  {
    year: "2028",
    title: "Technology Platform",
    subtitle: "AI & Blockchain Integration",
    description:
      "Full blockchain integration for supply chain transparency. AI-driven demand forecasting and automated logistics optimization.",
    icon: Zap,
    color: "#D97B4D",
    status: "upcoming",
  },
  {
    year: "2029",
    title: "National Presence",
    subtitle: "Pan-India Operations",
    description:
      "Operations across 10+ states with 10,000+ farmer partners. Launch B2B wholesale marketplace alongside D2C platform.",
    icon: Users,
    color: "#4E8F57",
    status: "upcoming",
  },
  {
    year: "2030",
    title: "Vision Realized",
    subtitle: "India's Organic Commerce Backbone",
    description:
      "India's most trusted organic commerce infrastructure serving millions. Global expansion beginning with Southeast Asian markets.",
    icon: Rocket,
    color: "#D97B4D",
    status: "upcoming",
  },
];

export function Featured() {
  return (
    <section
      id="vision2030"
      className="relative py-24 md:py-32 overflow-hidden bg-[#08140D]"
    >
      {/* Background Glow */}
      <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#D97B4D]/3 blur-[150px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#8A918E] uppercase block mb-4">
            Vision 2030
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            The Road to{" "}
            <span className="text-gradient-accent">2030</span>
          </h2>
          <p className="text-base md:text-lg text-[#8A918E] max-w-2xl mx-auto">
            A bold roadmap to transform India's organic commerce landscape — one milestone at a time.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D97B4D]/40 via-[#4E8F57]/30 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {roadmapMilestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className={`relative md:flex items-center ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:pb-24 last:pb-0`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? "md:text-right md:pr-0" : "md:text-left md:pl-0"}`}>
                  <div
                    className={`p-5 md:p-6 rounded-xl border ${
                      milestone.status === "current"
                        ? "border-[rgba(217,123,77,0.3)] bg-[rgba(217,123,77,0.08)]"
                        : "border-[rgba(255,255,255,0.06)] bg-[rgba(18,26,21,0.72)]"
                    } backdrop-blur-sm hover:border-[rgba(217,123,77,0.2)] transition-all duration-300`}
                  >
                    {/* Year Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-mono mb-3 ${
                        milestone.status === "current"
                          ? "bg-[#D97B4D]/20 text-[#D97B4D]"
                          : "bg-[rgba(255,255,255,0.05)] text-[#8A918E]"
                      }`}
                    >
                      {milestone.status === "current" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D97B4D] animate-pulse" />
                      )}
                      {milestone.year}
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-xs text-[#C6C6C6] mb-3">{milestone.subtitle}</p>
                    <p className="text-sm text-[#8A918E] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot - Desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      milestone.status === "current"
                        ? "border-[#D97B4D] bg-[#D97B4D] shadow-[0_0_20px_rgba(217,123,77,0.5)]"
                        : "border-[rgba(255,255,255,0.15)] bg-[rgba(18,26,21,0.72)]"
                    }`}
                  />
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />

                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-0 top-2">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      milestone.status === "current"
                        ? "border-[#D97B4D] bg-[#D97B4D] shadow-[0_0_15px_rgba(217,123,77,0.4)]"
                        : "border-[rgba(255,255,255,0.15)] bg-[rgba(18,26,21,0.72)]"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-sm text-[#8A918E] mb-4">The journey is just beginning.</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(78,143,87,0.1)] border border-[rgba(78,143,87,0.15)]">
            <Leaf className="w-4 h-4 text-[#4E8F57]" />
            <span className="text-xs text-[#4E8F57] font-medium">Sustainable Growth • Technology First • India First</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
