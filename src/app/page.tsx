import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Skills from "@/components/sections/Skills";
import AIExpertise from "@/components/sections/AIExpertise";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import AskNareshAI from "@/components/chat/AskNareshAI";
import Profiles from "@/components/sections/Profiles";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Timeline />
      <Skills />
      <AIExpertise />
      <Projects />
      <Certifications />
      <Profiles />
      <Contact />
      <AskNareshAI />
    </main>
  );
}
