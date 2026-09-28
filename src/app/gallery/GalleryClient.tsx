"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const galleryItems = [
  {
    title: "Organic Farming Initiative",
    description: "Empowering farmers across Telangana with sustainable practices.",
    gradient: "from-[#6F8F68]/20 to-[#6F8F68]/5",
    icon: "🌱",
  },
  {
    title: "NEXT360 Platform Launch",
    description: "The official launch of our organic commerce platform.",
    gradient: "from-[#B66F4A]/20 to-[#B66F4A]/5",
    icon: "🚀",
  },
  {
    title: "T-Hub Incubation",
    description: "Selected for T-Hub Ideation 2.0 incubation program.",
    gradient: "from-[#6F8F68]/20 to-[#6F8F68]/5",
    icon: "🏢",
  },
  {
    title: "Guinness World Record",
    description: "AI Agentathon 2025 — breaking barriers in technology.",
    gradient: "from-[#B66F4A]/20 to-[#B66F4A]/5",
    icon: "🏆",
  },
  {
    title: "Farmer Partnerships",
    description: "Building direct connections with organic farmers.",
    gradient: "from-[#6F8F68]/20 to-[#6F8F68]/5",
    icon: "🤝",
  },
  {
    title: "Community Impact",
    description: "Creating positive change in rural communities across India.",
    gradient: "from-[#B66F4A]/20 to-[#B66F4A]/5",
    icon: "💛",
  },
];

export function GalleryClient() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#F4EADF]">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          className={cn(
            "h-full w-full stroke-[#263129]/[0.02] fill-transparent",
            "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]"
          )}
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        <section className="pt-32 md:pt-40 pb-24 md:pb-32">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-[#85857E] hover:text-[#B66F4A] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
            </motion.div>

            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-[#85857E] uppercase block mb-4">
                Gallery
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Visual{" "}
                <span className="text-gradient-accent">Journey</span>
              </h1>
              <p className="text-base md:text-lg text-[#85857E] max-w-2xl mx-auto">
                A collection of moments and milestones from our journey building NEXT360.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {galleryItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-xl border border-[#D9CBBE]/70 bg-[#FFF8F0] backdrop-blur-sm overflow-hidden hover:border-[#B66F4A]/15 transition-all duration-300"
                >
                  {/* Image Placeholder */}
                  <div
                    className={cn(
                      "relative h-48 bg-gradient-to-br flex items-center justify-center overflow-hidden",
                      item.gradient
                    )}
                  >
                    <div className="absolute inset-0 bg-[#FFF8F0]/40" />
                    <span className="relative text-5xl">{item.icon}</span>
                    <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#FFF8F0] to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-[#263129] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#85857E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
