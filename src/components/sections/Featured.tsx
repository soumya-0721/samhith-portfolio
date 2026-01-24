"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Agentathon 2025: Building Agentic AI",
    org: "GDG Hyderabad",
    date: "2025",
    link: "https://www.linkedin.com/posts/samhithreddysangam_agentathon2025-gdghyderabad-agenticai-activity-7410589258664574976-zRUX"
  },
  {
    title: "Guinness World Record Holder",
    org: "AI Agentathon",
    date: "2025",
    link: "https://www.linkedin.com/posts/samhithreddysangam_ai-guinnessworldrecord-agentathon2025-activity-7412356596007088128-jdfF"
  },
  {
    title: "Google Developer Expert Interaction",
    org: "Google for Developers",
    date: "2025",
    link: "https://www.linkedin.com/posts/gdg-vizag_googlefordevelopers-googledeveloperexperts-ugcPost-7391831732033028096-jGJy"
  },
  {
    title: "DevFest 2025 Participant",
    org: "GDG Vizag",
    date: "2025",
    link: "https://www.linkedin.com/posts/samhithreddysangam_devfest2025-googledevelopers-gdgvizag-activity-7390350719708508160-1Qpg"
  }
];

export function Featured() {
  return (
    <section id="featured" className="py-32 bg-transparent relative">
      <div className="container max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Header */}
          <div className="lg:col-span-2">
            <span className="sticky top-32 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase block">
              Media
            </span>
          </div>

          <div className="lg:col-span-10 lg:pl-12">
             <div className="mb-16">
                 <h2 className="text-3xl md:text-5xl font-light text-white mb-6">Featured Activities</h2>
                 <p className="text-neutral-400 text-lg max-w-2xl">
                    Recent highlights, hackathons, and community contributions.
                 </p>
             </div>

             <div className="grid md:grid-cols-2 gap-6">
                {features.map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <Link 
                            href={item.link} 
                            target="_blank"
                            className="group block p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 relative overflow-hidden"
                        >
                             <div className="flex justify-between items-start mb-6">
                                <span className="text-xs font-mono text-blue-400 tracking-wider uppercase border border-blue-400/20 px-2 py-1 rounded bg-blue-500/5">
                                    {item.org}
                                </span>
                                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                             </div>
                             
                             <h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                                {item.title}
                             </h3>
                             <p className="text-sm text-neutral-500 font-mono">
                                {item.date}
                             </p>

                             {/* Tech Decoration */}
                             <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
