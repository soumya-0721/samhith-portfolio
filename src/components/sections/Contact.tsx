"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Globe, MapPin, Calendar, Linkedin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden bg-[#08140D]"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D97B4D]/4 blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-[#8A918E] uppercase block mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-gradient-accent">Meaningful</span> Together.
            </h2>
            <p className="text-base md:text-lg text-[#8A918E] max-w-xl mx-auto">
              Whether you&apos;re a farmer looking to partner, an investor exploring opportunities, or a
              brand seeking organic supply — let&apos;s talk.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="https://calendly.com/samhithreddysangam"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#D97B4D] text-white font-semibold text-sm hover:bg-[#c96a3d] transition-all duration-300 shadow-lg shadow-[#D97B4D]/20"
            >
              <Calendar className="w-4 h-4" />
              Schedule Meeting
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="https://linkedin.com/in/samhithreddysangam"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.08)] text-[#C6C6C6] hover:text-white hover:border-white/20 transition-all duration-300 bg-[rgba(18,26,21,0.72)] backdrop-blur-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="mailto:ceo.office@gmail.com"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.08)] text-[#C6C6C6] hover:text-white hover:border-white/20 transition-all duration-300 bg-[rgba(18,26,21,0.72)] backdrop-blur-sm"
            >
              <Mail className="w-4 h-4" />
              Email
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Glass Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 md:p-8 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(18,26,21,0.72)] backdrop-blur-sm"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D97B4D]/10 border border-[rgba(217,123,77,0.15)] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#D97B4D]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#8A918E] uppercase tracking-wider font-medium mb-1">
                    Email
                  </p>
                  <Link
                    href="mailto:ceo.office@gmail.com"
                    className="text-xs md:text-sm text-[#C6C6C6] hover:text-white transition-colors"
                  >
                    ceo.office<br />@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D97B4D]/10 border border-[rgba(217,123,77,0.15)] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#D97B4D]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#8A918E] uppercase tracking-wider font-medium mb-1">
                    Phone
                  </p>
                  <p className="text-xs md:text-sm text-[#C6C6C6]">+91 8008253003</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D97B4D]/10 border border-[rgba(217,123,77,0.15)] flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4 text-[#D97B4D]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#8A918E] uppercase tracking-wider font-medium mb-1">
                    Website
                  </p>
                  <Link
                    href="https://next360.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm text-[#C6C6C6] hover:text-white transition-colors"
                  >
                    next360.in
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D97B4D]/10 border border-[rgba(217,123,77,0.15)] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#D97B4D]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#8A918E] uppercase tracking-wider font-medium mb-1">
                    Location
                  </p>
                  <p className="text-xs md:text-sm text-[#C6C6C6]">
                    Karimnagar, Telangana<br />India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
