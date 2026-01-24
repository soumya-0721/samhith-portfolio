"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Work", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Honors", href: "#achievements" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  // Handle Smooth Scroll for Desktop & Mobile
  const handleScroll = (href: string) => {
    setIsMobileMenuOpen(false); // Close menu on click
    if (href === "#") {
        lenis?.scrollTo(0);
    } else {
        const element = document.querySelector(href);
        if (element) {
            lenis?.scrollTo(element as HTMLElement, { offset: -100 });
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
      { threshold: 0.2, rootMargin: "-20% 0px -35% 0px" }
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
    <>
      <div className="fixed top-6 inset-x-0 max-w-5xl mx-auto z-50 px-6 pointer-events-none text-sm">
         <div className="flex items-center justify-between pointer-events-auto">
             
             {/* Logo - Always Visible */}
             <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 text-white font-semibold shadow-xl shadow-black/20"
             >
                SR.
             </motion.div>

             {/* Desktop Navigation */}
             <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-xl shadow-black/20"
             >
                {navLinks.map((link) => {
                    const isActive = activeSection === link.href || (link.href === "#" && activeSection === "");
                    return (
                      <a 
                          key={link.name} 
                          href={link.href}
                          onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
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

             {/* Desktop Contact Button */}
             <motion.div
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="hidden md:block"
             >
                <a 
                    href="#contact" 
                    onClick={(e) => { e.preventDefault(); handleScroll("#contact"); }}
                    className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-semibold hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5"
                >
                   Contact
                   <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
             </motion.div>

             {/* Mobile Menu Toggle */}
             <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900/90 backdrop-blur-xl border border-white/10 text-white shadow-xl pointer-events-auto"
             >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
             </motion.button>
         </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
           <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-32 px-6 md:hidden flex flex-col items-center"
           >
              <div className="flex flex-col items-center gap-8 text-center">
                  {navLinks.map((link, idx) => (
                      <motion.a
                         key={link.name}
                         href={link.href}
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.1 + idx * 0.05 }}
                         onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
                         className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                      >
                          {link.name}
                      </motion.a>
                  ))}
                  
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5 }}
                     className="w-full h-[1px] bg-white/10 my-4"
                  />

                  <motion.a
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.6 }}
                     href="#contact"
                     onClick={(e) => { e.preventDefault(); handleScroll("#contact"); }}
                     className="flex items-center gap-2 text-xl font-bold text-white"
                  >
                      Get in Touch <ArrowUpRight className="w-5 h-5" />
                  </motion.a>
              </div>
           </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
