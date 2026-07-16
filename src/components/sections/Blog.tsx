"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar, FileText, BookOpen, Tag } from "lucide-react";
import Link from "next/link";

// Placeholder blog post data — replace with real content later
const placeholderPosts = [
  {
    title: "Blog Post Title Will Appear Here",
    category: "Category",
    date: "Month DD, YYYY",
    readTime: "X min read",
    excerpt:
      "A short description of the blog post will go here. This placeholder text gives you an idea of how the final content will look in this card layout.",
    color: "#4E8F57",
  },
  {
    title: "Another Interesting Blog Topic Coming Soon",
    category: "Category",
    date: "Month DD, YYYY",
    readTime: "X min read",
    excerpt:
      "A short description of the blog post will go here. This placeholder text gives you an idea of how the final content will look in this card layout.",
    color: "#D97B4D",
  },
  {
    title: "A Third Article Title to Be Published Later",
    category: "Category",
    date: "Month DD, YYYY",
    readTime: "X min read",
    excerpt:
      "A short description of the blog post will go here. This placeholder text gives you an idea of how the final content will look in this card layout.",
    color: "#4E8F57",
  },
  {
    title: "Fourth Blog Entry — Placeholder for Future Content",
    category: "Category",
    date: "Month DD, YYYY",
    readTime: "X min read",
    excerpt:
      "A short description of the blog post will go here. This placeholder text gives you an idea of how the final content will look in this card layout.",
    color: "#D97B4D",
  },
  {
    title: "Fifth Article Placeholder — Ready for Your Writing",
    category: "Category",
    date: "Month DD, YYYY",
    readTime: "X min read",
    excerpt:
      "A short description of the blog post will go here. This placeholder text gives you an idea of how the final content will look in this card layout.",
    color: "#4E8F57",
  },
  {
    title: "Sixth Blog Post — Structure Complete, Content Pending",
    category: "Category",
    date: "Month DD, YYYY",
    readTime: "X min read",
    excerpt:
      "A short description of the blog post will go here. This placeholder text gives you an idea of how the final content will look in this card layout.",
    color: "#D97B4D",
  },
];

export function Blog() {
  return (
    <section
      id="blog"
      className="relative py-24 md:py-32 overflow-hidden bg-[#08140D]"
    >
      {/* Background Glow */}
      <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#4E8F57]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#D97B4D]/3 blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#8A918E] uppercase block mb-4">
            Blog
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Stories &{" "}
            <span className="text-gradient-accent">Insights</span>
          </h2>
          <p className="text-base md:text-lg text-[#8A918E] max-w-2xl mx-auto">
            Thoughts on technology, agriculture, entrepreneurship, and the
            journey of building India&apos;s organic commerce future.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {placeholderPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(18,26,21,0.72)] backdrop-blur-sm hover:border-[rgba(217,123,77,0.15)] transition-all duration-500"
            >
              {/* Featured Image Placeholder */}
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(78,143,87,0.1)] to-[rgba(217,123,77,0.05)] group-hover:scale-105 transition-transform duration-500" />
                {/* Decorative icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <FileText className="w-12 h-12 text-[#4E8F57]" />
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium border"
                    style={{
                      color: post.color,
                      borderColor: `${post.color}30`,
                      backgroundColor: `${post.color}10`,
                    }}
                  >
                    <Tag className="w-2.5 h-2.5" />
                    {post.category}
                  </span>
                </div>
                {/* Icon */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-[rgba(18,26,21,0.72)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" style={{ color: post.color }} />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-white mb-2 line-clamp-2 group-hover:text-gradient-accent transition-all duration-300">
                  {post.title}
                </h3>
                <p className="text-xs text-[#8A918E] leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta & Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[10px] text-[#8A918E]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#8A918E] group-hover:text-[#D97B4D] transition-colors">
                    Read More
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="#"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(255,255,255,0.08)] text-[#C6C6C6] hover:text-white hover:border-white/20 transition-all duration-300 bg-[rgba(18,26,21,0.72)] backdrop-blur-sm"
          >
            View All Articles
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
