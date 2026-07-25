"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

export default function AskNareshAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "👋 Hi! I'm Naresh's AI Assistant. Ask me anything about his projects, experience, skills, or CGPA!", 
      sender: "ai" 
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("hi") || q.includes("hello") || q.includes("hey")) {
      return `Hello! How can I assist you with Nareshkumar's portfolio today? Feel free to ask about his projects, skills, or education!`;
    }

    if (q.includes("project") || q.includes("work") || q.includes("failureaware") || q.includes("music") || q.includes("biosync")) {
      return `Naresh has built 3 key AI projects:\n\n1. 🤖 FailureAware AI: RAG system with confidence validation.\n2. 🎵 Emotion Music Recommendation: Computer vision & CNN for Spotify playlists.\n3. 📊 BIOSYNC: Automated biometric attendance platform.`;
    }

    if (q.includes("skill") || q.includes("tech") || q.includes("python") || q.includes("stack")) {
      return `Naresh specializes in:\n• AI/ML: Python, TensorFlow, OpenCV, NLP, LLMs, RAG, Prompt Engineering\n• Cloud & Backend: AWS, Linux, FastAPI, Git, Automation\n• Frontend: Next.js, React, HTML, CSS, JavaScript`;
    }

    if (q.includes("intern") || q.includes("experience") || q.includes("job") || q.includes("yobitel")) {
      const exp = experience[0];
      return `Naresh worked as an ${exp.role} at ${exp.company} (${exp.duration}). He gained hands-on experience in Linux systems, AWS Cloud infrastructure, web service deployment, and server management.`;
    }

    if (q.includes("cgpa") || q.includes("education") || q.includes("college") || q.includes("gpa") || q.includes("degree")) {
      return `Naresh is pursuing a ${profile.education.degree} in ${profile.education.major} at ${profile.education.university} (${profile.education.duration}) with a CGPA of ${profile.education.cgpa}.`;
    }

    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("linkedin")) {
      return `You can connect with Naresh via:\n📧 Email: ${profile.email}\n📞 Phone: ${profile.phone}\n🔗 LinkedIn: ${profile.socials.linkedin}\n🐙 GitHub: ${profile.socials.github}`;
    }

    if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
      return `You can download Naresh's official resume directly using the 'DOWNLOAD RESUME' button in the Hero section at the top of the page!`;
    }

    return `Nareshkumar J is an Artificial Intelligence Engineer & ML Developer with a 7.61 CGPA from V.S.B Engineering College. He specializes in LLMs, RAG, Computer Vision, and AWS Cloud!`;
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const aiReply = generateResponse(text);
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: aiReply, sender: "ai" }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-primary text-black shadow-[0_0_30px_rgba(255,45,45,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 ${isOpen ? "hidden" : "flex"} items-center gap-2 font-subheading text-xs tracking-widest uppercase font-bold`}
      >
        <Sparkles size={20} />
        <span>Ask AI</span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 w-80 sm:w-96 bg-[#0a0a0a] border border-[#222222] rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
            style={{ height: '520px' }}
          >
            {/* Header */}
            <div className="bg-[#111111] p-4 flex justify-between items-center border-b border-[#222222]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-heading text-lg tracking-wider text-white">Ask Naresh AI</h3>
                  <p className="text-[10px] text-green-400 font-subheading flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.sender === "ai" 
                      ? "bg-[#141414] text-white border border-[#222222] rounded-tl-none self-start" 
                      : "bg-primary text-black font-medium rounded-tr-none self-end"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="bg-[#141414] text-gray-400 border border-[#222222] p-3 rounded-2xl rounded-tl-none self-start text-xs flex items-center gap-2">
                  <span className="animate-bounce">●</span>
                  <span className="animate-bounce delay-100">●</span>
                  <span className="animate-bounce delay-200">●</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Action Chips */}
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto hide-scrollbar">
              {["Projects", "Skills", "Internship", "Education"].map((q) => (
                <button 
                  key={q} 
                  onClick={() => handleSend(q)} 
                  className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full border border-[#222222] bg-[#111111] hover:bg-primary/20 hover:text-primary hover:border-primary/40 transition-all text-gray-300"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-[#111111] border-t border-[#222222]">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex items-center gap-2"
              >
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about projects, CGPA, skills..." 
                  className="flex-grow bg-[#1a1a1a] border border-[#252525] rounded-full px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-500"
                />
                <button 
                  type="submit" 
                  className="p-2.5 rounded-full bg-primary text-black hover:bg-white transition-colors"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
