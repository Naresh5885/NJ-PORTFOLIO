export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  status: "Completed" | "Academic Project" | "Personal Project";
  image?: string;
  features: string[];
  technologies: string[];
  links: {
    github: string;
    demo?: string;
    caseStudy?: string;
  };
  details: {
    overview: string;
    objective: string;
    problem: string;
    solution: string;
    architecture: string;
    challenges: string;
    learned: string;
  };
}

export const projects: Project[] = [
  {
    id: "failureaware-ai",
    title: "FailureAware AI",
    shortDescription: "High-Reliability Retrieval-Augmented Generation Platform",
    description: "Engineered a Retrieval-Augmented Generation (RAG) system using semantic search and confidence validation to reduce LLM hallucinations. Built FastAPI APIs and integrated vector search to improve intelligent document retrieval and response reliability.",
    status: "Personal Project",
    features: [
      "Semantic Search & Vector Retrieval",
      "Response Confidence Validation",
      "Hallucination Reduction",
      "Explainable AI Citations",
      "Asynchronous FastAPI Microservices"
    ],
    technologies: ["Python", "FastAPI", "RAG", "LLM", "Vector Search", "Endee"],
    links: {
      github: "https://github.com/Naresh5885",
      demo: "",
      caseStudy: "/projects/failureaware-ai"
    },
    details: {
      overview: "FailureAware AI is an advanced RAG platform engineered to systematically eliminate ungrounded answers and hallucinations in LLM output.",
      objective: "Build a reliable document Q&A engine that verifies every response against retrieved factual source passages before returning output to the user.",
      problem: "Standard RAG pipelines often pass retrieved contexts to LLMs, but models can still generate false or contradictory statements when information is sparse or ambiguous.",
      solution: "Developed a dual-stage confidence validation pipeline. Stage one performs dense vector retrieval with semantic scoring; stage two evaluates the response consistency against retrieved source passages.",
      architecture: "Client / User Request -> FastAPI Endpoint -> Vector Database Retrieval -> LLM Generation -> Confidence Evaluator -> Validated Response Stream.",
      challenges: "Optimizing vector search latency and tuning confidence thresholds to distinguish factual nuances without introducing high latency.",
      learned: "Deepened expertise in dense vector embeddings, prompt constraint engineering, and building resilient FastAPI microservices."
    }
  },
  {
    id: "emotion-music",
    title: "Emotion Detection Music Recommendation",
    shortDescription: "AI-Powered Emotion Recognition & Music Recommendation",
    description: "Developed a facial emotion recognition system using TensorFlow and OpenCV that detects user emotions in real time and recommends music based on predicted emotional states.",
    status: "Academic Project",
    features: [
      "Real-time Facial Emotion Recognition",
      "FER2013 Trained Convolutional Neural Network",
      "OpenCV Frame Ingestion & Preprocessing",
      "Dynamic Emotion-to-Music Mood Mapping",
      "Intuitive Dashboard & Music Player Integration"
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "Computer Vision"],
    links: {
      github: "https://github.com/Naresh5885",
      demo: "",
      caseStudy: "/projects/emotion-music"
    },
    details: {
      overview: "An end-to-end computer vision and deep learning application that identifies real-time human emotions via webcam input and curates matching music playlists.",
      objective: "Enhance user auditory experience by aligning music recommendations directly with human emotion in real time.",
      problem: "Traditional music recommendation algorithms use historical listening data rather than current emotional states, missing instantaneous user mood shifts.",
      solution: "Trained a deep Convolutional Neural Network (CNN) on FER2013 dataset. Integrated OpenCV to capture face frames, perform bounding box detection, predict emotion labels, and map them to matching playlist genres.",
      architecture: "Webcam Video Stream -> OpenCV Face Detection -> CNN Inference Model -> Emotion Class Label -> Playlist Mapping Module -> Music Output.",
      challenges: "Maintaining high inference FPS on local webcams under varying lighting conditions and smoothing rapid frame-to-frame emotion fluctuations.",
      learned: "Mastered real-time video stream processing with OpenCV, CNN architecture design in TensorFlow, and mapping emotion metrics to user recommendation logic."
    }
  },
  {
    id: "biosync",
    title: "BIOSYNC",
    shortDescription: "Intelligent Biometric Attendance System",
    description: "Built a smart biometric attendance system that automatically collects and processes attendance data from multiple biometric devices, reducing manual work and improving accuracy.",
    status: "Completed",
    features: [
      "Biometric Attendance System",
      "Proxy Attendance Prevention",
      "Automated WhatsApp Notifications",
      "Google Drive Cloud Backup",
      "Real-time Administrative Reporting"
    ],
    technologies: ["Python", "Biometric Automation", "AI Automation"],
    links: {
      github: "https://github.com/Naresh5885",
      demo: "",
      caseStudy: "/projects/biosync"
    },
    details: {
      overview: "BIOSYNC is an intelligent biometric attendance management solution designed for educational institutions and corporate workplaces.",
      objective: "Eliminate manual roll calls, prevent proxy attendance, and provide instant real-time cloud analytics for administrators.",
      problem: "Manual paper registers or legacy swiping systems are slow, prone to errors, and require manual data entry into administrative databases.",
      solution: "Engineered an automated biometric attendance pipeline that collects and processes attendance data from multiple biometric devices, logs timestamps instantly, and triggers automated cloud backups.",
      architecture: "Biometric Hardware Terminals -> Data Ingestion & Processing -> Local Database -> Dashboard Engine -> WhatsApp Notification API & Google Drive Backup.",
      challenges: "Ensuring high data processing accuracy under multi-device environments and building auto-recovery routines for intermittent network drops.",
      learned: "Gained practical insights into biometric system integration, handling edge cases in attendance automation, and building reliable data backup workflows."
    }
  }
];
