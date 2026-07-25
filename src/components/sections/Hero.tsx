"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/profile";
import { ArrowUpRight, Download, CheckCircle2, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Mouse parallax state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden" id="home">
      
      {/* Background Red Ambient Radial Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"></div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
      >
        
        {/* Left Content - Reference Style Typography */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-subheading tracking-[0.3em] uppercase text-xs md:text-sm font-bold flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-primary"></span>
              HELLO! I'M
            </span>
            
            <h1 className="font-heading text-6xl sm:text-8xl lg:text-8xl xl:text-9xl 2xl:text-[110px] leading-[0.88] tracking-tight text-white mb-6">
              NARESHKUMAR<span className="text-primary">.J</span>
            </h1>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-4xl xl:text-5xl text-gray-100 tracking-wide mb-6">
              AI <span className="text-primary font-body">&</span> Machine Learning Student
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 font-body text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            {profile.heroSubtitle}
          </motion.p>

          {/* Reference Style Bullet Points */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col gap-3.5 my-3 text-base md:text-lg text-gray-200 font-subheading font-medium"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-primary shrink-0" />
              <span>Machine Learning, Deep Learning & Computer Vision</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-primary shrink-0" />
              <span>Generative AI, RAG & LLM Workflows</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-primary shrink-0" />
              <span>AWS Cloud Infrastructure & Intelligent Automation</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap items-center gap-3 mt-6"
          >
            <a 
              href="/Nareshkumar_J_Resume.pdf.pdf" 
              download="Nareshkumar_J_Resume.pdf" 
              className="group flex items-center gap-2 bg-primary text-black px-6 py-3.5 rounded-full font-subheading text-xs tracking-widest uppercase font-bold hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(255,45,45,0.4)]"
            >
              <Download size={15} className="group-hover:translate-y-0.5 transition-transform duration-300" />
              Download Resume (PDF)
            </a>

            <a 
              href="/Nareshkumar_J_Resume.pdf.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border border-primary/50 bg-primary/10 text-primary px-6 py-3.5 rounded-full font-subheading text-xs tracking-widest uppercase font-bold hover:bg-primary hover:text-black transition-all duration-300 shadow-md"
            >
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              View Resume
            </a>

            <a 
              href="#projects" 
              className="group flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md text-white px-6 py-3.5 rounded-full font-subheading text-xs tracking-widest uppercase font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              View Projects
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>

            <a 
              href={profile.socials.github} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group flex items-center gap-2 border border-[#222222] bg-[#0c0c0c] text-white px-5 py-3.5 rounded-full font-subheading text-xs tracking-widest uppercase font-medium hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Github size={15} />
              GitHub
            </a>

            <a 
              href={profile.socials.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group flex items-center gap-2 border border-[#222222] bg-[#0c0c0c] text-white px-5 py-3.5 rounded-full font-subheading text-xs tracking-widest uppercase font-medium hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all duration-300"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </motion.div>

        </div>

        {/* Right Content - Reference Arch Frame */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ 
              x: mousePosition.x * -1, 
              y: mousePosition.y * -1 
            }}
            className="relative w-[300px] sm:w-[350px] lg:w-[360px] xl:w-[400px] h-[460px] sm:h-[520px] lg:h-[540px] xl:h-[580px]"
          >
            {/* Arch Background Glow Effect */}
            <div className="absolute inset-0 bg-primary/30 rounded-t-[200px] rounded-b-[40px] blur-[30px] -z-10"></div>

            {/* Arch Container Frame */}
            <div className="w-full h-full rounded-t-[200px] rounded-b-[40px] p-[2px] bg-gradient-to-b from-primary/60 via-primary/20 to-[#1c1c1c] shadow-[0_0_60px_rgba(255,45,45,0.25)] relative overflow-hidden">
              
              <div className="w-full h-full rounded-t-[198px] rounded-b-[38px] bg-[#090909] overflow-hidden relative">
                <img 
                  src="/api/profile-image" 
                  onError={(e) => { (e.target as HTMLImageElement).src = "/profile.jpg"; }}
                  alt={profile.name} 
                  className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700" 
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                {/* Bottom Banner Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] py-2.5 px-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-center">
                  <span className="text-[11px] font-subheading tracking-[0.2em] text-white uppercase font-medium">
                    AI / ML STUDENT
                  </span>
                </div>
              </div>

            </div>

            {/* Reference Style Floating Badge Chips attached to Arch Edges */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute top-16 -right-4 bg-black/80 backdrop-blur-md border border-primary/40 px-3.5 py-1.5 rounded-full text-[10px] font-subheading tracking-widest text-white flex items-center gap-1.5 shadow-xl z-20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              AI & RAG
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute top-1/2 -left-6 bg-black/80 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-[10px] font-subheading tracking-widest text-white flex items-center gap-1.5 shadow-xl z-20"
            >
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              AWS CLOUD
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              className="absolute bottom-24 -right-4 bg-black/80 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-[10px] font-subheading tracking-widest text-white flex items-center gap-1.5 shadow-xl z-20"
            >
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              LLM LAB
            </motion.div>

          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
