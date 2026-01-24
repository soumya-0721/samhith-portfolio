"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Technical",
    items: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Next.js", "React", "SQL"]
  },
  {
    category: "Civil Engineering",
    items: ["AutoCAD", "Revit", "Structural Analysis", "Surveying", "Construction Management"]
  },
  {
    category: "Design & Tools",
    items: ["Figma", "Blender", "Git/GitHub", "VS Code", "Origin Pro"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-transparent relative">
      <div className="container max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Header */}
          <div className="lg:col-span-2">
            <span className="sticky top-32 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase block">
              Arsenal
            </span>
          </div>

          <div className="lg:col-span-10 lg:pl-12">
             <div className="mb-16">
                 <h2 className="text-3xl md:text-5xl font-light text-white mb-6">Skills & Tools</h2>
                 <p className="text-neutral-400 text-lg max-w-2xl">
                    The technologies I use to bridge the physical and digital worlds.
                 </p>
             </div>

             <div className="grid md:grid-cols-3 gap-12 border-t border-neutral-800 pt-12">
                {skillsData.map((category, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">{category.category}</h3>
                        <ul className="space-y-3">
                            {category.items.map((item, i) => (
                                <li key={i} className="text-neutral-400 hover:text-blue-400 transition-colors cursor-default text-lg">
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
