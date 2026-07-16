"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Leaf, Shield, BarChart3, Link2, Users, Truck, CheckCircle2, XCircle, Sprout, Recycle } from "lucide-react";
import Link from "next/link";

const problems = [
  "Fragmented supply chain with multiple intermediaries",
  "No transparent pricing for farmers or consumers",
  "Lack of trust in organic product verification",
  "Limited market access for small farmers",
];

const solutions = [
  "Direct farm-to-consumer technology platform",
  "Blockchain-backed transparency & verification",
  "AI-powered quality assessment & grading",
  "Real-time marketplace with fair pricing",
];

const features = [
  {
    icon: Leaf,
    title: "Farmer Verification",
    description: "AI-driven verification system for organic farming practices and certifications.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "End-to-end quality tracking from farm to delivery with blockchain records.",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Real-time pricing data, demand forecasting, and market trends for farmers.",
  },
  {
    icon: Link2,
    title: "Supply Chain",
    description: "Direct producer-to-consumer pipeline eliminating middlemen and reducing costs.",
  },
  {
    icon: Users,
    title: "Community Network",
    description: "Verified network of farmers, brands, businesses, and conscious consumers.",
  },
  {
    icon: Truck,
    title: "Logistics Hub",
    description: "Optimized collection and delivery network across Telangana and expanding.",
  },
];

export function Skills() {
  return (
    <section
      id="next360"
      className="relative py-24 md:py-32 overflow-hidden bg-[#08140D]"
    >
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#4E8F57]/5 blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#8A918E] uppercase block mb-4">
            Our Platform
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-gradient-accent">NEXT360</span> Organic Products
          </h2>
          <p className="text-base md:text-lg text-[#8A918E] max-w-2xl mx-auto">
            India&apos;s trusted organic commerce infrastructure — connecting farmers, brands, and
            consumers through technology and transparency.
          </p>
        </div>

        {/* Mockup Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(18,26,21,0.72)] backdrop-blur-sm p-6 md:p-10 overflow-hidden">
            {/* Desktop Mockup */}
            <div className="relative">
              {/* Browser frame */}
              <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#0C1C13] overflow-hidden mb-6">
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.06)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <div className="ml-4 px-3 py-1 rounded text-xs text-[#8A918E] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]">
                    next360.in
                  </div>
                </div>
                <div className="p-6 md:p-10 flex items-center justify-center">
                  <div className="text-center">
                    <Leaf className="w-12 h-12 text-[#4E8F57] mx-auto mb-4" />
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      NEXT360 Marketplace
                    </h3>
                    <p className="text-sm text-[#8A918E] mb-6 max-w-md">
                      Browse verified organic products directly from farmers in Telangana.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 max-w-sm mx-auto">
                      <div className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#4E8F57] text-white text-xs font-medium shadow-lg shadow-[#4E8F57]/20">
                        <Leaf className="w-3.5 h-3.5" />
                        Organic
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#8A918E] text-xs font-medium shadow-sm">
                        <Sprout className="w-3.5 h-3.5" />
                        Natural
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#8A918E] text-xs font-medium shadow-sm">
                        <Recycle className="w-3.5 h-3.5" />
                        Eco Friendly
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D97B4D]/10 blur-[60px] rounded-full" />
          </div>
        </motion.div>

        {/* Problem vs Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(18,26,21,0.72)] backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-bold text-white">The Problem</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#C6C6C6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-1.5 shrink-0" />
                  {problem}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl border border-[rgba(78,143,57,0.15)] bg-[rgba(78,143,57,0.05)] backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-5 h-5 text-[#4E8F57]" />
              <h3 className="text-lg font-bold text-white">Our Solution</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#C6C6C6]">
                  <CheckCircle2 className="w-4 h-4 text-[#4E8F57] mt-0.5 shrink-0" />
                  {solution}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Platform Features
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -3 }}
                className="p-5 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(18,26,21,0.72)] backdrop-blur-sm hover:border-[rgba(217,123,77,0.15)] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#D97B4D]/10 border border-[rgba(217,123,77,0.15)] flex items-center justify-center mb-3">
                  <feature.icon className="w-4.5 h-4.5 text-[#D97B4D]" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{feature.title}</h4>
                <p className="text-xs text-[#8A918E] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="https://next360.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D97B4D] text-white font-semibold text-sm hover:bg-[#c96a3d] transition-all duration-300"
          >
            Visit Website
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.08)] text-[#C6C6C6] hover:text-white hover:border-white/20 transition-all duration-300"
          >
            See How It Works
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
