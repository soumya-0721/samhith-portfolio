"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

const navLinks = [
  { name: "Home", href: "#hero" }, // Changed to specific ID if Hero has one, or top
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Work", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Honors", href: "#achievements" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const lenis = useLenis();

  // Handle Smooth Scroll
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
        lenis?.scrollTo(0);
    } else {
        const element = document.querySelector(href);
        if (element) {
            lenis?.scrollTo(element as HTMLElement, { offset: -100 }); // Offset for sticky headers
        }
    }
  };

  // Active Section Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -35% 0px" } // Adjust for better trigger
    );

    navLinks.forEach((link) => {
      if (link.href !== "#") {
        const element = document.querySelector(link.href);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-6 inset-x-0 max-w-5xl mx-auto z-50 px-6 pointer-events-none text-sm">
       <div className="flex items-center justify-center md:justify-between pointer-events-auto">
           {/* Logo Pill - Hidden on small mobile to save space */}
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="hidden md:flex bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 text-white font-semibold shadow-xl shadow-black/20"
           >
              SR.
           </motion.div>

           {/* Center Links Pill */}
           <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-1 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-xl shadow-black/20 overflow-x-auto max-w-[90vw] no-scrollbar"
           >
              {navLinks.map((link) => {
                  const isActive = activeSection === link.href || (link.href === "#" && activeSection === "");
                  return (
                    <a 
                        key={link.name} 
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className={cn(
                            "relative px-4 py-2 rounded-full transition-all duration-300 font-medium whitespace-nowrap",
                            isActive ? "text-white bg-white/10" : "text-neutral-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {link.name}
                        {isActive && (
                            <motion.div
                                layoutId="active-nav"
                                className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </a>
                  );
              })}
           </motion.nav>

           {/* Contact Button (Right) */}
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="hidden md:block"
           >
              <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-semibold hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5"
              >
                 Contact
                 <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
           </motion.div>
       </div>
    </div>
  );
}
