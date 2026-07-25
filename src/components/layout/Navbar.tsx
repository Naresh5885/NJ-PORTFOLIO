"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "EXPERTISE", href: "#ai-expertise" },
    { name: "PROJECTS", href: "#projects" },
    { name: "JOURNEY", href: "#experience" },
    { name: "PROFILES", href: "#profiles" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Highlight active section
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 300) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="text-2xl font-heading tracking-widest text-white hover:text-primary transition-colors flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#FF2D2D]"></div>
          NJ
        </a>

        {/* Desktop Nav - Floating Glass Pill */}
        <div className={`hidden lg:flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-500 ${
          scrolled ? "bg-[#111111]/80 backdrop-blur-xl border border-[#1C1C1C] shadow-2xl" : "bg-transparent"
        }`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative font-subheading text-xs tracking-[0.2em] text-gray hover:text-white transition-colors"
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 right-0 h-px bg-primary shadow-[0_0_10px_#FF2D2D]"
                />
              )}
            </a>
          ))}
        </div>

        {/* Magnetic CTA */}
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact" 
          className="hidden md:inline-flex px-6 py-2.5 rounded-full border border-[#1C1C1C] text-white font-subheading text-xs tracking-widest uppercase hover:bg-white/5 hover:border-primary hover:shadow-[0_0_20px_rgba(255,45,45,0.2)] transition-all duration-300"
        >
          Let's Talk
        </motion.a>

        {/* Mobile Menu Toggle placeholder */}
        <button className="lg:hidden text-white">
          <div className="w-6 h-px bg-white mb-2"></div>
          <div className="w-6 h-px bg-white"></div>
        </button>

      </div>
    </motion.nav>
  );
}
