import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)"
      },
      fontFamily: {
        playwrite_IT_Moderna: ["var(--font-playwrite)"],
        bungee: ["var(--font-bungee)"],
      }
    },
  },
  plugins: [],
} satisfies Config;
