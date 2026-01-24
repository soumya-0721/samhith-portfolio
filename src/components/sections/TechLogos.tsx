"use client";

import LogoLoop from "@/components/ui/LogoLoop";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFigma,
  SiFlutter,
  SiFirebase,
  SiAmazon
} from "react-icons/si";

const techLogos = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React" },
  { node: <SiNextdotjs className="text-white" />, title: "Next.js" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS" },
  { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js" },
  { node: <SiPython className="text-[#3776AB]" />, title: "Python" },
  { node: <SiFigma className="text-[#F24E1E]" />, title: "Figma" },
  { node: <SiFlutter className="text-[#02569B]" />, title: "Flutter" },
  { node: <SiFirebase className="text-[#FFCA28]" />, title: "Firebase" },
  { node: <SiAmazon className="text-[#FF9900]" />, title: "AWS" },
];

export function TechLogos() {
  return (
    <section className="relative py-8 border-t border-neutral-800/50 bg-transparent overflow-hidden">
      <div className="container px-6 mb-4">
        <p className="text-xs uppercase tracking-widest text-neutral-500 text-center mx-auto">
          Technologies I Work With
        </p>
      </div>
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={32}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#0b0b0b"
        ariaLabel="Technology stack"
      />
    </section>
  );
}

export default TechLogos;
