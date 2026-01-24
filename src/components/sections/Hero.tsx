"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden bg-transparent">
      
      {/* Spotlight Effect - CSS Top Light */}
      <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-6 pt-20">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
             <h1 className="text-5xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6 leading-tight pb-2">
                Samhithreddy<br />Sangam.
             </h1>
             <p className="text-lg md:text-2xl font-medium text-blue-400 mb-8">
                Founder & CEO @ NEXT 360
             </p>
             <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                Building digital experiences at the intersection of <span className="text-white font-medium">Civil Engineering</span> and <span className="text-blue-400 font-medium">Data Intelligence</span>.
             </p>

             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Link href="#projects" className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors">
                    Explore Work
                 </Link>
                 <Link href="#contact" className="px-8 py-3.5 rounded-full border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-all bg-neutral-900/50 backdrop-blur-sm">
                    Contact Me
                 </Link>
             </div>
        </motion.div>
      </div>
    </section>
  );
}
