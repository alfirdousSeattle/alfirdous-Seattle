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
        white: "#ffffff",
        greenMuted: "#768376",
        graySoft: "#cacdca",
        greenDark: "#355638",
        yellowAccent: "#ecc590",
      },
    },
  },
  plugins: [],
} satisfies Config;
