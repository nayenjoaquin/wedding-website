import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f2f2f2",
        foreground: "var(--foreground)",
      },
      height: {
        content: "100vh",
        nav: "var(--nav-height)",
      },
      fontFamily: {
        fancy: ["Newsreader", "sans-serif"],
        handwritten: ["Dancing Script", "cursive"]
      },
    },
  },
  plugins: [],
} satisfies Config;
