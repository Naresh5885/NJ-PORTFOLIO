"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Code2, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Profiles() {
  const codingProfiles = [
    {
      name: "GitHub",
      handle: "@Naresh5885",
      icon: <Github size={32} />,
      accentColor: "group-hover:border-white/50",
      btnColor: "bg-white text-black hover:bg-primary hover:text-white",
      description: "Host for open-source AI projects, RAG systems, and FastAPI automation repositories.",
      url: profile.socials.github,
      stats: [
        { label: "Repositories", value: "15+" },
        { label: "Contributions", value: "117+" }
      ]
    },
    {
      name: "LinkedIn",
      handle: "Nareshkumar J",
      icon: <Linkedin size={32} />,
      accentColor: "group-hover:border-[#0A66C2]/60",
      btnColor: "bg-[#0A66C2] text-white hover:bg-white hover:text-black",
      description: "Professional profile sharing AI/ML career milestones, articles, and industry connections.",
      url: profile.socials.linkedin,
      stats: [
        { label: "Connections", value: "500+" },
        { label: "Status", value: "AIML Intern" }
      ]
    },
    {
      name: "LeetCode",
      handle: "@Naresh10k",
      icon: <Code2 size={32} />,
      accentColor: "group-hover:border-[#FFA116]/60",
      btnColor: "bg-[#FFA116] text-black hover:bg-white hover:text-black",
      description: "Algorithmic problem-solving in Python & Java, demonstrating data structures and DSA proficiency.",
      url: profile.socials.leetcode,
      stats: [
        { label: "Problems Solved", value: "102" },
        { label: "Submissions", value: "213+" }
      ]
    }
  ];

  return (
    <section id="profiles" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-20">
          <span className="text-primary font-subheading text-xs tracking-widest uppercase font-bold mb-3 block">
            // ONLINE PRESENCE & CODE METRICS
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-8xl tracking-tighter"
          >
            CODING <span className="text-primary">PROFILES</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {codingProfiles.map((item, idx) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              whileHover={{ y: -8 }}
              className={`glass rounded-[36px] p-8 border border-white/10 ${item.accentColor} transition-all duration-500 group flex flex-col justify-between shadow-xl`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-subheading text-xs tracking-widest text-gray-400">
                    {item.handle}
                  </span>
                </div>
                
                <h3 className="font-heading text-4xl mb-3 text-white">{item.name}</h3>
                <p className="text-gray-300 font-body text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 mb-8">
                  {item.stats.map(s => (
                    <div key={s.label}>
                      <div className="font-heading text-2xl text-white">{s.value}</div>
                      <div className="text-gray-400 text-[10px] font-subheading tracking-widest uppercase">{s.label}</div>
                    </div>
                  ))}
                </div>

                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Visit ${item.name} profile`}
                  className={`w-full py-4 rounded-full font-subheading text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${item.btnColor}`}
                >
                  Visit Profile <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
