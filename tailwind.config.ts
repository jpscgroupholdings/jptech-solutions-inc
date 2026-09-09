import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "896px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gray: {
          50: "hsl(var(--gray-50))",
          100: "hsl(var(--gray-100))",
          200: "hsl(var(--gray-200))",
          300: "hsl(var(--gray-300))",
          400: "hsl(var(--gray-400))",
          500: "hsl(var(--gray-500))",
          600: "hsl(var(--gray-600))",
          700: "hsl(var(--gray-700))",
          800: "hsl(var(--gray-800))",
          900: "hsl(var(--gray-900))",
          950: "hsl(var(--gray-950))",
        },
        // Brand accents — gold is rationed to one "loud" element per view.
        // See jptech-minimal-design.md, Color section.
        gold: {
          DEFAULT: "hsl(var(--gold))",
          mid: "hsl(var(--gold-mid))",
          light: "hsl(var(--gold-light))",
          foreground: "hsl(var(--gold-foreground))",
        },
        bronze: "hsl(var(--bronze))",
      },
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
        display: ["Geist Mono", "ui-monospace", "monospace"],
        serif: ["Source Serif 4", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
        xs: "6px",
      },
      maxWidth: {
        reading: "42rem",
        grid: "56rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(8px, -12px) rotate(1.5deg)" },
          "50%": { transform: "translate(-4px, -20px) rotate(-1deg)" },
          "75%": { transform: "translate(10px, -8px) rotate(2deg)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "20%": { transform: "translate(-10px, -8px) rotate(-2deg)" },
          "40%": { transform: "translate(6px, -18px) rotate(1.5deg)" },
          "60%": { transform: "translate(-8px, -14px) rotate(-1deg)" },
          "80%": { transform: "translate(4px, -6px) rotate(2.5deg)" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(12px, -10px) rotate(2deg)" },
          "66%": { transform: "translate(-6px, -16px) rotate(-1.5deg)" },
        },
        "blob-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(20px, -15px) scale(1.05)" },
          "50%": { transform: "translate(-10px, -30px) scale(0.97)" },
          "75%": { transform: "translate(15px, -10px) scale(1.03)" },
        },
        "blob-medium": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "20%": { transform: "translate(-15px, 10px) scale(1.06)" },
          "40%": { transform: "translate(10px, -20px) scale(0.95)" },
          "60%": { transform: "translate(-20px, -5px) scale(1.04)" },
          "80%": { transform: "translate(5px, 15px) scale(0.98)" },
        },
        "blob-fast": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(15px, 12px) scale(1.08)" },
          "66%": { transform: "translate(-12px, -8px) scale(0.94)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-slow": "float-slow 22s ease-in-out infinite",
        "float-medium": "float-medium 16s ease-in-out infinite",
        "float-fast": "float-fast 11s ease-in-out infinite",
        "blob-slow": "blob-slow 25s ease-in-out infinite",
        "blob-medium": "blob-medium 18s ease-in-out infinite",
        "blob-fast": "blob-fast 13s ease-in-out infinite",
      },
      boxShadow: {
        card: "0 8px 22px -14px rgba(0,0,0,0.25)",
        "card-hover": "0 18px 36px -20px rgba(0,0,0,0.4)",
        modal: "0 40px 90px -20px rgba(0,0,0,0.35)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "42rem",
          },
        },
      },
    },
  },
  plugins: [
    animate,
    typography,
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        ".text-gradient-brand": {
          background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 40%, hsl(var(--gold)) 100%)`,
          "-webkit-background-clip": "text",
          "background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".text-gradient-gold": {
          background: `linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold-mid)) 100%)`,
          "-webkit-background-clip": "text",
          "background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".text-gradient-navy": {
          background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)`,
          "-webkit-background-clip": "text",
          "background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".bg-gradient-brand": {
          background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 40%, hsl(var(--gold)) 100%)`,
        },
        ".bg-gradient-navy": {
          background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)`,
        },
        ".bg-gradient-gold": {
          background: `linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold-mid)) 100%)`,
        },
      });
    }),
  ],
} satisfies Config;