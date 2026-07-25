"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Network, 
  MessageSquareCode, 
  Sparkles, 
  Cpu, 
  Eye, 
  DatabaseZap, 
  Zap, 
  Flame, 
  Cloud 
} from "lucide-react";

export default function AIExpertise() {
  const domains = [
    {
      title: "Machine Learning",
      icon: <Brain className="text-primary" size={26} />,
      description: "Supervised and unsupervised statistical modeling, regression, and classification algorithms."
    },
    {
      title: "Deep Learning",
      icon: <Network className="text-primary" size={26} />,
      description: "Building and training neural network architectures using CNNs, RNNs, and custom layers."
    },
    {
      title: "Natural Language Processing",
      icon: <MessageSquareCode className="text-primary" size={26} />,
      description: "Text processing, sentiment analysis, entity extraction, and language model fine-tuning."
    },
    {
      title: "Generative AI",
      icon: <Sparkles className="text-primary" size={26} />,
      description: "Creating generative workflows, prompt engineering, and intelligent agent orchestrations."
    },
    {
      title: "Large Language Models",
      icon: <Cpu className="text-primary" size={26} />,
      description: "Integrating and fine-tuning state-of-the-art LLMs for specialized enterprise domain tasks."
    },
    {
      title: "Computer Vision",
      icon: <Eye className="text-primary" size={26} />,
      description: "Real-time facial detection, object tracking, image preprocessing, and feature extraction."
    },
    {
      title: "Retrieval-Augmented Generation",
      icon: <DatabaseZap className="text-primary" size={26} />,
      description: "Vector embedding, semantic search pipelines, and fact-verified document retrieval systems."
    },
    {
      title: "FastAPI",
      icon: <Zap className="text-primary" size={26} />,
      description: "Building high-performance, asynchronous REST API microservices for machine learning models."
    },
    {
      title: "TensorFlow",
      icon: <Flame className="text-primary" size={26} />,
      description: "Model construction, evaluation, and optimizing deep neural network inference."
    },
    {
      title: "AWS Cloud",
      icon: <Cloud className="text-primary" size={26} />,
      description: "Learning cloud deployment workflows, Linux environments, and AWS cloud services for AI applications."
    }
  ];

  return (
    <section id="ai-expertise" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-subheading text-xs tracking-widest uppercase font-bold mb-3 block">
              // DOMAIN SPECIALIZATIONS
            </span>
            <h2 className="font-heading text-5xl md:text-8xl tracking-tighter">
              AI <span className="text-primary">EXPERTISE</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 font-body text-base max-w-md text-right hidden md:block"
          >
            Core technical domains and AI specializations powering intelligent systems.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {domains.map((domain, idx) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between h-full shadow-lg hover:shadow-[0_0_25px_rgba(255,45,45,0.1)]"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-5 group-hover:border-primary/40 group-hover:bg-primary/10 transition-colors">
                  {domain.icon}
                </div>
                <h3 className="font-heading text-xl text-white mb-2 group-hover:text-primary transition-colors">
                  {domain.title}
                </h3>
                <p className="text-gray-400 font-body text-xs leading-relaxed">
                  {domain.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
