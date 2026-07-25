"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { Briefcase, GraduationCap, FolderGit2 } from "lucide-react";

export default function Timeline() {
  return (
    <section id="experience" className="py-32 relative min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl relative">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-primary font-subheading text-xs tracking-widest uppercase font-bold mb-3 block">
            // CAREER & ACADEMICS
          </span>
          <h2 className="font-heading text-6xl md:text-9xl tracking-tighter leading-none">
            EXPERIENCE <span className="text-primary">& JOURNEY</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Connecting Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-white/20 to-primary/20 md:-translate-x-1/2"></div>

          {/* Internship Entries */}
          {experience.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between mb-20 last:mb-0 ${isEven ? "md:flex-row-reverse" : ""}`}>
                
                {/* Center Icon Node */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute left-[24px] md:left-1/2 w-12 h-12 rounded-full bg-black border-2 border-primary text-primary flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(255,45,45,0.4)]"
                >
                  <Briefcase size={20} />
                </motion.div>

                {/* Empty Space for offset */}
                <div className="hidden md:block md:w-5/12"></div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="w-full md:w-5/12 ml-[70px] md:ml-0 glass p-8 rounded-3xl group border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-xl"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 font-subheading text-[10px] tracking-wider uppercase font-bold flex items-center gap-1.5">
                      <Briefcase size={12} /> Internship
                    </span>
                    <span className="text-gray-400 font-subheading text-xs tracking-wider">
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl text-white mb-1">{exp.role}</h3>
                  <h4 className="font-subheading text-gray-300 text-sm mb-6 font-semibold">{exp.company}</h4>
                  
                  <ul className="space-y-3">
                    {exp.responsibilities.map((desc, i) => (
                      <li key={i} className="text-gray-300 text-sm leading-relaxed flex gap-3 font-medium">
                        <span className="text-primary shrink-0 font-bold">▹</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Education Section inside Journey */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-28 pt-24 border-t border-white/10"
        >
          <div className="text-center mb-16">
            <span className="text-primary font-subheading text-xs tracking-widest uppercase font-bold mb-3 block">
              // DEGREES & ACADEMICS
            </span>
            <h2 className="font-heading text-5xl md:text-8xl tracking-tighter">
              ACADEMIC <span className="text-primary">FOUNDATION</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
            {profile.educationList.map((edu, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -6 }}
                className="glass p-8 md:p-10 rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-black border border-primary/40 text-primary flex items-center justify-center shrink-0">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 font-subheading text-[10px] tracking-wider uppercase font-bold flex items-center gap-1.5">
                        <GraduationCap size={12} /> {edu.type}
                      </span>
                      <span className="text-gray-400 font-subheading text-xs">{edu.duration}</span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl text-white mb-1">
                      {edu.degree} {edu.major !== "General Academics" ? `in ${edu.major}` : ""}
                    </h3>
                    <p className="text-gray-300 font-subheading text-sm font-medium">{edu.university}</p>
                  </div>
                </div>

                <div className="px-5 py-2.5 rounded-2xl bg-black border border-white/10 text-primary font-subheading text-sm font-bold tracking-wider shrink-0">
                  {edu.score}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
