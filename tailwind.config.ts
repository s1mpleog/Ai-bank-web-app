import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CAFF33",
        glass: "#1C1C1C",
        card: "#262626",
        glass1: "#1A1A1A"
      },
    },
  },
  plugins: [],
};
export default config;
