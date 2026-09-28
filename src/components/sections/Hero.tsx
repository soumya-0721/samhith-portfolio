"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Calendar, Award, Users, Globe, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useMemo, useCallback } from "react";

// Premium Animated India Map — thousands of glowing dots behind the portrait
function AnimatedIndiaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Mouse parallax handler
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!mapRef.current) return;
      const rect = mapRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const moveX = (e.clientX - centerX) * 0.03;
      const moveY = (e.clientY - centerY) * 0.03;
      mouseX.set(moveX);
      mouseY.set(moveY);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // India SVG outline path (simplified, recognizable shape)
  const indiaPath = "M250,55 C300,55 350,70 385,100 C420,130 440,180 435,230 C430,280 410,330 380,365 C350,400 310,425 260,435 C210,445 160,430 125,395 C90,360 70,310 65,260 C60,210 70,160 100,125 C130,90 170,60 210,55 C225,53 240,55 250,55Z";

  // Deterministic pseudo-random number generator (LCG)
  // Produces same values on server and client — eliminates hydration mismatch
  function createRng(seedVal: number) {
    let s = seedVal;
    return () => {
      s = (s * 16807 + 1) % 2147483647;
      return s / 2147483647;
    };
  }

  // Generate a grid of dots inside the India shape with ALL properties deterministic
  const dots = useMemo(() => {
    const result: {
      x: number;
      y: number;
      size: number;
      delay: number;
      duration: number;
      opacity: number;
      animVals: string;
    }[] = [];
    const rand = createRng(42); // fixed seed — same on server and client
    for (let x = 120; x <= 430; x += 12) {
      for (let y = 70; y <= 430; y += 12) {
        const r = rand();
        // Include about 35% of grid points for a sparse, clean look
        if (r < 0.35) {
          const opacity = 0.3 + rand() * 0.5;
          const v1 = 0.2 + rand() * 0.3;
          const v2 = 0.6 + rand() * 0.4;
          const v3 = 0.2 + rand() * 0.3;
          result.push({
            x,
            y,
            size: 1 + rand() * 2.5,
            delay: rand() * 6,
            duration: 2 + rand() * 4,
            opacity,
            animVals: `${v1};${v2};${v3}`,
          });
        }
      }
    }
    return result;
  }, []);

  return (
    <div
      ref={mapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Map container with parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: [1, 1.015, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px]"
        >
          <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
            <defs>
              <clipPath id="indiaClip">
                <path d={indiaPath} />
              </clipPath>
              {/* Emerald glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Main glowing outline */}
            <path
              d={indiaPath}
              fill="none"
              stroke="rgba(111,143,104,0.35)"
              strokeWidth="1.5"
              filter="url(#glow)"
            />

            {/* Secondary thinner outline */}
            <path
              d={indiaPath}
              fill="none"
              stroke="rgba(111,143,104,0.15)"
              strokeWidth="0.8"
              strokeDasharray="3 5"
            />

            {/* Thousands of glowing dots clipped to India shape */}
            <g clipPath="url(#indiaClip)" opacity={0.6}>
              {dots.map((dot, i) => (
                <circle
                  key={i}
                  cx={dot.x}
                  cy={dot.y}
                  r={dot.size}
                  fill="#6F8F68"
                  opacity={dot.opacity}
                >
                  <animate
                    attributeName="opacity"
                    values={dot.animVals}
                    dur={`${dot.duration}s`}
                    begin={`${dot.delay}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </g>

            {/* Major city / hub glowing dots */}
            <circle cx="240" cy="195" r="5" fill="#6F8F68" opacity="0.7" filter="url(#glow)">
              <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="280" cy="225" r="3.5" fill="#6F8F68" opacity="0.6" filter="url(#glow)">
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="260" cy="265" r="3" fill="#6F8F68" opacity="0.5" filter="url(#glow)">
              <animate attributeName="opacity" values="0.5;0.2;0.5" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="245" r="2.5" fill="#6F8F68" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.15;0.5" dur="2.8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Floating organic leaf decoration
function LeafDecoration({ className }: { className: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-[0.04] ${className}`}>
      <svg viewBox="0 0 100 100" fill="#6F8F68" className="w-full h-full">
        <path d="M50,10 C70,30 90,50 90,70 C90,90 70,100 50,90 C30,80 10,70 10,50 C10,30 30,10 50,10Z" />
      </svg>
    </div>
  );
}

// Stats data — factual descriptors, not metrics
const statsData = [
  { label: "Founded", value: "2026", icon: Calendar },
  { label: "Venture", value: "NEXT360", icon: Briefcase },
  { label: "Approach", value: "Farmer-Led", icon: Users },
  { label: "Vision 2030", value: "Bharat", icon: Award },
  { label: "Focus", value: "AgriTech", icon: Users },
  { label: "Supply Chain", value: "Organic", icon: Globe },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
        id="hero"
        ref={containerRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F4EADF]"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4EADF] via-[#EEE1D3]/50 to-[#F4EADF] pointer-events-none" />

        {/* Leaf decorations - corners */}
        <LeafDecoration className="top-10 left-10 w-24 h-24 rotate-45" />
        <LeafDecoration className="bottom-10 right-10 w-20 h-20 -rotate-30" />

        {/* Scroll Parallax Content */}
        <motion.div style={{ y, opacity }} className="relative z-10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Greeting */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D9CBBE] bg-[#FFF8F0] backdrop-blur-sm mb-6"
                >
                  <div className="w-2 h-2 rounded-full bg-[#6F8F68] animate-pulse" />
                  <span className="text-xs text-[#85857E] tracking-wider font-medium">
                    Hello, I&apos;m
                  </span>
                </motion.div>

                {/* Name */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-3">
                  <span className="text-[#263129] uppercase">Samhith</span>
                  <br />
                  <span className="text-gradient-accent uppercase">Reddy Sangam</span>
                </h1>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-3 mb-5"
                >
                  <span className="text-base md:text-lg text-[#62665F] font-light tracking-wide">
                    Founder & CEO
                  </span>
                  <br />
                  <span className="text-sm text-[#85857E] font-light">
                    NEXT360 Organic Products Pvt. Ltd.
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 max-w-3xl"
                >
                  Building India&apos;s{" "}
                  <span className="text-gradient-accent">Organic Commerce</span>{" "}
                  Infrastructure.
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm md:text-base text-[#85857E] leading-relaxed max-w-xl mb-8"
                >
                  Creating technology that connects verified farmers, trusted brands,
                  businesses, and consumers through transparency, sustainability, and
                  innovation.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col sm:flex-row items-center gap-3"
                >
                  <Link
                    href="https://next360.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#B66F4A] text-white font-semibold text-sm hover:bg-[#985938] transition-all duration-300 shadow-lg shadow-[#B66F4A]/20"
                  >
                    View NEXT360
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <a
                    href="/assets/Samhith_Resume.pdf"
                    download
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-[#CBBCAF] text-[#4D554E] hover:bg-[#E8DCCE] hover:border-[#BBA999] hover:text-[#263129] transition-all duration-300 bg-transparent backdrop-blur-sm"
                  >
                    Download Profile
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="https://calendly.com/samhithreddysangam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-[#CBBCAF] text-[#4D554E] hover:bg-[#E8DCCE] hover:border-[#BBA999] hover:text-[#263129] transition-all duration-300 bg-transparent backdrop-blur-sm"
                  >
                    Schedule Meeting
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Right Column - Large Founder Portrait with India Map filling the background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="lg:col-span-4 flex items-center justify-center relative"
              >
                <div className="relative flex items-center justify-center w-full min-h-[300px] sm:min-h-[380px] md:min-h-[480px]">
                  {/* India Map - large, filling the entire background behind the founder */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
                    <div className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[620px] md:h-[620px] overflow-hidden">
                      <AnimatedIndiaMap />
                    </div>
                  </div>

                  {/* Portrait */}
                  <div className="relative z-[2] w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] shrink-0 ml-auto -mr-10 md:-mr-16">
                    {/* Portrait - transparent PNG with object-contain */}
                    <div className="relative w-full h-full">
                      <Image
                        src="/assets/samhith.png"
                        alt="SamhithReddy Sangam"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Animated Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="relative z-10 border-t border-[#D9CBBE]/60 bg-[#FFF8F0]/80 backdrop-blur-md"
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8">
              {statsData.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + idx * 0.08 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-1">
                    <stat.icon className="w-3.5 h-3.5 text-[#B66F4A]/50" />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-[#263129]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-[#85857E] uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] text-[#85857E] uppercase tracking-[0.2em] font-medium">
              Scroll
            </span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#B66F4A]/40 to-transparent" />
          </motion.div>
        </motion.div>
      </section>
  );
}
