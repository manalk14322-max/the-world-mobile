import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        background: "#FFFFFF",
        "secondary-bg": "#F8FAFC",
        accent: "#1E40AF",
        gold: "#F59E0B",
        text: "#111827",
        muted: "#6B7280"
      },
      borderRadius: {
        xl: "0.875rem"
      },
      maxWidth: {
        content: "1200px"
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.06)",
        md: "0 6px 16px -4px rgb(0 0 0 / 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
