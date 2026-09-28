"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar, Leaf, Globe, Lightbulb, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";

const insights = [
  {
    title: "The Future of Organic Commerce in India",
    category: "Industry Trends",
    date: "March 15, 2026",
    readTime: "5 min read",
    excerpt:
      "How technology is transforming India's organic food supply chain and creating new opportunities for farmers and consumers alike.",
    icon: Leaf,
    color: "#6F8F68",
  },
  {
    title: "AI in Agriculture: From Farm to Table",
    category: "Technology",
    date: "February 28, 2026",
    readTime: "7 min read",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing crop management, quality assessment, and supply chain optimization in organic farming.",
    icon: Lightbulb,
    color: "#B66F4A",
  },
  {
    title: "Building Trust Through Blockchain",
    category: "Innovation",
    date: "February 10, 2026",
    readTime: "4 min read",
    excerpt:
      "How blockchain technology is creating unprecedented transparency in organic product verification and supply chain tracking.",
    icon: Shield,
    color: "#6F8F68",
  },
  {
    title: "India's Organic Market: A $10B Opportunity",
    category: "Market Analysis",
    date: "January 25, 2026",
    readTime: "6 min read",
    excerpt:
      "Analyzing the growth trajectory of India's organic products market and the role of technology in capturing this opportunity.",
    icon: TrendingUp,
    color: "#B66F4A",
  },
  {
    title: "Empowering Farmers Through Technology",
    category: "Impact",
    date: "January 12, 2026",
    readTime: "5 min read",
    excerpt:
      "Stories from the field — how digital tools are helping small farmers access markets, fair prices, and sustainable livelihoods.",
    icon: Globe,
    color: "#6F8F68",
  },
  {
    title: "Sustainable Supply Chains: A Blueprint",
    category: "Sustainability",
    date: "December 20, 2025",
    readTime: "8 min read",
    excerpt:
      "Designing supply chains that are environmentally sustainable, economically viable, and socially responsible — lessons from NEXT360.",
    icon: Leaf,
    color: "#B66F4A",
  },
];

export function FAQ() {
  return (
    <section
      id="insights"
      className="relative py-24 md:py-32 overflow-hidden bg-[#EEE1D3]"
    >
      {/* Background */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#B66F4A]/3 blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#85857E] uppercase block mb-4">
            Insights
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Thoughts &{" "}
            <span className="text-gradient-accent">Perspectives</span>
          </h2>
          <p className="text-base md:text-lg text-[#85857E] max-w-2xl mx-auto">
            Exploring the intersection of technology, agriculture, and sustainability.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {insights.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl border border-[#D9CBBE]/70 bg-[#FFF8F0] backdrop-blur-sm hover:border-[#B66F4A]/15 transition-all duration-500"
            >
              {/* Image Placeholder */}
              <div className="relative h-36 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(182,111,74,0.1)] to-[rgba(111,143,104,0.05)] group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-[10px] font-medium border"
                    style={{
                      color: post.color,
                      borderColor: `${post.color}30`,
                      backgroundColor: `${post.color}10`,
                    }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-[#FFF8F0] backdrop-blur-sm border border-[#D9CBBE]/70 flex items-center justify-center">
                  <post.icon className="w-4 h-4" style={{ color: post.color }} />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#263129] mb-2 line-clamp-2 group-hover:text-gradient-accent transition-all duration-300">
                  {post.title}
                </h3>
                <p className="text-xs text-[#85857E] leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[10px] text-[#85857E]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#85857E] group-hover:text-[#B66F4A] transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
