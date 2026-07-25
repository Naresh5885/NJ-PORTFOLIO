"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import { X, Github, ArrowUpRight, CheckCircle2, ShieldAlert, Cpu, Lightbulb, Layers } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const hasDemo = project.links.demo && project.links.demo !== "#" && project.links.demo !== "";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0c0c0c] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
          >
            <X size={20} />
          </button>

          {/* Header Badge & Title */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 font-subheading text-xs tracking-wider uppercase font-bold">
              {project.status}
            </span>
            <span className="text-gray-400 font-subheading text-xs tracking-widest uppercase">
              // PROJECT DETAILS
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl text-white mb-2 tracking-tight">
            {project.title}
          </h2>
          <p className="text-primary font-subheading text-sm sm:text-base font-bold tracking-wide mb-8 uppercase">
            {project.shortDescription}
          </p>

          {/* Main Description */}
          <div className="glass p-6 rounded-2xl border border-white/10 mb-8">
            <h3 className="font-heading text-xl text-white mb-2 flex items-center gap-2">
              <Cpu size={20} className="text-primary" /> Overview & Objective
            </h3>
            <p className="text-gray-300 font-body text-sm sm:text-base leading-relaxed mb-4">
              {project.details.overview}
            </p>
            <p className="text-gray-400 font-body text-sm leading-relaxed italic">
              <strong>Objective:</strong> {project.details.objective}
            </p>
          </div>

          {/* Problem vs Solution */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass p-6 rounded-2xl border border-red-500/20 bg-red-950/10">
              <h4 className="font-heading text-lg text-red-400 mb-3 flex items-center gap-2">
                <ShieldAlert size={18} /> Problem Statement
              </h4>
              <p className="text-gray-300 font-body text-sm leading-relaxed">
                {project.details.problem}
              </p>
            </div>

            <div className="glass p-6 rounded-2xl border border-emerald-500/20 bg-emerald-950/10">
              <h4 className="font-heading text-lg text-emerald-400 mb-3 flex items-center gap-2">
                <Lightbulb size={18} /> Technical Solution
              </h4>
              <p className="text-gray-300 font-body text-sm leading-relaxed">
                {project.details.solution}
              </p>
            </div>
          </div>

          {/* Features & Architecture */}
          <div className="space-y-6 mb-8">
            <div>
              <h4 className="font-heading text-xl text-white mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-primary" /> Key Features
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map(f => (
                  <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-200">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading text-xl text-white mb-3 flex items-center gap-2">
                <Layers size={20} className="text-primary" /> Architecture Flow
              </h4>
              <div className="p-4 rounded-xl bg-black border border-white/10 font-subheading text-xs sm:text-sm text-gray-300 tracking-wide leading-relaxed">
                {project.details.architecture}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h5 className="font-heading text-base text-white mb-2">Challenges Faced</h5>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{project.details.challenges}</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h5 className="font-heading text-base text-white mb-2">What I Learned</h5>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{project.details.learned}</p>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h4 className="font-subheading text-xs tracking-widest uppercase text-gray-400 mb-3 font-bold">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3.5 py-1.5 rounded-lg bg-black border border-white/15 text-white font-subheading text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full font-subheading text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-all shadow-lg"
            >
              <Github size={18} /> View GitHub Repository
            </a>

            {hasDemo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-primary text-primary px-6 py-3.5 rounded-full font-subheading text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-all shadow-lg"
              >
                Live Demo <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
