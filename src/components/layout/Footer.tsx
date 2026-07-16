"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Leaf, ArrowUpRight } from "lucide-react";
import { useLenis } from "lenis/react";

const footerLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "NEXT360", href: "#next360" },
  { name: "Ventures", href: "#ventures" },
  { name: "Impact", href: "#impact" },
  { name: "Achievements", href: "#achievements" },
  { name: "Vision 2030", href: "#vision2030" },
  { name: "Insights", href: "#insights" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const lenis = useLenis();

  const handleScroll = (href: string) => {
    if (href === "#") {
      lenis?.scrollTo(0);
    } else {
      const element = document.querySelector(href);
      if (element) {
        lenis?.scrollTo(element as HTMLElement, { offset: -100 });
      }
    }
  };

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.05)] bg-[#08140D] py-12 md:py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-[#4E8F57]" />
              <span className="text-base font-bold text-white">
                <span className="text-gradient-accent">SR.</span>
              </span>
            </div>
            <p className="text-sm text-[#8A918E] max-w-xs leading-relaxed">
              Building India&apos;s trusted organic commerce infrastructure through technology,
              transparency, and sustainability.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-5">
            <h4 className="text-xs font-bold text-[#8A918E] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(link.href);
                  }}
                  className="text-sm text-[#C6C6C6] hover:text-white transition-colors flex items-center gap-1 group w-fit"
                >
                  {link.name}
                  <ArrowUpRight className="w-3 h-3 text-[#8A918E] opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Social Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-[#8A918E] uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="https://github.com/samhithreddysangam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#C6C6C6] hover:text-white transition-colors group"
              >
                <Github className="w-4 h-4" />
                GitHub
                <ArrowUpRight className="w-3 h-3 text-[#8A918E] group-hover:text-[#D97B4D] transition-colors" />
              </Link>
              <Link
                href="https://linkedin.com/in/samhithreddysangam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#C6C6C6] hover:text-white transition-colors group"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
                <ArrowUpRight className="w-3 h-3 text-[#8A918E] group-hover:text-[#D97B4D] transition-colors" />
              </Link>
              <Link
                href="mailto:ceo.office@gmail.com"
                className="flex items-center gap-2 text-sm text-[#C6C6C6] hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4" />
                Email
                <ArrowUpRight className="w-3 h-3 text-[#8A918E] group-hover:text-[#D97B4D] transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8A918E]">
            &copy; {currentYear} Samhith Reddy Sangam. All rights reserved.
          </p>
          <p className="text-xs text-[#8A918E]">
            Built with purpose in India
          </p>
        </div>
      </div>
    </footer>
  );
}
