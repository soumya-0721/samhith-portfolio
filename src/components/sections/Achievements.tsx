"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Building2, Lightbulb, Newspaper, Shield, Star } from "lucide-react";

const achievementCategories = [
  {
    category: "Startup & Innovation",
    color: "#B66F4A",
    icon: Lightbulb,
    items: [
      "Founded NEXT360 Organic Products Pvt. Ltd.",
      "T-Hub Ideation 2.0 — Selected for Incubation",
      "Built end-to-end organic commerce platform",
      "Developed AI-powered supply chain optimization",
    ],
  },
  {
    category: "Hackathons & Competitions",
    color: "#6F8F68",
    icon: Trophy,
    items: [
      "Guinness World Record Holder — AI Agentathon 2025",
      "Agentathon 2025 — Top Performer at GDG Hyderabad",
      "Multiple hackathon participations and wins",
    ],
  },
  {
    category: "Government & Institutional",
    color: "#B66F4A",
    icon: Building2,
    items: [
      "National Seva Internship Cell Lead – INDGenius",
      "Executive Member – Indian Concrete Institute (ICI)",
      "Class Representative – Civil Engineering (2019–2022)",
    ],
  },
  {
    category: "Innovation & Research",
    color: "#6F8F68",
    icon: Star,
    items: [
      "Generative AI Research & Application Development",
      "Data Analytics & Visualization Projects with IBM Cognos",
      "Structural Engineering Design & Analysis",
    ],
  },
  {
    category: "Awards & Recognition",
    color: "#B66F4A",
    icon: Award,
    items: [
      "Certificate of Outstanding Performance — S.R. University",
      "Seminar Conductor – GITAM University",
      "Camp Organizer – Anubuthi (INDGenius)",
    ],
  },
  {
    category: "Media & Publications",
    color: "#6F8F68",
    icon: Newspaper,
    items: [
      "Featured in LinkedIn News for Guinness World Record",
      "Community Contributor at GDG Hyderabad & Vizag",
      "Speaker at DevFest 2025",
    ],
  },
  {
    category: "Certifications",
    color: "#B66F4A",
    icon: Shield,
    items: [
      "Cyber DevX — Cybersecurity & Emerging Tech",
      "Python Programming — Beginner to Master (Udemy)",
    ],
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-24 md:py-32 overflow-hidden bg-[#EEE1D3]"
    >
      {/* Background */}
      <div className="absolute top-0 right-[-10%] w-[400px] h-[400px] rounded-full bg-[#B66F4A]/3 blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#85857E] uppercase block mb-4">
            Achievements
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Milestones &{" "}
            <span className="text-gradient-accent">Recognition</span>
          </h2>
          <p className="text-base md:text-lg text-[#85857E] max-w-2xl mx-auto">
            From world records to institutional honors — a track record of excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievementCategories.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-5 rounded-xl border border-[#D9CBBE]/70 bg-[#FFF8F0] backdrop-blur-sm hover:border-[#B66F4A]/15 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${section.color}15` }}
                >
                  <section.icon className="w-4.5 h-4.5" style={{ color: section.color }} />
                </div>
                <h3 className="text-sm font-bold text-[#263129]">{section.category}</h3>
              </div>

              {/* Items */}
              <ul className="space-y-2.5">
                {section.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 + i * 0.03 }}
                    className="flex items-start gap-2.5 group/item"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-colors duration-300"
                      style={{ backgroundColor: section.color }}
                    />
                    <span className="text-xs md:text-sm text-[#62665F] leading-relaxed group-hover/item:text-[#263129] transition-colors duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
