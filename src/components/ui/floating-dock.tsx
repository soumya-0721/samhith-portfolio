"use client";

import { cn } from "@/lib/utils";
import { 
  AnimatePresence, 
  MotionValue, 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform 
} from "framer-motion";
import { 
  Home, 
  User, 
  Briefcase, 
  Code, 
  Mail, 
  Github, 
  Linkedin 
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const links = [
  { title: "Home", icon: <Home className="h-full w-full text-neutral-300" />, href: "#" },
  { title: "About", icon: <User className="h-full w-full text-neutral-300" />, href: "#about" },
  { title: "Work", icon: <Briefcase className="h-full w-full text-neutral-300" />, href: "#experience" },
  { title: "Projects", icon: <Code className="h-full w-full text-neutral-300" />, href: "#projects" },
  { title: "Contact", icon: <Mail className="h-full w-full text-neutral-300" />, href: "#contact" },
  { title: "GitHub", icon: <Github className="h-full w-full text-neutral-300" />, href: "https://github.com/samhithreddysangam" },
  { title: "LinkedIn", icon: <Linkedin className="h-full w-full text-neutral-300" />, href: "https://linkedin.com/in/samhithreddysangam" },
];

export function FloatingDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:block">
       <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-16 items-end gap-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 px-4 pb-3 backdrop-blur-md"
      >
        {links.map((link) => (
          <IconContainer mouseX={mouseX} key={link.title} {...link} />
        ))}
      </motion.div>
    </div>
  );
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-neutral-800 flex items-center justify-center relative border border-neutral-700 hover:border-neutral-500 transition-colors"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-neutral-900 border border-neutral-800 text-neutral-200 absolute left-1/2 -top-10 w-fit text-xs hidden sm:block"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex items-center justify-center w-5 h-5">{icon}</div>
      </motion.div>
    </Link>
  );
}
