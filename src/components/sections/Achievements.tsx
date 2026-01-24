"use client";

import { motion } from "framer-motion";

const honorsData = [
  {
    category: "Certifications",
    items: [
        "JPMorgan Chase & Co. - Software Engineering Lite",
        "Goldman Sachs - Software Engineering Virtual Experience",
        "Accenture - Data Analytics and Visualization",
        "Cyber DevX Program - Cybersecurity & Emerging Tech",
        "Learn Python Programming - Beginner to Master (Udemy)"
    ]
  },
  {
    category: "Leadership",
    items: [
        "National Seva Internship Cell Lead – INDGenius",
        "Executive Member – Indian Concrete Institute (ICI), S.R. University",
        "Class Representative – Civil Engineering (2019–2022)",
        "Camp Organizer – Anubuthi (INDGenius)"
    ]
  },
  {
    category: "Recognition",
    items: [
        "Certificate of Outstanding Performance in Gamification Points – S.R. University",
        "Seminar Conductor – GITAM, S.R. University",
        "T-Hub Ideation 2.0 – Startup & Innovation Program"
    ]
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-32 bg-transparent relative">
      <div className="container max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Header */}
          <div className="lg:col-span-2">
            <span className="sticky top-32 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase block">
              Honors
            </span>
          </div>

          <div className="lg:col-span-10 lg:pl-12">
             <div className="mb-16">
                 <h2 className="text-3xl md:text-5xl font-light text-white mb-6">Achievements</h2>
                 <p className="text-neutral-400 text-lg max-w-2xl">
                    Recognition and responsibility beyond the classroom.
                 </p>
             </div>

             <div className="space-y-16">
                {honorsData.map((section, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <h3 className="text-xl font-medium text-white mb-6 pb-2 border-b border-neutral-800 inline-block pr-12">
                            {section.category}
                        </h3>
                        <ul className="grid md:grid-cols-1 gap-4">
                            {section.items.map((item, i) => (
                                <li key={i} className="text-neutral-400 hover:text-white transition-colors text-lg leading-relaxed flex items-start gap-3 group">
                                     <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-blue-500 transition-colors shrink-0" />
                                     {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
