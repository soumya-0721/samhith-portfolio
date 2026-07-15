import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TechLogos } from "@/components/sections/TechLogos";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Featured } from "@/components/sections/Featured";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { GridPattern } from "@/components/ui/grid-pattern";
import { TechOverlay } from "@/components/ui/tech-overlay";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Global Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <GridPattern 
             width={50}
             height={50}
             x={-1}
             y={-1}
             className={cn(
                 "h-full w-full stroke-white/[0.02] fill-transparent", 
                 "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]"
             )}
          />
      </div>

      <TechOverlay />

      <div className="relative z-10">
          <Navbar />
          <Hero />
          <TechLogos />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Featured />
          <FAQ />
          <Contact />
          <Footer />
      </div>
    </main>
  );
}
