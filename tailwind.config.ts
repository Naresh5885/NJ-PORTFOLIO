import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        "secondary-bg": "#0B0B0B",
        card: "#111111",
        border: "#1C1C1C",
        primary: "#FF2D2D",
        secondary: "#FF5252",
        muted: "#71717A",
        gray: "#A1A1AA",
        foreground: "#FFFFFF",
      },
      fontFamily: {
        heading: ["var(--font-bebas)"],
        body: ["var(--font-inter)"],
        subheading: ["var(--font-poppins)"],
      },
      backgroundImage: {
        'radial-red': "radial-gradient(circle at 50% 50%, rgba(255, 45, 45, 0.15), transparent 70%)",
        'radial-glow': "radial-gradient(circle at center, rgba(255, 45, 45, 0.08) 0%, transparent 60%)",
      },
      boxShadow: {
        'neon': '0 0 40px rgba(255, 45, 45, 0.15)',
        'neon-strong': '0 0 60px rgba(255, 45, 45, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
