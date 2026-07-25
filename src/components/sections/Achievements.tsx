"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Achievements() {
  const stats = [
    { label: "Projects", value: profile.stats.projects },
    { label: "Internship", value: profile.stats.internship },
    { label: "Certifications", value: profile.stats.certifications },
    { label: "CGPA", value: profile.stats.cgpa },
  ];

  return (
    <section className="py-20 relative border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <span className="font-heading text-5xl md:text-6xl text-primary mb-2 glow-primary drop-shadow-[0_0_15px_rgba(0,242,254,0.5)]">
                {stat.value}
              </span>
              <span className="font-subheading text-muted uppercase tracking-widest text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
