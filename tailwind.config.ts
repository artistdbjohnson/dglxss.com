import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        sans: [
          "Segoe UI",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      colors: {
        bg: "#000000",
        surface: "#0a0a0a",
        fg: "#ffffff",
        "fg-muted": "rgba(255,255,255,0.78)",
        "fg-subtle": "rgba(255,255,255,0.42)",
        border: "rgba(255,255,255,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
