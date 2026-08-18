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
        blue: {
          50: "#f0f5ff",
          100: "#e0ebfe",
          200: "#bad3fd",
          300: "#7daefb",
          400: "#3882f6",
          500: "#1d5ee9",
          600: "#1244c8",
          700: "#0f35a0",
          800: "#102e82",
          900: "#0a2540",
          950: "#06172e",
        },
        gold: {
          100: "#faefd6",
          200: "#f5dda8",
          300: "#eec572",
          400: "#e6b024",
          500: "#d99718",
          600: "#bc7511",
          700: "#955212",
        },
        "comelec-blue": {
          50: "#f0f5ff",
          100: "#e0ebfe",
          200: "#bad3fd",
          300: "#7daefb",
          400: "#3882f6",
          500: "#1d5ee9",
          600: "#1244c8",
          700: "#0f35a0",
          800: "#102e82",
          900: "#0a2540",
          950: "#06172e",
        },
        "comelec-gold": {
          100: "#faefd6",
          200: "#f5dda8",
          300: "#eec572",
          400: "#e6b024",
          500: "#d99718",
          600: "#bc7511",
          700: "#955212",
        },
        eligible: {
          DEFAULT: "#16a34a",
          bg: "#f0fdf4",
        },
        ineligible: {
          DEFAULT: "#dc2626",
          bg: "#fef2f2",
        },
        boundary: {
          DEFAULT: "#d97706",
          bg: "#fffbeb",
        },
        surface: {
          DEFAULT: "#ffffff",
          subtle: "#f8fafc",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Geist", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Geist Mono", "monospace"],
      },
      borderRadius: {
        card: "0.75rem",  
        input: "0.5rem",  
        badge: "9999px",  
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        card: "0 4px 12px -2px rgba(10, 37, 64, 0.08), 0 2px 4px -1px rgba(10, 37, 64, 0.04)",
        floating: "0 20px 40px -8px rgba(10, 37, 64, 0.16), 0 8px 16px -4px rgba(10, 37, 64, 0.08)",
        "glow-gold": "0 0 24px -4px rgba(230, 176, 36, 0.35)",
        "glow-blue": "0 0 24px -4px rgba(18, 68, 200, 0.35)",
        "inner-glow": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};

export default config;
