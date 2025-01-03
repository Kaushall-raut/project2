/** @type {import('tailwindcss').Config} */
export default {
  darkmode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        gray: {
          100: "#b0b6c4",
          200: "#e5e7db",
          300: "#d5d1db",
          500: "#6b7280",
          700: "#374151",
          800: "#1f2937",
        },
        blue: { 200: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6" },
        "dark-bg": "#101214",
        "dark-secondary": "#1d1f21",
        "dark-tertiary": "#3b3d40",
        "blue-primary": "#0275ff",
        "stroke-dark": "#2d3135",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
