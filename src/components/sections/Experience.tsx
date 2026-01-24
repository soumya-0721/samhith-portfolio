"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Founder & CEO",
    company: "NEXT 360",
    period: "Present",
    description: "Leading strategic vision and product development for innovative tech solutions. Overseeing cross-functional teams in software development and business operations."
  },
  {
    role: "Generative AI Intern",
    company: "Adroit Technologies",
    period: "3 Months",
    description: "Worked on real-world AI applications using Python and generative AI tools. Assisted in live project development under mentorship."
  },
  {
    role: "Data Analytics Intern",
    company: "Adroit Technologies",
    period: "3 Months",
    description: "Built interactive dashboards and visual reports using IBM Cognos. Worked with ETL processes for data preparation and storytelling."
  },
  {
    role: "Industrial Trainee",
    company: "Sri Vishnu Engineering Academy",
    period: "Training",
    description: "Designed two-way slabs based on span ratio and end conditions. Calculated bending moment coefficients using IS codes."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 bg-transparent relative">
      <div className="container max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Header */}
          <div className="lg:col-span-2">
            <span className="sticky top-32 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase block">
              Experience
            </span>
          </div>

          <div className="lg:col-span-10 lg:pl-12">
             <div className="mb-16">
                 <h2 className="text-3xl md:text-5xl font-light text-white mb-6">Professional History</h2>
                 <p className="text-neutral-400 text-lg max-w-2xl">
                    Leading teams and building software.
                 </p>
             </div>

             <div className="space-y-12">
                {experiences.map((exp, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group border-t border-neutral-800 pt-8"
                    >
                        <div className="grid md:grid-cols-12 gap-6">
                            <div className="md:col-span-4">
                                <h3 className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors mb-1">{exp.company}</h3>
                                <div className="text-neutral-500 font-mono text-sm">{exp.period}</div>
                            </div>
                            <div className="md:col-span-8">
                                <div className="text-lg text-white mb-3">{exp.role}</div>
                                <p className="text-neutral-400 leading-relaxed max-w-2xl">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
