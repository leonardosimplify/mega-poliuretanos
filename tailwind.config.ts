import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        "mega-blue": "#1d4ed8",
        "mega-accent": "#f97316",
        "mega-dark": "#0f172a",
        "mega-grey": "#f4f6fb",
      },
    },
  },
  plugins: [],
};

export default config;
