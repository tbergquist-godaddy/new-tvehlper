import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        fit: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      borderStyle: {
        inset: "inset",
      },
      boxShadow: {
        "input-focus": "inset 0 0 0 2px",
      },
    },
  },
  plugins: [],
};
export default config;
