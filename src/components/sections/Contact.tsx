"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-transparent text-white">
       
      <div className="container px-6 relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm mb-6">
             <div className="w-2 h-2 rounded-full bg-green
             -500 animate-pulse" />
           Hiring
          </div>

          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 pb-2">
            Let's build<br />something great.
          </h2>
          
          <p className="text-xl text-neutral-400 max-w-xl mx-auto mb-16 leading-relaxed">
            Looking for a Civil Engineer who speaks fluent Data? I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="mailto:samhithreddysangam@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              <Mail className="w-5 h-5" />
              say hello
            </Link>
            <Link
              href="https://linkedin.com/in/samhithreddysangam"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900 border border-neutral-800 text-white font-medium text-lg hover:bg-neutral-800 transition-colors"
            >
              linkedin
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
