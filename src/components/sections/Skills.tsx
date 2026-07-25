"use client";

import { motion } from "framer-motion";
import { skillCategories, SkillCategory } from "@/data/skills";
import { Code2, Brain, Cloud, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="text-primary" size={28} />;
      case "Brain":
        return <Brain className="text-primary" size={28} />;
      case "Cloud":
        return <Cloud className="text-primary" size={28} />;
      default:
        return <Code2 className="text-primary" size={28} />;
    }
  };

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-subheading text-xs tracking-widest uppercase font-bold mb-3 block">
              // TECHNICAL ARSENAL
            </span>
            <h2 className="font-heading text-5xl md:text-8xl tracking-tighter">
              TECHNICAL <span className="text-primary">SKILLS</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-md text-base text-right hidden md:block"
          >
            Clean, curated stack of programming languages, AI/ML models, and cloud automation tools.
          </motion.p>
        </div>

        {/* 3 Core Category Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((cat: SkillCategory, idx: number) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass p-8 md:p-10 rounded-[36px] border border-white/10 hover:border-primary/50 transition-all duration-500 flex flex-col justify-between shadow-2xl hover:shadow-[0_0_35px_rgba(255,45,45,0.12)] group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/40 group-hover:bg-primary/10 transition-colors">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <span className="text-primary font-subheading text-[10px] tracking-widest uppercase font-bold block mb-1">
                      CATEGORY 0{idx + 1}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl text-white group-hover:text-primary transition-colors leading-tight">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 font-body text-xs leading-relaxed mb-8">
                  {cat.description}
                </p>

                {/* Skills Badge Container */}
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/10">
                  {cat.skills.map((skill: string) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-xl bg-black/60 border border-white/10 text-white font-subheading text-xs font-semibold tracking-wide flex items-center gap-2 hover:border-primary/60 hover:text-primary transition-all shadow-md"
                    >
                      <CheckCircle2 size={13} className="text-primary shrink-0" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
