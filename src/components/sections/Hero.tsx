"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import BlurText from "@/components/ui/BlurText";
import GradientText from "@/components/ui/GradientText";
import TiltedCard from "@/components/ui/TiltedCard";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24">
      
      {/* Spotlight Effect - CSS Top Light */}
      <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
                 <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6 leading-none flex flex-col items-center lg:items-start gap-1 sm:gap-2">
                    <BlurText 
                        text="Samhithreddy" 
                        delay={100} 
                        animateBy="letters" 
                        direction="top" 
                        className="text-white tracking-tight"
                    />
                    <BlurText 
                        text="Sangam." 
                        delay={100} 
                        animateBy="letters" 
                        direction="top" 
                        className="text-white tracking-tight"
                    />
                 </div>
                 
                 <div className="mb-4 sm:mb-6 lg:mb-8">
                     <GradientText
                        colors={["#60A5FA", "#34D399", "#A78BFA", "#60A5FA"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="text-lg md:text-2xl font-medium"
                     >
                        Founder & CEO @ NEXT 360
                     </GradientText>
                 </div>
                 <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-light">
                    Building products for the future of <span className="text-orange-500 font-medium">Bharath</span>.
                 </p>

                 <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
                     <Link href="#projects" className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors">
                        Explore Work
                     </Link>
                     <Link href="#contact" className="px-8 py-3.5 rounded-full border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-all bg-neutral-900/50 backdrop-blur-sm">
                        Contact Me
                     </Link>
                 </div>
            </motion.div>
            
            {/* Right Column: Tilted Card Image */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center"
            >
                <div className="relative w-[180px] sm:w-[220px] md:w-[260px] aspect-square lg:w-[300px] lg:h-[337px] lg:aspect-auto mt-8 sm:mt-10 lg:mt-0">
                    <TiltedCard
                      imageSrc="/assets/IMG_2069.JPG.jpeg"
                      altText="Samhithreddy Sangam"
                      captionText="Founder & CEO"
                      containerHeight="100%"
                      containerWidth="100%"
                      imageHeight="100%"
                      imageWidth="100%"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={true}
                      overlayContent={
                        <div className="absolute bottom-6 left-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 hidden md:block">
                            <p className="text-white font-bold text-lg">Samhithreddy</p>
                            <p className="text-neutral-300 text-xs">NEXT 360</p>
                        </div>
                      }
                    />
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}
