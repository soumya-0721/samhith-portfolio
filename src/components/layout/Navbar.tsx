"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
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
  { name: "Gallery", href: "/gallery" },
];

export function Navbar() {
  const pathname = usePathname();
  const isGallery = pathname === "/gallery";
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/gallery") return "/gallery";
      const hash = window.location.hash;
      if (hash) return hash;
    }
    return "#hero";
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  // Sync active state with route changes
  useEffect(() => {
    if (isGallery) {
      setActiveSection("/gallery");
    } else {
      const hash = window.location.hash;
      if (hash) setActiveSection(hash);
    }
  }, [pathname, isGallery]);

  // Handle Smooth Scroll for Desktop & Mobile
  const handleScroll = useCallback((href: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(href);
    if (href.startsWith("/")) {
      // Route navigation — handled by Link/anchor default
      return;
    }
    if (href === "#") {
        lenis?.scrollTo(0);
    } else {
        const element = document.querySelector(href);
        if (element) {
            lenis?.scrollTo(element as HTMLElement, { offset: -100 });
        }
    }
  }, [lenis]);

  // Listen for hash changes (e.g. browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) setActiveSection(hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Active Section Observer (fallback for scroll-based detection)
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
      if (link.href !== "#" && !link.href.startsWith("/")) {
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
               className="bg-[#FFF8F0] backdrop-blur-xl border border-[#D9CBBE] rounded-full px-5 py-2.5 text-[#263129] font-semibold shadow-xl shadow-black/10"
             >
                <span className="text-gradient-accent">SR.</span>
             </motion.div>

             {/* Desktop Navigation */}
             <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="hidden md:flex items-center gap-1 bg-[#FFF8F0] backdrop-blur-xl border border-[#D9CBBE] rounded-full p-1.5 shadow-xl shadow-black/10"
             >
                {navLinks.map((link) => {
                    const isRoute = link.href.startsWith("/");
                    const isActive = isRoute
                      ? pathname === link.href
                      : activeSection === link.href || (link.href === "#" && activeSection === "");
                    return isRoute ? (
                      <Link
                          key={link.name}
                          href={link.href}
                          className={cn(
                              "relative px-3 py-2 rounded-full transition-all duration-300 text-xs font-medium whitespace-nowrap",
                              isActive ? "text-[#263129] bg-[#E3D8CC]" : "text-[#62665F] hover:text-[#263129] hover:bg-[#E8DCCE]"
                          )}
                      >
                          {link.name}
                          {isActive && (
                              <motion.div
                                  layoutId="active-nav"
                                  className="absolute inset-0 bg-[#E3D8CC] rounded-full -z-10"
                                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                          )}
                      </Link>
                    ) : (
                      <a 
                          key={link.name} 
                          href={link.href}
                          onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
                          className={cn(
                              "relative px-3 py-2 rounded-full transition-all duration-300 text-xs font-medium whitespace-nowrap",
                              isActive ? "text-[#263129] bg-[#E3D8CC]" : "text-[#62665F] hover:text-[#263129] hover:bg-[#E8DCCE]"
                          )}
                      >
                          {link.name}
                          {isActive && (
                              <motion.div
                                  layoutId="active-nav"
                                  className="absolute inset-0 bg-[#E3D8CC] rounded-full -z-10"
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
                    className="group flex items-center gap-2 bg-[#B66F4A] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#985938] transition-colors shadow-lg shadow-[#B66F4A]/20"
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
                className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-[#E8DCCE] backdrop-blur-xl border border-[#D9CBBE] text-[#263129] shadow-xl pointer-events-auto"
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
              className="fixed inset-0 z-40 bg-[#263129]/95 backdrop-blur-3xl pt-32 px-6 md:hidden flex flex-col items-center"
           >
              <div className="flex flex-col items-center gap-8 text-center">
                  {navLinks.map((link, idx) => {
                    const isRoute = link.href.startsWith("/");
                    return isRoute ? (
                      <motion.div
                         key={link.name}
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.1 + idx * 0.05 }}
                      >
                        <Link
                           href={link.href}
                           className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                           onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                      </motion.div>
                    ) : (
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
                    );
                  })}
                  
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
