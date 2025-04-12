/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
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
        cyan: {
          400: "#00D4FF",
          500: "#00D4FF",
        },
        magenta: {
          400: "#FF007A",
          500: "#FF007A",
        },
        gold: {
          400: "#FFD700",
          500: "#FFD700",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(10%)" },
          to: { transform: "translateY(0)" },
        },
        "pulse-cyan": {
          "0%, 100%": { 
            textShadow: "0 0 8px rgba(0,212,255,0.5), 0 0 12px rgba(0,212,255,0.3), 0 0 16px rgba(0,212,255,0.2)" 
          },
          "50%": { 
            textShadow: "0 0 12px rgba(0,212,255,0.8), 0 0 20px rgba(0,212,255,0.6), 0 0 30px rgba(0,212,255,0.4)" 
          },
        },
        "pulse-magenta": {
          "0%, 100%": { 
            textShadow: "0 0 8px rgba(255,0,122,0.5), 0 0 12px rgba(255,0,122,0.3), 0 0 16px rgba(255,0,122,0.2)" 
          },
          "50%": { 
            textShadow: "0 0 12px rgba(255,0,122,0.8), 0 0 20px rgba(255,0,122,0.6), 0 0 30px rgba(255,0,122,0.4)" 
          },
        },
        "pulse-gold": {
          "0%, 100%": { 
            textShadow: "0 0 8px rgba(255,215,0,0.5), 0 0 12px rgba(255,215,0,0.3), 0 0 16px rgba(255,215,0,0.2)" 
          },
          "50%": { 
            textShadow: "0 0 12px rgba(255,215,0,0.8), 0 0 20px rgba(255,215,0,0.6), 0 0 30px rgba(255,215,0,0.4)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.5s ease-out",
        "pulse-cyan": "pulse-cyan 3s ease-in-out infinite",
        "pulse-magenta": "pulse-magenta 3s ease-in-out infinite",
        "pulse-gold": "pulse-gold 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 