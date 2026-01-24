import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-900 py-12 text-sm z-50 relative">
      <div className="container mx-auto px-6 max-w-[1400px] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-neutral-500 font-medium">
             &copy; {currentYear} Samhithreddy Sangam. All rights reserved.
          </div>

          <div className="flex items-center gap-8">
             <Link href="https://github.com/samhithreddysangam" target="_blank" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
                 <Github className="w-4 h-4" />
                 <span className="hidden md:inline">GitHub</span>
             </Link>
             <Link href="https://linkedin.com/in/samhithreddysangam" target="_blank" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
                 <Linkedin className="w-4 h-4" />
                 <span className="hidden md:inline">LinkedIn</span>
             </Link>
             <Link href="mailto:samhithreddysangam@gmail.com" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
                 <Mail className="w-4 h-4" />
                 <span className="hidden md:inline">Email</span>
             </Link>
          </div>
      </div>
    </footer>
  );
}
