"use client";

import { motion } from "framer-motion";
import { Target, Rocket, Globe, Users, Leaf, Shield, Zap } from "lucide-react";

const roadmapMilestones = [
  {
    year: "2026",
    title: "Foundation & Scale",
    subtitle: "Consolidate & Expand",
    description:
      "Consolidate NEXT360 across Telangana with a target of 100+ farmer partners, and launch the mobile app and AI-powered quality verification — technology for farmers, built around how farms already work.",
    icon: Target,
    color: "#B66F4A",
    status: "current",
  },
  {
    year: "2027",
    title: "Regional Expansion",
    subtitle: "South India Presence",
    description:
      "Extend the organic ecosystem into Andhra Pradesh, Karnataka and Tamil Nadu, with regional collection and distribution hubs that keep the farm-to-consumer chain short.",
    icon: Globe,
    color: "#6F8F68",
    status: "upcoming",
  },
  {
    year: "2028",
    title: "Technology Platform",
    subtitle: "AI & Blockchain Integration",
    description:
      "Planned full blockchain integration so every organic product can carry a verifiable supply chain record, with AI-driven demand forecasting and automated logistics — the agriculture innovation layer underneath it.",
    icon: Zap,
    color: "#B66F4A",
    status: "upcoming",
  },
  {
    year: "2029",
    title: "National Presence",
    subtitle: "Pan-India Operations",
    description:
      "Aim for operations across 10+ states with 10,000+ farmer partners, and a B2B wholesale marketplace alongside the direct-to-consumer platform.",
    icon: Users,
    color: "#6F8F68",
    status: "upcoming",
  },
  {
    year: "2030",
    title: "Vision Realized",
    subtitle: "India's Organic Commerce Backbone",
    description:
      "The ambition: a transparent backbone for India's organic products ecosystem — farmers keeping more of what they grow, social responsibility sitting with the people who grow the food, and expansion beginning with Southeast Asian markets.",
    icon: Rocket,
    color: "#B66F4A",
    status: "upcoming",
  },
];

export function Featured() {
  return (
    <section
      id="vision2030"
      className="relative py-24 md:py-32 overflow-hidden bg-[#F4EADF]"
    >
      {/* Background Glow */}
      <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#B66F4A]/3 blur-[150px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#85857E] uppercase block mb-4">
            Vision 2030
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            The Road to{" "}
            <span className="text-gradient-accent">2030</span>
          </h2>
          <p className="text-base md:text-lg text-[#85857E] max-w-2xl mx-auto">
            A bold roadmap for a stronger, more connected agricultural ecosystem — where digital agriculture
            and responsible technology work for farmers, and organic products reach consumers through a
            supply chain anyone can trace. The 2030 ambition: farmer empowerment through technology, and a
            future-ready Bharat built on sustainable agriculture.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#B66F4A]/40 via-[#6F8F68]/30 to-transparent -translate-x-1/2 hidden md:block" />

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
                        ? "border-[#B66F4A]/30 bg-[#B66F4A]/8"
                        : "border-[#D9CBBE]/70 bg-[#FFF8F0]"
                    } backdrop-blur-sm hover:border-[#B66F4A]/20 transition-all duration-300`}
                  >
                    {/* Year Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-mono mb-3 ${
                        milestone.status === "current"
                          ? "bg-[#B66F4A]/20 text-[#B66F4A]"
                          : "bg-[#E6DCD2] text-[#85857E]"
                      }`}
                    >
                      {milestone.status === "current" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B66F4A] animate-pulse" />
                      )}
                      {milestone.year}
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-[#263129] mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-xs text-[#62665F] mb-3">{milestone.subtitle}</p>
                    <p className="text-sm text-[#85857E] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot - Desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      milestone.status === "current"
                        ? "border-[#B66F4A] bg-[#B66F4A] shadow-[0_0_20px_rgba(182,111,74,0.5)]"
                        : "border-[#D9CBBE] bg-[#FFF8F0]"
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
                        ? "border-[#B66F4A] bg-[#B66F4A] shadow-[0_0_15px_rgba(182,111,74,0.4)]"
                        : "border-[#D9CBBE] bg-[#FFF8F0]"
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
          <p className="text-sm text-[#85857E] mb-4">
            Digitalising our roots, not replacing them — the journey is just beginning.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E3EBDD] border border-[#C8D5C2]">
            <Leaf className="w-4 h-4 text-[#6F8F68]" />
            <span className="text-xs text-[#6F8F68] font-medium">Entrepreneurship and Innovation • Future-Ready Bharat</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
