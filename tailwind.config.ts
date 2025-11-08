import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        dawn: {
          50: "#fdf8f3",
          100: "#faeedf",
          200: "#f2d3b7",
          300: "#e8b68c",
          400: "#d9925e",
          500: "#c27841",
          600: "#a35d2f",
          700: "#814624",
          800: "#5a3018",
          900: "#351d0d"
        }
      },
      fontFamily: {
        display: ["Noto Nastaliq Urdu", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
