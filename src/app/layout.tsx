import type { Metadata } from "next";
import { Inter, Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Nareshkumar J | AI & Machine Learning Engineer",
  description: "Portfolio of Nareshkumar J, an Artificial Intelligence & Machine Learning Engineer specializing in Python, RAG, LLMs, Computer Vision, FastAPI, and AWS Cloud.",
  keywords: ["AI Engineer", "Machine Learning", "Deep Learning", "Python", "FastAPI", "AWS", "Computer Vision", "RAG", "LLM", "Nareshkumar J"],
  authors: [{ name: "Nareshkumar J" }],
  openGraph: {
    title: "Nareshkumar J | AI & Machine Learning Engineer",
    description: "Building intelligent applications using Python, Machine Learning, Deep Learning, Generative AI, FastAPI, TensorFlow, AWS, and Computer Vision.",
    url: "https://nareshkumar.dev",
    siteName: "Nareshkumar J Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nareshkumar J | AI & Machine Learning Engineer",
    description: "Building intelligent applications using Python, Machine Learning, Deep Learning, Generative AI, FastAPI, TensorFlow, AWS, and Computer Vision.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nareshkumar J",
  "jobTitle": "AI & Machine Learning Engineer",
  "url": "https://nareshkumar.dev",
  "sameAs": [
    "https://github.com/Naresh5885",
    "https://www.linkedin.com/in/nareshkumar10k/",
    "https://leetcode.com/u/Naresh10k/"
  ],
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Generative AI",
    "Retrieval-Augmented Generation",
    "Python",
    "FastAPI",
    "AWS"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${bebas.variable} antialiased bg-[#050505] text-white selection:bg-[#FF2D2D] selection:text-black`}>
        {/* Cinematic Noise Texture Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: "url('/noise.png')" }}></div>
        
        {/* Subtle Radial Gradients */}
        <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
        <div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
