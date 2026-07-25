"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Github, Linkedin, CheckCircle, Loader2 } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/naresh2357k@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `New Portfolio Message from ${name}`
        })
      });

      if (res.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // Fallback to mailto link
        window.location.href = `mailto:${profile.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
        setSubmitted(true);
      }
    } catch {
      window.location.href = `mailto:${profile.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 7000);
    }
  };

  const contactCards = [
    {
      title: "Email",
      value: profile.email,
      icon: <Mail size={22} className="text-primary" />,
      href: `mailto:${profile.email}`
    },
    {
      title: "Location",
      value: profile.location,
      icon: <MapPin size={22} className="text-primary" />,
      href: "#"
    },
    {
      title: "GitHub",
      value: "@Naresh5885",
      icon: <Github size={22} className="text-primary" />,
      href: profile.socials.github
    },
    {
      title: "LinkedIn",
      value: "Nareshkumar J",
      icon: <Linkedin size={22} className="text-primary" />,
      href: profile.socials.linkedin
    }
  ];

  return (
    <section id="contact" className="py-32 relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Title & Contact Cards Grid */}
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-subheading text-xs tracking-widest uppercase font-bold mb-3 block"
            >
              // GET IN TOUCH
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-12"
            >
              LET'S <br /> <span className="text-primary">BUILD</span> <br /> SOMETHING.
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactCards.map((card, idx) => (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass p-5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-4 group-hover:border-primary/40 transition-colors">
                    {card.icon}
                  </div>
                  <div>
                    <div className="font-subheading text-[10px] tracking-widest text-gray-400 uppercase font-bold mb-1">
                      {card.title}
                    </div>
                    <div className="font-subheading text-sm text-white font-semibold group-hover:text-primary transition-colors truncate">
                      {card.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-[36px] border border-white/10 shadow-2xl"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle size={32} />
                </div>
                <h3 className="font-heading text-3xl text-white">Message Sent!</h3>
                <p className="text-gray-300 font-body text-sm max-w-sm mx-auto">
                  Your message has been sent directly to <strong>naresh2357k@gmail.com</strong>. I will reply to your email shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="font-subheading text-xs tracking-widest text-white font-bold block">
                    NAME <span className="text-primary">*</span>
                  </label>
                  <input 
                    id="contact-name"
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    minLength={2}
                    maxLength={50}
                    className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-primary transition-all placeholder:text-gray-500"
                    placeholder="Your Name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="font-subheading text-xs tracking-widest text-white font-bold block">
                    EMAIL <span className="text-primary">*</span>
                  </label>
                  <input 
                    id="contact-email"
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-primary transition-all placeholder:text-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="font-subheading text-xs tracking-widest text-white font-bold block">
                    MESSAGE <span className="text-primary">*</span>
                  </label>
                  <textarea 
                    id="contact-message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    minLength={10}
                    rows={4}
                    className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-primary transition-all placeholder:text-gray-500 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  aria-label="Send Message"
                  className="w-full group relative flex justify-center items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-subheading text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-xl overflow-hidden disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? (
                      <>
                        Sending... <Loader2 size={16} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
