"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-32 bg-transparent text-white relative">
      <div className="container max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Sticky Header */}
          <div className="lg:col-span-2">
            <span className="sticky top-32 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase block">
              About
            </span>
          </div>

          {/* Content */}
          <div className="lg:col-span-10 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Main Bio */}
              <h2 className="text-3xl md:text-5xl font-light leading-tight text-white/90">
                I am <span className="text-white font-medium">Samhithreddy Sangam</span>, a Civil Engineer turned Tech Founder. I bridge the gap between physical infrastructure and digital intelligence.
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 text-neutral-400 text-lg leading-relaxed">
                <p>
                  As the <strong className="text-white font-medium">Founder & CEO of NEXT 360</strong>, I lead teams to build innovative software solutions. My background in Civil Engineering gives me a unique perspective on systems design—whether structural or algorithmic.
                </p>
                <p>
                  I specialize in <strong className="text-white font-medium">Generative AI</strong> and <strong className="text-white font-medium">Data Analytics</strong>. I don't just write code; I architect systems that solve real-world problems, from optimizing construction workflows to processing large-scale datasets.
                </p>
              </div>

              {/* Minimal Stats / Details Row */}
              <div className="pt-12 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-8">
                 <div>
                    <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">Education</h4>
                    <div className="space-y-1 text-sm text-neutral-300">
                        <div className="font-medium text-white">S.R. University</div>
                        <div>B.Tech Civil Engineering</div>
                        <div className="text-neutral-500">2026</div>
                    </div>
                 </div>

                 <div>
                    <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">Core Stack</h4>
                    <div className="space-y-1 text-sm text-neutral-300">
                        <div>Python & Data Science</div>
                        <div>Generative AI (LLMs)</div>
                        <div>Next.js & React</div>
                    </div>
                 </div>

                 <div>
                    <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">Location</h4>
                    <div className="space-y-1 text-sm text-neutral-300">
                        <div>Karimnagar, Telangana</div>
                        <div>India</div>
                    
                    </div>
                 </div>

                 <div>
                    <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">Connect</h4>
                    <div className="flex flex-col items-start gap-2 text-sm">
                        <Link href="https://linkedin.com/in/samhithreddysangam" target="_blank" className="flex items-center gap-1 text-white hover:text-blue-400 transition-colors">
                            LinkedIn <ArrowUpRight className="w-3 h-3" />
                        </Link>
                        <Link href="https://github.com/samhithreddysangam" target="_blank" className="flex items-center gap-1 text-white hover:text-blue-400 transition-colors">
                            GitHub <ArrowUpRight className="w-3 h-3" />
                        </Link>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
