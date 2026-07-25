import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground pb-32">
      <Navbar />
      
      {/* Project Hero */}
      <section className="pt-40 pb-20 px-6 relative">
        <div className="container mx-auto max-w-4xl relative z-10">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8 uppercase tracking-widest text-sm font-subheading">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <h1 className="font-heading text-6xl md:text-8xl mb-6">{project.title}</h1>
          <p className="text-xl md:text-2xl text-muted font-body mb-8">{project.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-subheading tracking-wider">
              <Github size={18} /> View Source
            </a>
            {project.links.demo !== "#" && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-bold hover:bg-primary/80 transition-colors font-subheading tracking-wider">
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-6 max-w-4xl">
        <div className="glass p-8 md:p-12 rounded-3xl mb-16">
          <div className="h-64 md:h-96 bg-[#1a1a1a] rounded-2xl mb-12 flex items-center justify-center border border-white/5">
            <span className="text-muted font-subheading uppercase tracking-widest">Architecture Diagram / Screenshot Placeholder</span>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 flex flex-col gap-12">
              <div>
                <h3 className="text-2xl font-heading mb-4 text-primary">Problem Statement</h3>
                <p className="text-gray-300 font-body leading-relaxed">{project.details.problem}</p>
              </div>
              <div>
                <h3 className="text-2xl font-heading mb-4 text-primary">Solution</h3>
                <p className="text-gray-300 font-body leading-relaxed">{project.details.solution}</p>
              </div>
              <div>
                <h3 className="text-2xl font-heading mb-4 text-primary">Challenges & Learnings</h3>
                <p className="text-gray-300 font-body leading-relaxed">{project.details.challenges}</p>
              </div>
              <div>
                <h3 className="text-2xl font-heading mb-4 text-primary">Future Improvements</h3>
                <p className="text-gray-300 font-body leading-relaxed">{project.details.future}</p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-heading mb-4 border-b border-white/10 pb-2">Tech Stack</h3>
                <div className="flex flex-col gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-gray-300">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading mb-4 border-b border-white/10 pb-2">Key Features</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.features.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
