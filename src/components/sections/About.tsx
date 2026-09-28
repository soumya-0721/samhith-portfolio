"use client";

import { motion } from "framer-motion";
import { Target, Eye, Users, Lightbulb, ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Leaf decoration
function LeafDeco({ className }: { className: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-[0.06] ${className}`}>
      <svg viewBox="0 0 100 100" fill="#6F8F68" className="w-full h-full">
        <path d="M50,10 C70,30 90,50 90,70 C90,90 70,100 50,90 C30,80 10,70 10,50 C10,30 30,10 50,10Z" />
      </svg>
    </div>
  );
}

const glassCards = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To democratize organic commerce in India by building technology that connects farmers directly to markets, ensuring fair prices and transparent supply chains.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "A future where every farmer in India has equal access to digital infrastructure, enabling sustainable livelihoods and a healthier nation through organic products.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "Leading cross-functional teams at the intersection of civil engineering, data science, and AI to solve real-world problems in agriculture and beyond.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Leveraging Generative AI, data analytics, and systems thinking to create solutions that bridge the gap between physical infrastructure and digital intelligence.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-[#F4EADF]"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B66F4A]/3 blur-[120px] pointer-events-none" />

      {/* Leaf decorations */}
      <LeafDeco className="top-20 left-10 w-20 h-20 rotate-45" />
      <LeafDeco className="bottom-20 right-10 w-16 h-16 -rotate-30" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky Section Label */}
          <div className="lg:col-span-2">
            <span className="sticky top-32 text-xs font-bold tracking-[0.2em] text-[#85857E] uppercase block">
              About
            </span>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                Driven by Purpose.
                <br />
                <span className="text-gradient-accent">Building for Impact.</span>
              </h2>

              {/* Founder Story — full width, no portrait */}
              <div className="text-[#62665F] leading-relaxed space-y-6 max-w-4xl">
                <p className="text-base md:text-lg">
                  I am <strong className="text-[#263129]">Samhithreddy Sangam</strong>, a Civil Engineer turned
                  Tech Founder on a mission to transform India&apos;s organic commerce landscape. My
                  journey began with a simple realization — that the same systems-thinking I applied to
                  structural engineering could revolutionize how India grows, distributes, and consumes
                  organic products.
                </p>
                <p className="text-base md:text-lg">
                  Today, as Founder & CEO of{" "}
                  <strong className="text-[#263129]">NEXT360 Organic Products Pvt. Ltd.</strong>, I lead a
                  team building technology that connects verified farmers, trusted brands, businesses,
                  and consumers through transparency, sustainability, and innovation. Every solution
                  we build is a step toward empowering India&apos;s agricultural backbone.
                </p>
              </div>
            </motion.div>

            {/* 4 Premium Glass Cards */}
            <div className="grid sm:grid-cols-2 gap-5 mb-16">
              {glassCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative p-6 md:p-8 rounded-2xl border border-[#D9CBBE]/70 bg-[#FFF8F0] backdrop-blur-sm hover:border-[#B66F4A]/20 transition-all duration-500"
                >
                  {/* Card Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#B66F4A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-[#B66F4A]/10 border border-[#B66F4A]/15 flex items-center justify-center mb-4 group-hover:bg-[#B66F4A]/20 transition-all duration-300">
                      <card.icon className="w-5 h-5 text-[#B66F4A]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#263129] mb-2">{card.title}</h3>
                    <p className="text-sm text-[#85857E] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Info Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-[#D9CBBE]/70 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div>
                <h4 className="text-xs font-bold text-[#85857E] uppercase tracking-wider mb-3">
                  Education
                </h4>
                <div className="space-y-1 text-sm text-[#62665F]">
                  <div className="font-medium text-[#263129]">S.R. University</div>
                  <div>B.Tech Civil Engineering</div>
                  <div className="text-[#85857E]">2026</div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#85857E] uppercase tracking-wider mb-3">
                  Core Stack
                </h4>
                <div className="space-y-1 text-sm text-[#62665F]">
                  <div>Python & Data Science</div>
                  <div>Generative AI (LLMs)</div>
                  <div>Next.js & React</div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#85857E] uppercase tracking-wider mb-3">
                  Location
                </h4>
                <div className="space-y-1 text-sm text-[#62665F]">
                  <div>Karimnagar, Telangana</div>
                  <div>India</div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#85857E] uppercase tracking-wider mb-3">
                  Connect
                </h4>
                <div className="flex flex-col items-start gap-2 text-sm">
                  <Link
                    href="https://linkedin.com/in/samhithreddysangam"
                    target="_blank"
                    className="flex items-center gap-1 text-[#B66F4A] hover:text-[#985938] transition-colors"
                  >
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="https://github.com/samhithreddysangam"
                    target="_blank"
                    className="flex items-center gap-1 text-[#B66F4A] hover:text-[#985938] transition-colors"
                  >
                    GitHub <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
