"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ArrowUpRight, Github, Image as ImageIcon, Sparkles } from "lucide-react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featured = projects[0];
  const others = projects.slice(1);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-heading text-[12vw] md:text-9xl mb-24 tracking-tighter text-center"
        >
          SELECTED <span className="text-primary">WORKS</span>
        </motion.h2>

        {/* Featured Project Card */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 relative group cursor-pointer"
          onClick={() => setSelectedProject(featured)}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="text-primary font-subheading text-xs tracking-widest uppercase font-bold">FEATURED PROJECT</div>
            <span className="px-3.5 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 font-subheading text-xs tracking-wider uppercase font-bold">
              {featured.status}
            </span>
          </div>

          <div className="glass rounded-[40px] p-2 overflow-hidden hover:border-primary/50 transition-colors duration-700 shadow-2xl hover:shadow-[0_0_40px_rgba(255,45,45,0.15)]">
            <div className="relative h-[60vh] md:h-[70vh] rounded-[32px] overflow-hidden bg-[#0a0a0a]">
              
              {/* Image / Fallback Container */}
              <div className="absolute inset-0 bg-[#111111] bg-[radial-gradient(circle_at_center,rgba(255,45,45,0.12)_0%,transparent_100%)] group-hover:scale-105 transition-transform duration-1000 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-black/60 border border-white/10 flex items-center justify-center mb-4 backdrop-blur-md group-hover:border-primary/40 transition-colors">
                  <Sparkles size={36} className="text-primary animate-pulse" />
                </div>
                <div className="font-subheading text-sm tracking-widest text-gray-400 uppercase font-medium flex items-center gap-2">
                  <ImageIcon size={16} /> Project Preview
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
              
              <div className="absolute inset-0 z-20 p-8 md:p-16 flex flex-col justify-end">
                <h3 className="font-heading text-4xl sm:text-6xl md:text-8xl mb-2 text-white group-hover:text-primary transition-colors">{featured.title}</h3>
                <h4 className="text-primary font-subheading text-xs md:text-base mb-4 tracking-wider uppercase font-bold">{featured.shortDescription}</h4>
                <p className="text-gray-300 max-w-2xl text-base md:text-xl mb-8 leading-relaxed font-medium line-clamp-3">
                  {featured.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-8">
                  {featured.technologies.map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full bg-black/70 backdrop-blur-md text-white font-subheading text-xs border border-white/15 shadow-lg">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(featured); }}
                    className="px-6 py-3.5 rounded-full bg-primary text-black font-subheading text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-lg"
                  >
                    View Details & Architecture
                  </button>

                  <a 
                    href={featured.links.github} 
                    onClick={e => e.stopPropagation()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="View Source Code"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  >
                    <Github size={20} />
                  </a>

                  {featured.links.demo && featured.links.demo !== "#" && featured.links.demo !== "" && (
                    <a 
                      href={featured.links.demo} 
                      onClick={e => e.stopPropagation()} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Live Demo"
                      className="w-12 h-12 rounded-full border border-primary/50 bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {others.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative h-full"
            >
              <div 
                onClick={() => setSelectedProject(project)} 
                className="glass p-2 rounded-[36px] overflow-hidden hover:border-primary/50 transition-all duration-500 cursor-pointer h-full flex flex-col shadow-xl hover:shadow-[0_0_30px_rgba(255,45,45,0.1)]"
              >
                
                {/* Image / Fallback Container */}
                <div className="relative h-64 rounded-[28px] overflow-hidden mb-6 bg-[#0a0a0a]">
                  <div className="absolute inset-0 bg-[#111111] bg-[radial-gradient(circle_at_top_right,rgba(255,45,45,0.08)_0%,transparent_70%)] group-hover:scale-105 transition-transform duration-700 flex flex-col items-center justify-center p-6 text-center">
                    <Sparkles size={28} className="text-primary opacity-60 mb-2" />
                    <div className="font-subheading text-xs tracking-widest text-gray-500 uppercase font-medium flex items-center gap-1.5">
                      <ImageIcon size={14} /> Project Preview
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-black/70 border border-white/10 text-primary font-subheading text-[10px] tracking-wider uppercase font-bold backdrop-blur-md">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="px-6 pb-8 flex-1 flex flex-col">
                  <h3 className="font-heading text-3xl md:text-4xl mb-1 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <h4 className="text-primary font-subheading text-[10px] md:text-xs tracking-widest uppercase font-bold mb-4">{project.shortDescription}</h4>
                  <p className="text-gray-300 line-clamp-3 mb-6 flex-1 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-[#1c1c1c] text-gray-200 font-subheading text-[11px] border border-[#252525]">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 rounded-lg bg-[#1c1c1c] text-gray-400 font-subheading text-[11px] border border-[#252525]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4 mt-auto pt-6 border-t border-[#252525] items-center">
                    <a 
                      href={project.links.github} 
                      onClick={e => e.stopPropagation()} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-primary transition-colors flex items-center gap-2 font-subheading text-xs uppercase tracking-widest font-bold"
                    >
                      <Github size={16} /> Source
                    </a>
                    
                    {project.links.demo && project.links.demo !== "#" && project.links.demo !== "" && (
                      <a 
                        href={project.links.demo} 
                        onClick={e => e.stopPropagation()} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-primary transition-colors flex items-center gap-2 font-subheading text-xs uppercase tracking-widest font-bold ml-auto"
                      >
                        Live Demo <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal View */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
