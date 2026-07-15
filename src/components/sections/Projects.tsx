"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Leaf, DollarSign, Handshake, MapPin, BarChart3 } from "lucide-react";

const impactStats = [
  {
    value: "₹2.5Cr+",
    label: "Revenue Generated",
    icon: DollarSign,
    color: "#4E8F57",
  },
  {
    value: "500+",
    label: "Farmers Empowered",
    icon: Users,
    color: "#D97B4D",
  },
  {
    value: "50K+",
    label: "Platform Users",
    icon: Leaf,
    color: "#4E8F57",
  },
  {
    value: "25+",
    label: "Brand Partners",
    icon: Handshake,
    color: "#D97B4D",
  },
  {
    value: "12+",
    label: "Projects Delivered",
    icon: BarChart3,
    color: "#4E8F57",
  },
  {
    value: "3",
    label: "States Reached",
    icon: MapPin,
    color: "#D97B4D",
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
        className="w-6 md:w-8 rounded-full bg-gradient-to-t from-[#D97B4D] to-[#e8a87c]"
        style={{ minHeight: 4 }}
      />
      <span className="text-[10px] text-[#8A918E]">{label}</span>
    </div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#08140D]"
    >
      {/* Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#D97B4D]/4 blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#8A918E] uppercase block mb-4">
            Impact
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Measurable{" "}
            <span className="text-gradient-accent">Impact</span>
          </h2>
          <p className="text-base md:text-lg text-[#8A918E] max-w-2xl mx-auto">
            Real numbers, real change — tracking the growth of our ecosystem across India.
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
                className="p-4 md:p-5 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(18,26,21,0.72)] backdrop-blur-sm hover:border-[rgba(217,123,77,0.1)] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <stat.icon className="w-3.5 h-3.5" style={{ color: stat.color }} />
                  </div>
                </div>
                <div className="text-lg md:text-xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-[#8A918E]">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Graph - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-5 md:p-6 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(18,26,21,0.72)] backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-[#4E8F57]" />
              <h3 className="text-sm font-bold text-white">Growth Trajectory</h3>
            </div>
            <div className="flex items-end justify-between gap-1 h-[150px] pt-4">
              <AnimatedBar height={40} label="2022" delay={0} />
              <AnimatedBar height={70} label="2023" delay={0.1} />
              <AnimatedBar height={110} label="2024" delay={0.2} />
              <AnimatedBar height={150} label="2025" delay={0.3} />
              <AnimatedBar height={100} label="2026" delay={0.4} />
            </div>
            <div className="mt-3 pt-3 border-t border-[rgba(255,255,255,0.06)]">
              <div className="flex justify-between text-[10px] text-[#8A918E]">
                <span>Revenue Growth</span>
                <span className="text-[#4E8F57]">+340%</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* India Map Impact Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(18,26,21,0.72)] backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-4 h-4 text-[#D97B4D]" />
            <h3 className="text-sm font-bold text-white">Geographic Presence</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Simplified India Map SVG */}
            <div className="w-48 h-48 shrink-0">
              <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
                <path
                  d="M150,30 C190,30 230,50 250,80 C270,110 280,150 270,180 C260,210 240,240 210,255 C180,270 150,275 120,265 C90,255 70,235 60,205 C50,175 50,145 70,115 C90,85 110,30 150,30Z"
                  fill="none"
                  stroke="rgba(217,123,77,0.2)"
                  strokeWidth="1"
                />
                {/* State dots */}
                <circle cx="170" cy="120" r="4" fill="#D97B4D" opacity="0.8" />
                <text x="175" y="115" className="text-[6px]" fill="#C6C6C6" fontSize="6">Telangana</text>
                <circle cx="200" cy="150" r="3" fill="#4E8F57" opacity="0.6" />
                <text x="205" y="145" className="text-[6px]" fill="#C6C6C6" fontSize="6">Andhra</text>
                <circle cx="180" cy="180" r="3" fill="#4E8F57" opacity="0.6" />
                <text x="185" y="175" className="text-[6px]" fill="#C6C6C6" fontSize="6">Karnataka</text>
                {/* Heat map circles */}
                <circle cx="170" cy="120" r="25" fill="#D97B4D" opacity="0.05" />
                <circle cx="200" cy="150" r="15" fill="#4E8F57" opacity="0.04" />
                <circle cx="180" cy="180" r="15" fill="#4E8F57" opacity="0.04" />
              </svg>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D97B4D]" />
                <span className="text-[#C6C6C6]">Primary Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#4E8F57]" />
                <span className="text-[#C6C6C6]">Expansion Regions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#8A918E]">3 States</div>
                <span className="text-[#8A918E]">• Growing</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
