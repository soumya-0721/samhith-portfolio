"use client";

import { motion } from "framer-motion";
import { Leaf, Shield, TrendingUp, HeartHandshake } from "lucide-react";

const missionPoints = [
  {
    icon: Leaf,
    title: "Empower Farmers",
    description:
      "Provide India's farmers with direct market access, fair pricing, and technology tools that eliminate intermediaries and increase their livelihoods.",
  },
  {
    icon: Shield,
    title: "Ensure Transparency",
    description:
      "Build a verification system that supports organic authenticity from farm to consumer, restoring trust in India's food supply chain. Blockchain-backed records are on the roadmap.",
  },
  {
    icon: TrendingUp,
    title: "Drive Sustainability",
    description:
      "Create an economically viable ecosystem where organic farming is profitable, sustainable practices are rewarded, and consumers access healthy food.",
  },
  {
    icon: HeartHandshake,
    title: "Build Community",
    description:
      "Connect farmers, conscious consumers, brands, and businesses through transparent, technology-backed relationships across India's organic ecosystem.",
  },
];

export function TechLogos() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#EEE1D3] border-y border-[#D9CBBE]/40">
      {/* Background glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#6F8F68]/4 blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-[#85857E] uppercase block mb-4">
            Our Mission
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Building the backbone of India&apos;s{" "}
            <span className="text-gradient-accent">organic ecosystem</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#85857E] max-w-xl mx-auto">
            Every feature we build, every partnership we forge, and every farmer we onboard
            brings us closer to a transparent, sustainable, and prosperous organic India.
          </p>
        </motion.div>

        {/* 4 mission pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {missionPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="group relative p-5 md:p-6 rounded-xl border border-[#D9CBBE]/70 bg-[#FFF8F0] backdrop-blur-sm hover:border-[#C8D5C2] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#6F8F68]/10 border border-[#6F8F68]/15 flex items-center justify-center mb-4 group-hover:bg-[#6F8F68]/20 transition-all duration-300">
                <point.icon className="w-5 h-5 text-[#6F8F68]" />
              </div>
              <h3 className="text-base font-bold text-[#263129] mb-2">{point.title}</h3>
              <p className="text-sm text-[#85857E] leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechLogos;
