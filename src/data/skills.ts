export interface SkillCategory {
  category: string;
  iconName: "Code2" | "Brain" | "Cloud";
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    iconName: "Code2",
    description: "Core programming languages for data structures, backend engineering, and AI algorithms.",
    skills: ["Python", "Java"]
  },
  {
    category: "Artificial Intelligence & Machine Learning",
    iconName: "Brain",
    description: "Core AI/ML domains, neural network architectures, NLP models, LLMs, and RAG pipelines.",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "LLMs", "Generative AI", "RAG"]
  },
  {
    category: "Cloud, Tools & Automation",
    iconName: "Cloud",
    description: "Cloud infrastructure, version control, web microservices, ML frameworks, and databases.",
    skills: ["AWS", "Linux", "Git", "GitHub", "TensorFlow", "OpenCV", "FastAPI", "Selenium", "MySQL"]
  }
];
