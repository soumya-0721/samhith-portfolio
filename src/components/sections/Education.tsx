"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    type: "B.Tech – Civil Engineering",
    school: "S.R. University",
    year: "2023 – 2026",
    description: "Specializing in Structural Engineering & Computational Design."
  },
  {
    type: "Diploma – Civil Engineering",
    school: "VITS Engineering College",
    year: "2019 – 2023",
    description: "Core curriculum in construction management and surveying."
  }
];

export function Education() {
  return (
    <section id="education" className="py-32 bg-transparent relative">
      <div className="container max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Header */}
          <div className="lg:col-span-2">
            <span className="sticky top-32 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase block">
              Timeline
            </span>
          </div>

          <div className="lg:col-span-10 lg:pl-12">
             <div className="mb-16">
                 <h2 className="text-3xl md:text-5xl font-light text-white mb-6">Education</h2>
                 <p className="text-neutral-400 text-lg max-w-2xl">
                    My academic foundation in engineering disciplines.
                 </p>
             </div>

             <div className="relative border-l border-neutral-800 ml-3 space-y-16">
                {educationData.map((edu, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="pl-12 relative"
                    >
                        {/* Interactive Dot */}
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-600 transition-colors group-hover:bg-blue-500 group-hover:border-blue-400" />
                        
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                             <h3 className="text-2xl font-medium text-white group-hover:text-blue-400 transition-colors">{edu.school}</h3>
                             <span className="text-sm font-mono text-neutral-500">{edu.year}</span>
                        </div>
                        
                        <div className="text-lg text-blue-400 mb-4">{edu.type}</div>
                        <p className="text-neutral-400 leading-relaxed max-w-2xl">
                            {edu.description}
                        </p>
                    </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
