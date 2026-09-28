"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Leaf, Shield, BarChart3, Link2, Users, Truck, CheckCircle2, XCircle, Sprout, Recycle } from "lucide-react";
import Link from "next/link";

const problems = [
  "Fragmented supply chains with intermediaries between farm and consumer",
  "No transparent pricing for farmers or consumers",
  "No reliable way to verify organic product claims from one end of the chain to the other",
  "Limited market access for small farmers",
];

const solutions = [
  "A farmer-to-consumer connection built on digital agriculture",
  "A transparent supply chain with end-to-end traceability, and blockchain-backed verification planned as the platform scales",
  "AI-powered quality assessment and grading for organic products",
  "Real-time marketplace with transparent pricing for both sides",
];

const features = [
  {
    icon: Leaf,
    title: "Farmer Verification",
    description:
      "AI-driven verification of organic farming practices and certifications, recorded digitally for traceability.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "End-to-end traceability from farm to delivery, with every handling step recorded. Blockchain-backed records are planned as the platform scales.",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description:
      "Real-time pricing data, demand forecasting, and market trends that give farmers clearer visibility into the market they grow for.",
  },
  {
    icon: Link2,
    title: "Supply Chain",
    description:
      "A transparent supply chain: a direct producer-to-consumer pipeline that removes intermediaries and reduces costs.",
  },
  {
    icon: Users,
    title: "Community Network",
    description:
      "A verified network of farmers, brands, businesses, and conscious consumers held together by shared digital records.",
  },
  {
    icon: Truck,
    title: "Logistics Hub",
    description:
      "Optimized collection and delivery of organic products across Telangana and expanding.",
  },
];

export function Skills() {
  return (
    <section
      id="next360"
      className="relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-[#F4EADF]"
    >
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#6F8F68]/5 blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#85857E] uppercase block mb-4">
            Our Platform
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-gradient-accent">NEXT360</span> Organic Products
          </h2>
          <p className="text-base md:text-lg text-[#85857E] max-w-2xl mx-auto">
            A digital agriculture platform founded and led by SamhithReddy Sangam, Founder &amp;
            CEO of NEXT360 Organic Products Pvt. Ltd. — connecting farmers, brands, and
            consumers through a transparent supply chain and end-to-end traceability.
          </p>
        </div>

        {/* Mockup Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl border border-[#D9CBBE]/70 bg-[#FFF8F0] backdrop-blur-sm p-6 md:p-10 overflow-hidden">
            {/* Desktop Mockup */}
            <div className="relative">
              {/* Browser frame */}
              <div className="rounded-lg border border-[#D9CBBE] bg-[#EEE1D3] overflow-hidden mb-6">
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#E6DCD2]/40 border-b border-[#D9CBBE]/70">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <div className="ml-4 px-3 py-1 rounded text-xs text-[#85857E] bg-[#E6DCD2]/40 border border-[#D9CBBE]/70">
                    next360.in
                  </div>
                </div>
                <div className="p-6 md:p-10 flex items-center justify-center">
                  <div className="text-center">
                    <Leaf className="w-12 h-12 text-[#6F8F68] mx-auto mb-4" />
                    <h3 className="text-xl md:text-2xl font-bold text-[#263129] mb-2">
                      NEXT360 Marketplace
                    </h3>
                    <p className="text-sm text-[#85857E] mb-6 max-w-md">
                      Browse verified organic products directly from farmers in Telangana, with
                      quality records carried from farm to delivery.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 max-w-sm mx-auto">
                      <div className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#6F8F68] text-white text-xs font-medium shadow-lg shadow-[#6F8F68]/20">
                        <Leaf className="w-3.5 h-3.5" />
                        Organic
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#E6DCD2]/50 border border-[#D9CBBE] text-[#85857E] text-xs font-medium shadow-sm">
                        <Sprout className="w-3.5 h-3.5" />
                        Natural
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#E6DCD2]/50 border border-[#D9CBBE] text-[#85857E] text-xs font-medium shadow-sm">
                        <Recycle className="w-3.5 h-3.5" />
                        Eco Friendly
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#B66F4A]/10 blur-[60px] rounded-full" />
          </div>
        </motion.div>

        {/* Problem vs Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl border border-[#D9CBBE]/70 bg-[#FFF8F0] backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-bold text-[#263129]">The Problem</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#62665F]">
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
            className="p-6 md:p-8 rounded-2xl border border-[#C8D5C2] bg-[#E3EBDD]/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-5 h-5 text-[#6F8F68]" />
              <h3 className="text-lg font-bold text-[#263129]">Our Solution</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#62665F]">
                  <CheckCircle2 className="w-4 h-4 text-[#6F8F68] mt-0.5 shrink-0" />
                  {solution}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#263129] mb-8 text-center">
            Technology for Farmers
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
                className="p-5 rounded-xl border border-[#D9CBBE]/70 bg-[#FFF8F0] backdrop-blur-sm hover:border-[#B66F4A]/15 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#B66F4A]/10 border border-[#B66F4A]/15 flex items-center justify-center mb-3">
                  <feature.icon className="w-4.5 h-4.5 text-[#B66F4A]" />
                </div>
                <h4 className="text-sm font-bold text-[#263129] mb-1.5">{feature.title}</h4>
                <p className="text-xs text-[#85857E] leading-relaxed">{feature.description}</p>
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
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B66F4A] text-white font-semibold text-sm hover:bg-[#985938] transition-all duration-300"
          >
            Visit Website
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#CBBCAF] text-[#4D554E] hover:bg-[#E8DCCE] hover:border-[#BBA999] hover:text-[#263129] transition-all duration-300"
          >
            See How It Works
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
