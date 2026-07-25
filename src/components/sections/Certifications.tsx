"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="text-center mb-20">
          <span className="text-primary font-subheading text-xs tracking-widest uppercase font-bold mb-3 block">
            // CREDENTIALS & ACCOMPLISHMENTS
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-8xl tracking-tighter"
          >
            VERIFIED <span className="text-primary">EXPERTISE</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => {
            const hasLink = cert.credentialUrl && cert.credentialUrl !== "#" && cert.credentialUrl !== "";

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col justify-between p-8 glass rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(255,45,45,0.1)]"
              >
                {/* Hover indicator accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>

                <div>
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                    <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/40 group-hover:bg-primary/10 transition-colors">
                      <Award size={28} />
                    </div>

                    <div className="flex items-center gap-2">
                      {cert.badge && (
                        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-subheading text-[11px] font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
                          <ShieldCheck size={14} className="text-amber-400" />
                          {cert.badge}
                        </span>
                      )}
                      {cert.date && (
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-subheading text-xs font-semibold text-gray-400">
                          {cert.date}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl text-white mb-2 group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  
                  <p className="font-subheading text-xs tracking-widest uppercase font-bold text-gray-400 mb-4">
                    {cert.issuer}
                  </p>

                  {cert.certId && (
                    <div className="font-subheading text-[11px] text-gray-400 tracking-wider mb-6 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 inline-block">
                      ID: <span className="text-gray-300 font-mono">{cert.certId}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/5">
                  {hasLink ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-subheading uppercase tracking-widest text-primary font-bold hover:text-white transition-colors"
                    >
                      Verify Credential <ExternalLink size={14} />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-xs font-subheading uppercase tracking-widest text-gray-400 font-medium">
                      <ShieldCheck size={14} className="text-primary" /> Verified Government/Industry Standard
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
