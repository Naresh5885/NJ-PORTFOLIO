export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  certId?: string;
  badge?: string;
}

export const certifications: Certification[] = [
  {
    title: "Certificate Program in Artificial Intelligence & Machine Learning",
    issuer: "NASSCOM | FutureSkills Prime (MeitY, Govt. of India)",
    date: "July 2026",
    certId: "FSP/2026/7/10336096",
    badge: "Gold Category (85% Score)",
    credentialUrl: "#"
  },
  {
    title: "Certificate Program in Cloud Computing Engineering (Azure / AWS)",
    issuer: "NASSCOM | FutureSkills Prime (MeitY, Govt. of India)",
    date: "July 2026",
    certId: "FSP/2026/7/10336025",
    badge: "Gold Category (86% Score)",
    credentialUrl: "#"
  },
  {
    title: "Introduction to Agentic AI on AWS",
    issuer: "AWS",
    date: "2026",
    credentialUrl: "#"
  },
  {
    title: "Google AI Learning Lab – ADK Master Class",
    issuer: "Google",
    date: "2026",
    credentialUrl: "#"
  },
  {
    title: "Machine Learning and Deep Learning - Fundamentals and Applications",
    issuer: "NPTEL",
    date: "2025",
    credentialUrl: "#"
  },
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google Skills",
    date: "2024",
    credentialUrl: "#"
  },
  {
    title: "Introduction to Prompt Engineering",
    issuer: "SkillUp",
    date: "2024",
    credentialUrl: "#"
  },
  {
    title: "Artificial Intelligence Primer Certification",
    issuer: "Infosys",
    date: "2024",
    credentialUrl: "#"
  }
];
