"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Code } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight-card";

const projects = [
  {
    title: "Python GUI Visualization",
    desc: "A desktop interface built with Tkinter for instant data plotting. Clean, efficient, and responsive.",
    tags: ["Python", "Tkinter", "Matplotlib"],
    link: "https://github.com/samhithreddysangam",
  },
  {
    title: "Data Analysis Pipeline",
    desc: "Processing real-world datasets using Pandas and NumPy to extract actionable insights.",
    tags: ["Data Science", "Pandas", "ETL"],
    link: "https://github.com/samhithreddysangam",
  },
  {
    title: "Multithreaded Tasker",
    desc: "Implementing Python threading to handle concurrent operations with high efficiency.",
    tags: ["Concurrency", "System Design", "Python"],
    link: "https://github.com/samhithreddysangam",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="container max-w-[1400px] px-6 lg:px-12 mx-auto">
        <div className="mb-24">
            <h2 className="text-4xl font-semibold tracking-tight text-white mb-6">Selected Projects</h2>
            <p className="text-secondary max-w-2xl text-lg">
                Engineering solutions through code.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Spotlight key={idx} className="h-full">
                <div className="relative z-10 h-full p-8 flex flex-col items-start justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                             <Code className="w-6 h-6" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">
                            {project.title}
                        </h3>
                        
                        <p className="text-secondary leading-relaxed mb-6 text-sm">
                            {project.desc}
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded border border-neutral-700">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Link href={project.link} target="_blank" className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                            View on GitHub <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
