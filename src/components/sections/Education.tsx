"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Search, Lightbulb, Building2, Globe, Trophy, Target, Eye } from "lucide-react";

const journeyMilestones = [
  {
    year: "2021",
    title: "Engineering Foundation",
    subtitle: "Civil Engineering @ S.R. University",
    description:
      "Began my journey in Civil Engineering, learning structural design, construction management, and systems thinking that would later shape my approach to technology.",
    icon: GraduationCap,
    color: "#4E8F57",
  },
  {
    year: "2022",
    title: "Research & Discovery",
    subtitle: "Data Analytics & AI Exploration",
    description:
      "Discovered the power of data through internships in data analytics and visualization. Built dashboards and learned how data drives decisions in the real world.",
    icon: Search,
    color: "#D97B4D",
  },
  {
    year: "2023",
    title: "The NEXT360 Idea",
    subtitle: "Conception of Organic Commerce Platform",
    description:
      "Identified the gap in India's organic supply chain. The idea of NEXT360 was born — a technology platform to connect farmers directly to consumers with transparency.",
    icon: Lightbulb,
    color: "#4E8F57",
  },
  {
    year: "2024",
    title: "Company Registration",
    subtitle: "NEXT360 Organic Products Pvt. Ltd.",
    description:
      "Officially registered NEXT360 Organic Products Pvt. Ltd. Began building the founding team, developing the platform architecture, and establishing farmer partnerships.",
    icon: Building2,
    color: "#D97B4D",
  },
  {
    year: "2024",
    title: "Website & Brand Launch",
    subtitle: "Digital Presence & Platform Development",
    description:
      "Launched the NEXT360 website and brand identity. Started building the core technology stack and onboarded initial farmer and business partners across Telangana.",
    icon: Globe,
    color: "#4E8F57",
  },
  {
    year: "2025",
    title: "Hackathons & Recognition",
    subtitle: "Guinness World Record & T-Hub Ideation",
    description:
      "Participated in Agentathon 2025, achieving a Guinness World Record in AI. Selected for T-Hub Ideation 2.0 — Hyderabad's premier startup incubation program.",
    icon: Trophy,
    color: "#D97B4D",
  },
  {
    year: "2025",
    title: "T-Hub Incubation",
    subtitle: "Telangana's Startup Ecosystem",
    description:
      "Entered T-Hub's prestigious incubation program. Gained mentorship, funding access, and connections with investors and industry leaders in Hyderabad.",
    icon: Target,
    color: "#4E8F57",
  },
  {
    year: "2026",
    title: "Future Vision",
    subtitle: "Scaling Organic Commerce Across India",
    description:
      "Expanding NEXT360's reach across multiple states. Building AI-powered supply chain optimization, farmer verification systems, and a nationwide organic marketplace.",
    icon: Eye,
    color: "#D97B4D",
  },
];

function TimelineCard({
  milestone,
  index,
}: {
  milestone: (typeof journeyMilestones)[0];
  index: number;
}) {
  const isLeft = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.8", "end 0.2"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0.8]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [isLeft ? -50 : 50, 0, isLeft ? 10 : -10]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, x }}
      className="relative mb-12 md:mb-16 last:mb-0"
    >
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-start gap-4">
          {/* Timeline Dot */}
          <div className="relative flex flex-col items-center">
            <div
              className="w-4 h-4 rounded-full border-2 shrink-0 z-10"
              style={{
                borderColor: milestone.color,
                backgroundColor: `${milestone.color}20`,
              }}
            />
            <div className="w-[1px] flex-1 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-transparent h-full absolute top-4" />
          </div>

          {/* Card */}
          <div className="flex-1 p-5 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(18,26,21,0.72)] backdrop-blur-sm hover:border-[rgba(217,123,77,0.15)] transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${milestone.color}15` }}
              >
                <milestone.icon className="w-4 h-4" style={{ color: milestone.color }} />
              </div>
              <span
                className="text-xs font-bold font-mono"
                style={{ color: milestone.color }}
              >
                {milestone.year}
              </span>
            </div>
            <h3 className="text-base font-bold text-white mb-1">{milestone.title}</h3>
            <p className="text-xs text-[#C6C6C6] mb-2">{milestone.subtitle}</p>
            <p className="text-xs text-[#8A918E] leading-relaxed">{milestone.description}</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Alternating */}
      <div className={`hidden md:flex items-start ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
        <div className="w-1/2 px-8">
          <div
            className={`p-6 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(18,26,21,0.72)] backdrop-blur-sm hover:border-[rgba(217,123,77,0.15)] transition-all duration-300 ${
              isLeft ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`flex items-center gap-3 mb-3 ${isLeft ? "justify-end" : "justify-start"}`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${milestone.color}15` }}
              >
                <milestone.icon className="w-5 h-5" style={{ color: milestone.color }} />
              </div>
              <span
                className="text-sm font-bold font-mono"
                style={{ color: milestone.color }}
              >
                {milestone.year}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{milestone.title}</h3>
            <p className="text-sm text-[#C6C6C6] mb-3">{milestone.subtitle}</p>
            <p className="text-sm text-[#8A918E] leading-relaxed">{milestone.description}</p>
          </div>
        </div>

        {/* Center Line */}
        <div className="relative flex flex-col items-center w-0 shrink-0">
          <div
            className="w-5 h-5 rounded-full border-2 shrink-0 z-10"
            style={{
              borderColor: milestone.color,
              backgroundColor: `${milestone.color}20`,
              boxShadow: `0 0 20px ${milestone.color}40`,
            }}
          />
        </div>

        <div className="w-1/2" />
      </div>

      {/* Connecting line - Desktop */}
      {index < journeyMilestones.length - 1 && (
        <div className="hidden md:block absolute left-1/2 top-10 w-[1px] h-[calc(100%+1rem)] -translate-x-1/2 bg-gradient-to-b from-[rgba(217,123,77,0.2)] to-transparent" />
      )}
    </motion.div>
  );
}

export function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#0C1C13]"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#4E8F57]/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#D97B4D]/3 blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-[0.2em] text-[#8A918E] uppercase block mb-4">
            My Journey
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            From Blueprints to{" "}
            <span className="text-gradient-accent">Breakthroughs</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#8A918E] max-w-2xl mx-auto">
            The path from civil engineering to building India&apos;s organic commerce
            infrastructure — a timeline of purpose-driven milestones.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {journeyMilestones.map((milestone, index) => (
            <TimelineCard key={index} milestone={milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
