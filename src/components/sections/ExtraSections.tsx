"use client";

import { motion } from "framer-motion";
import { Quote, Search, BookOpen, GitPullRequest, Code, HelpCircle } from "lucide-react";

export default function ExtraSections() {
  const placeholders = [
    { title: "Services", icon: <Code />, text: "AI consulting, custom ML model development, and automated workflows." },
    { title: "Testimonials", icon: <Quote />, text: "\"Nareshkumar is an exceptional AI engineer who delivered beyond expectations.\" - Placeholder Client" },
    { title: "Open Source", icon: <GitPullRequest />, text: "Actively contributing to popular machine learning repositories and libraries." },
    { title: "Research", icon: <Search />, text: "Currently researching efficient RAG pipelines for low-latency enterprise environments." },
    { title: "Blog", icon: <BookOpen />, text: "Writing about Large Language Models, prompt engineering, and the future of AI." },
    { title: "FAQ", icon: <HelpCircle />, text: "Q: Are you available for freelance work? A: Yes, please reach out via the contact form." }
  ];

  return (
    <section className="py-20 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl mb-12 text-center text-primary"
        >
          MORE ABOUT ME
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {placeholders.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-primary mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              <h3 className="font-heading text-2xl mb-3">{item.title}</h3>
              <p className="text-gray-400 font-body text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
