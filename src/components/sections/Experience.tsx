"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Leaf, Globe, Cloud, Sparkles } from "lucide-react";
import Link from "next/link";

const ventures = [
  {
    name: "NEXT360",
    tagline: "Organic Products Pvt. Ltd.",
    description:
      "Where technology, agriculture and organic products meet. NEXT360 Organic Products Pvt. Ltd. — founded by agriculture technology entrepreneur SamhithReddy Sangam — connects verified farmers directly to consumers and businesses, with a transparent supply chain and end-to-end traceability from farm to table. Blockchain-backed product records are on the roadmap.",
    status: "Active",
    statusColor: "#6F8F68",
    icon: Leaf,
    gradient: "from-[#6F8F68]/20 to-transparent",
    link: "https://next360.in",
  },
  {
    name: "Slick Solutions",
    tagline: "Technology Consulting",
    description:
      "Full-stack software development and AI consulting for businesses. Building custom solutions from web applications to intelligent data pipelines.",
    status: "Active",
    statusColor: "#6F8F68",
    icon: Sparkles,
    gradient: "from-[#B66F4A]/20 to-transparent",
    link: "#",
  },
  {
    name: "Gram360",
    tagline: "Rural Technology Initiative",
    description:
      "Bridging the digital divide in rural India. Providing technology infrastructure, digital literacy programs, and market access tools for rural communities.",
    status: "Developing",
    statusColor: "#B66F4A",
    icon: Globe,
    gradient: "from-[#6F8F68]/15 to-transparent",
    link: "https://www.mallaramgramapanchayat.com/en#home",
  },
  {
    name: "Weather AI",
    tagline: "Climate Intelligence for Agriculture",
    description:
      "AI-powered weather prediction and climate risk assessment platform for farmers. Hyper-local forecasts, crop advisory, and early warning systems.",
    status: "Research",
    statusColor: "#85857E",
    icon: Cloud,
    gradient: "from-[#B66F4A]/15 to-transparent",
    link: "https://www.mallaramgramapanchayat.com/en#home",
  },
];

export function Experience() {
  return (
    <section
      id="ventures"
      className="relative py-24 md:py-32 overflow-hidden bg-[#EEE1D3]"
    >
      {/* Background */}
      <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] rounded-full bg-[#6F8F68]/4 blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#85857E] uppercase block mb-4">
            Ventures
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Building Across{" "}
            <span className="text-gradient-accent">Industries</span>
          </h2>
          <p className="text-base md:text-lg text-[#85857E] max-w-2xl mx-auto">
            From organic commerce to climate intelligence — each venture applies technology to
            agriculture and organic products, and to the farmers who grow them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ventures.map((venture, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-6 md:p-8 rounded-2xl border border-[#D9CBBE]/70 bg-[#FFF8F0] backdrop-blur-sm overflow-hidden hover:border-[#B66F4A]/15 transition-all duration-500"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${venture.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#B66F4A]/10 border border-[#B66F4A]/15 flex items-center justify-center">
                      <venture.icon className="w-5 h-5 text-[#B66F4A]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#263129]">{venture.name}</h3>
                      <p className="text-xs text-[#62665F]">{venture.tagline}</p>
                    </div>
                  </div>
                  {/* Status Badge */}
                  <span
                    className="px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider border"
                    style={{
                      color: venture.statusColor,
                      borderColor: `${venture.statusColor}30`,
                      backgroundColor: `${venture.statusColor}10`,
                    }}
                  >
                    {venture.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#85857E] leading-relaxed mb-5">
                  {venture.description}
                </p>

                {/* Explore Button */}
                <Link
                  href={venture.link}
                  target={venture.link !== "#" ? "_blank" : undefined}
                  rel={venture.link !== "#" ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#B66F4A] hover:text-[#985938] transition-colors group/link"
                >
                  Explore
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
