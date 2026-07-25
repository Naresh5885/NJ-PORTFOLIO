"use client";

import { profile } from "@/data/profile";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "AI Expertise", href: "#ai-expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="border-t border-white/10 bg-[#050505] relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[100px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <a href="#home" className="text-4xl font-heading tracking-widest text-white hover:text-primary transition-colors flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_#FF2D2D]"></div>
              NARESHKUMAR J
            </a>
            <p className="text-gray-400 font-body text-sm leading-relaxed max-w-md mb-6">
              Artificial Intelligence & Machine Learning Engineer crafting intelligent, automated systems with Python, FastAPI, TensorFlow, RAG, and AWS Cloud.
            </p>
            <div className="flex gap-4">
              <a 
                href={profile.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
              >
                <ArrowUpRight size={18} />
              </a>
              <a 
                href={profile.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4">
            <h3 className="font-subheading text-xs tracking-widest uppercase font-bold text-primary mb-4">
              QUICK NAVIGATION
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {quickLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 font-subheading text-xs tracking-wider hover:text-white transition-colors"
                >
                  ▹ {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="lg:col-span-3 flex lg:justify-end items-start">
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/10 transition-all"
            >
              <span className="font-subheading text-xs tracking-widest uppercase font-bold text-white group-hover:text-primary transition-colors">
                Back To Top
              </span>
              <div className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-subheading text-gray-400 tracking-wider">
          <p>
            © {currentYear} NARESHKUMAR J. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-500">
            DESIGNED & DEVELOPED BY NARESHKUMAR J
          </p>
        </div>

      </div>
    </footer>
  );
}
