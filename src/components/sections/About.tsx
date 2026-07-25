"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Bot, Cloud, Brain } from "lucide-react";

export default function About() {
  const infoCards = [
    {
      title: "AI & Machine Learning",
      icon: <Bot className="text-primary" size={28} />,
      description: "Hands-on experience developing intelligent applications, predictive modeling, and computer vision algorithms."
    },
    {
      title: "Cloud & Automation",
      icon: <Cloud className="text-primary" size={28} />,
      description: "Experience with AWS cloud infrastructure, Linux server management, Docker containerization, and deployment workflows."
    },
    {
      title: "Generative AI",
      icon: <Brain className="text-primary" size={28} />,
      description: "Building production-grade applications leveraging LLMs, RAG vector retrieval, NLP pipelines, and FastAPI endpoints."
    }
  ];

  return (
    <section id="about" className="py-32 relative min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass p-8 md:p-16 lg:p-20 rounded-[36px]"
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6">
              <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-heading text-4xl md:text-6xl mb-8 tracking-tighter"
              >
                THE <span className="text-primary">ENGINEER</span> BEHIND THE INTELLIGENCE
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <p className="font-body text-base md:text-lg text-gray-200 leading-relaxed font-medium">
                  {profile.aboutText.join(" ")}
                </p>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {profile.languages?.map(lang => (
                    <span key={lang} className="px-4 py-2 border border-[#252525] bg-[#141414] rounded-full text-xs uppercase font-subheading text-white font-bold tracking-widest">
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Information Cards */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              {infoCards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="glass p-6 md:p-7 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                      {card.icon}
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl text-white group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 font-body text-sm leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
