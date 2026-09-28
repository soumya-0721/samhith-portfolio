"use client";

import { motion } from "framer-motion";
import { Target, Eye, Users, Lightbulb, ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Leaf decoration
function LeafDeco({ className }: { className: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-[0.06] ${className}`}>
      <svg viewBox="0 0 100 100" fill="#6F8F68" className="w-full h-full">
        <path d="M50,10 C70,30 90,50 90,70 C90,90 70,100 50,90 C30,80 10,70 10,50 C10,30 30,10 50,10Z" />
      </svg>
    </div>
  );
}

const glassCards = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To democratize organic commerce in India by building technology that connects farmers directly to markets, ensuring fair prices and transparent supply chains.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "A future-ready Bharat where every farmer in India has equal access to digital infrastructure — farmer empowerment, sustainable agriculture, and a healthier nation through organic products.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "Leading cross-functional teams at the intersection of civil engineering, data science, and AI to solve real-world problems in agriculture and beyond.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Leveraging Generative AI, data analytics, and systems thinking to create solutions that bridge the gap between physical infrastructure and digital intelligence.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-[#F4EADF]"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B66F4A]/3 blur-[120px] pointer-events-none" />

      {/* Leaf decorations */}
      <LeafDeco className="top-20 left-10 w-20 h-20 rotate-45" />
      <LeafDeco className="bottom-20 right-10 w-16 h-16 -rotate-30" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky Section Label */}
          <div className="lg:col-span-2">
            <span className="sticky top-32 text-xs font-bold tracking-[0.2em] text-[#85857E] uppercase block">
              About
            </span>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                Driven by Purpose.
                <br />
                <span className="text-gradient-accent">Building for Impact.</span>
              </h2>

              {/* Founder Story — full width, no portrait */}
              <div className="text-[#62665F] leading-relaxed space-y-6 max-w-4xl">
                <p className="text-base md:text-lg">
                  I am <strong className="text-[#263129]">SamhithReddy Sangam</strong>, a young entrepreneur
                  from Telangana. I trained as a Civil Engineer, and engineering is still how I think: a
                  structure is only as strong as its weakest connection, and it is judged by what happens
                  under load. I ended up building software instead of buildings, and found the same logic
                  waiting in farming. Soil, crop, harvest, market — each stage holds up the next, and one
                  broken link undoes the effort of everyone who worked before it.
                </p>
                <p className="text-base md:text-lg">
                  That is the work I do now. As Founder &amp; CEO of{" "}
                  <strong className="text-[#263129]">NEXT360 Organic Products Pvt. Ltd.</strong>, I build the
                  technology that carries an organic product honestly from one end to the other — who grew
                  it, what was added, when it was harvested, who handled it next. Transparency and
                  traceability sit in the record rather than in a brochure. Farmers reach buyers without a
                  chain of intermediaries deciding their price, and a consumer can see exactly what they are
                  buying. Each of those is an innovation problem before it is a business problem.
                </p>
                <p className="text-base md:text-lg">
                  I call the approach{" "}
                  <strong className="text-[#263129]">Digitalising our roots</strong>. Technology for farmers
                  should not mean replacing what they already know — what to sow, when to harvest, how to
                  hold a field through a dry month. India&apos;s organic ecosystem rests on that kind of
                  practical knowledge, passed down for generations, and digitalising agriculture means
                  carrying it forward rather than flattening it. So the work reduces to a simple line:
                  farmer empowerment through technology, built so that sustainable agriculture becomes the
                  default for the small farmer and the everyday buyer rather than the exception.
                </p>
              </div>
            </motion.div>

            {/* 4 Premium Glass Cards */}
            <div className="grid sm:grid-cols-2 gap-5 mb-16">
              {glassCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative p-6 md:p-8 rounded-2xl border border-[#D9CBBE]/70 bg-[#FFF8F0] backdrop-blur-sm hover:border-[#B66F4A]/20 transition-all duration-500"
                >
                  {/* Card Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#B66F4A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-[#B66F4A]/10 border border-[#B66F4A]/15 flex items-center justify-center mb-4 group-hover:bg-[#B66F4A]/20 transition-all duration-300">
                      <card.icon className="w-5 h-5 text-[#B66F4A]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#263129] mb-2">{card.title}</h3>
                    <p className="text-sm text-[#85857E] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Info Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-[#D9CBBE]/70 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div>
                <h4 className="text-xs font-bold text-[#85857E] uppercase tracking-wider mb-3">
                  Education
                </h4>
                <div className="space-y-1 text-sm text-[#62665F]">
                  <div className="font-medium text-[#263129]">S.R. University</div>
                  <div>B.Tech Civil Engineering</div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#85857E] uppercase tracking-wider mb-3">
                  Core Stack
                </h4>
                <div className="space-y-1 text-sm text-[#62665F]">
                  <div>Python & Data Science</div>
                  <div>Generative AI (LLMs)</div>
                  <div>Next.js & React</div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#85857E] uppercase tracking-wider mb-3">
                  Location
                </h4>
                <div className="space-y-1 text-sm text-[#62665F]">
                  <div>Karimnagar, Telangana</div>
                  <div>India</div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#85857E] uppercase tracking-wider mb-3">
                  Connect
                </h4>
                <div className="flex flex-col items-start gap-2 text-sm">
                  <Link
                    href="https://linkedin.com/in/samhithreddysangam"
                    target="_blank"
                    className="flex items-center gap-1 text-[#B66F4A] hover:text-[#985938] transition-colors"
                  >
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="https://github.com/samhithreddysangam"
                    target="_blank"
                    className="flex items-center gap-1 text-[#B66F4A] hover:text-[#985938] transition-colors"
                  >
                    GitHub <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
