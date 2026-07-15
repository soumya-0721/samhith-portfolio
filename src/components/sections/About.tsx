"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Target, Eye, Users, Lightbulb, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, useMemo, useCallback } from "react";

// India outline path (same as Hero)
const indiaPath =
  "M250,55 C300,55 350,70 385,100 C420,130 440,180 435,230 C430,280 410,330 380,365 C350,400 310,425 260,435 C210,445 160,430 125,395 C90,360 70,310 65,260 C60,210 70,160 100,125 C130,90 170,60 210,55 C225,53 240,55 250,55Z";

// Subtle decorative India map background
function DecorativeIndiaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 15 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!mapRef.current) return;
      const rect = mapRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) * 0.02);
      mouseY.set((e.clientY - centerY) * 0.02);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // Floating particles
  const particles = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      left: `${15 + ((i * 37 + 13) % 70)}%`,
      top: `${10 + ((i * 53 + 7) % 80)}%`,
      yEnd: -(15 + ((i * 11) % 12)),
      xEnd: ((i * 7) % 12) - 6,
      duration: 5 + ((i * 3) % 4),
      delay: ((i * 2) % 6),
    }));
  }, []);

  return (
    <div
      ref={mapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Soft radial emerald glow */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[#4E8F57]/12 blur-[100px]" />

      {/* Map container with subtle parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ x: springX, y: springY }}
        animate={{ scale: [1, 1.01, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px]">
          <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
            {/* Glow filters */}
            <defs>
              <filter id="aboutGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outer soft glow */}
            <path
              d={indiaPath}
              fill="none"
              stroke="rgba(78,143,87,0.15)"
              strokeWidth="12"
              filter="url(#aboutGlow)"
            />

            {/* Main outline */}
            <path
              d={indiaPath}
              fill="none"
              stroke="rgba(78,143,87,0.4)"
              strokeWidth="1.5"
            />

            {/* Dashed accent outline */}
            <path
              d={indiaPath}
              fill="none"
              stroke="rgba(78,143,87,0.2)"
              strokeWidth="0.8"
              strokeDasharray="4 6"
            />

            {/* City hub dots */}
            <circle cx="240" cy="195" r="4" fill="#4E8F57" opacity="0.6" filter="url(#aboutGlow)">
              <animate attributeName="opacity" values="0.6;0.25;0.6" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="280" cy="225" r="3" fill="#4E8F57" opacity="0.45">
              <animate attributeName="opacity" values="0.45;0.15;0.45" dur="5s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* Floating particles */}
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] rounded-full bg-[#4E8F57]"
              style={{ left: p.left, top: p.top }}
              animate={{
                y: [0, p.yEnd, 0],
                x: [0, p.xEnd, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Leaf decoration
function LeafDeco({ className }: { className: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-[0.06] ${className}`}>
      <svg viewBox="0 0 100 100" fill="#4E8F57" className="w-full h-full">
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
      className="relative py-24 md:py-32 overflow-hidden bg-[#08140D]"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D97B4D]/3 blur-[120px] pointer-events-none" />

      {/* Decorative India Map Background */}
      <DecorativeIndiaMap />

      {/* Leaf decorations */}
      <LeafDeco className="top-20 left-10 w-20 h-20 rotate-45" />
      <LeafDeco className="bottom-20 right-10 w-16 h-16 -rotate-30" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky Section Label */}
          <div className="lg:col-span-2">
            <span className="sticky top-32 text-xs font-bold tracking-[0.2em] text-[#8A918E] uppercase block">
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
              <div className="text-[#C6C6C6] leading-relaxed space-y-6 max-w-4xl">
                <p className="text-base md:text-lg">
                  I am <strong className="text-white">Samhithreddy Sangam</strong>, a Civil Engineer turned
                  Tech Founder on a mission to transform India&apos;s organic commerce landscape. My
                  journey began with a simple realization — that the same systems-thinking I applied to
                  structural engineering could revolutionize how India grows, distributes, and consumes
                  organic products.
                </p>
                <p className="text-base md:text-lg">
                  Today, as Founder & CEO of{" "}
                  <strong className="text-white">NEXT360 Organic Products Pvt. Ltd.</strong>, I lead a
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
                  className="group relative p-6 md:p-8 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(18,26,21,0.72)] backdrop-blur-sm hover:border-[rgba(217,123,77,0.2)] transition-all duration-500"
                >
                  {/* Card Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D97B4D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-[#D97B4D]/10 border border-[rgba(217,123,77,0.15)] flex items-center justify-center mb-4 group-hover:bg-[#D97B4D]/20 transition-all duration-300">
                      <card.icon className="w-5 h-5 text-[#D97B4D]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-[#8A918E] leading-relaxed">
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
              className="pt-8 border-t border-[rgba(255,255,255,0.06)] grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div>
                <h4 className="text-xs font-bold text-[#8A918E] uppercase tracking-wider mb-3">
                  Education
                </h4>
                <div className="space-y-1 text-sm text-[#C6C6C6]">
                  <div className="font-medium text-white">S.R. University</div>
                  <div>B.Tech Civil Engineering</div>
                  <div className="text-[#8A918E]">2026</div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#8A918E] uppercase tracking-wider mb-3">
                  Core Stack
                </h4>
                <div className="space-y-1 text-sm text-[#C6C6C6]">
                  <div>Python & Data Science</div>
                  <div>Generative AI (LLMs)</div>
                  <div>Next.js & React</div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#8A918E] uppercase tracking-wider mb-3">
                  Location
                </h4>
                <div className="space-y-1 text-sm text-[#C6C6C6]">
                  <div>Karimnagar, Telangana</div>
                  <div>India</div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#8A918E] uppercase tracking-wider mb-3">
                  Connect
                </h4>
                <div className="flex flex-col items-start gap-2 text-sm">
                  <Link
                    href="https://linkedin.com/in/samhithreddysangam"
                    target="_blank"
                    className="flex items-center gap-1 text-[#D97B4D] hover:text-[#e8a87c] transition-colors"
                  >
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="https://github.com/samhithreddysangam"
                    target="_blank"
                    className="flex items-center gap-1 text-[#D97B4D] hover:text-[#e8a87c] transition-colors"
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
