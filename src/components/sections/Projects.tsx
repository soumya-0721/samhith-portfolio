"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Leaf, DollarSign, Handshake, MapPin, BarChart3 } from "lucide-react";

// Capability categories — not metrics
const impactStats = [
  {
    value: "Fair Pricing",
    label: "For Every Farmer",
    icon: DollarSign,
    color: "#6F8F68",
  },
  {
    value: "Direct Access",
    label: "To Markets",
    icon: Users,
    color: "#B66F4A",
  },
  {
    value: "Organic",
    label: "Product Verification",
    icon: Leaf,
    color: "#6F8F68",
  },
  {
    value: "Brands",
    label: "And Businesses",
    icon: Handshake,
    color: "#B66F4A",
  },
  {
    value: "Traceability",
    label: "Across The Chain",
    icon: BarChart3,
    color: "#6F8F68",
  },
  {
    value: "Telangana",
    label: "Where We Operate",
    icon: MapPin,
    color: "#B66F4A",
  },
];

// Animated bar for the graph
function AnimatedBar({ height, label, delay }: { height: number; label: string; delay: number }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="w-6 md:w-8 rounded-full bg-gradient-to-t from-[#B66F4A] to-[#985938]"
        style={{ minHeight: 4 }}
      />
      <span className="text-[10px] text-[#85857E]">{label}</span>
    </div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#F4EADF]"
    >
      {/* Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#B66F4A]/4 blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#85857E] uppercase block mb-4">
            Impact
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            How We Create{" "}
            <span className="text-gradient-accent">Impact</span>
          </h2>
          <p className="text-base md:text-lg text-[#85857E] max-w-2xl mx-auto">
            The capabilities we are building — direct farmer access, verified organic
            products, and end-to-end traceability, starting in Telangana.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Stats Cards - Left Column */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {impactStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 md:p-5 rounded-xl border border-[#D9CBBE]/70 bg-[#FFF8F0] backdrop-blur-sm hover:border-[#B66F4A]/10 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <stat.icon className="w-3.5 h-3.5" style={{ color: stat.color }} />
                  </div>
                </div>
                <div className="text-lg md:text-xl font-bold text-[#263129]">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-[#85857E]">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Graph - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-5 md:p-6 rounded-xl border border-[#D9CBBE]/70 bg-[#FFF8F0] backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-[#6F8F68]" />
              <h3 className="text-sm font-bold text-[#263129]">Roadmap Trajectory</h3>
            </div>
            <div className="flex items-end justify-between gap-1 h-[150px] pt-4">
              <AnimatedBar height={4} label="2026" delay={0} />
              <AnimatedBar height={4} label="2027" delay={0.1} />
              <AnimatedBar height={4} label="2028" delay={0.2} />
              <AnimatedBar height={4} label="2029" delay={0.3} />
              <AnimatedBar height={4} label="2030" delay={0.4} />
            </div>
            <div className="mt-3 pt-3 border-t border-[#D9CBBE]/70">
              <div className="flex justify-between text-[10px] text-[#85857E]">
                <span>Trajectory</span>
                <span className="text-[#6F8F68]">Telangana &rarr; Pan-India</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
