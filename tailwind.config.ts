import type { Config } from "tailwindcss";

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
        // ACT Brand Colors (HSL format)
        midnight: "hsl(var(--midnight-forest))",
        moss: "hsl(var(--moss-green))",
        spring: "hsl(var(--spring-green))",
        seafoam: "hsl(var(--seafoam-blue))",
        sand: "hsl(var(--sand-gray))",
        // Legacy ACT color aliases (for backward compatibility)
        "act-midnight-forest": "hsl(var(--midnight-forest))",
        "act-spring-green": "hsl(var(--spring-green))",
        "act-moss-green": "hsl(var(--moss-green))",
        "act-sand-gray": "hsl(var(--sand-gray))",
        "act-seafoam-blue": "hsl(var(--seafoam-blue))",
        "act-white": "#FFFFFF",
        "act-mint": "#D4E8B8",
        "act-sage": "#B8C89A",
        "act-silver": "#A8A8A8",
        // Legacy text color aliases (for backward compatibility)
        "text-primary": "#FFFFFF",
        "text-secondary": "#EBE9E1",
        "text-tertiary": "#B8C89A",
        // Legacy background aliases (for backward compatibility)
        "bg-white": "#001818",
        "bg-secondary": "rgba(57, 72, 22, 0.3)",
        "bg-light": "#001818",
        "bg-lighter": "rgba(0, 24, 24, 0.5)",
        // Legacy border aliases
        "border-light": "rgba(235, 233, 225, 0.2)",
        "border-subtle": "rgba(235, 233, 225, 0.1)",
        "border-act": "hsl(var(--spring-green))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        title: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        'noto-jp': ['Noto Sans JP', 'sans-serif'],
      },
      letterSpacing: {
        'act-title': '-0.02em',
        'act-body-large': '-0.02em',
      },
      lineHeight: {
        'act-title': '1.14',
        'act-body': '1.25',
        'act-body-large': '1.33',
      },
      backdropBlur: {
        'act': '8px',
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
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          'base-100': '#FFFFFF',
          'base-200': '#EBE9E1',
          'base-300': '#E0FFFF',
          'base-content': '#001818',
          primary: '#B2DE26',
          'primary-content': '#001818',
          secondary: '#394816',
          'secondary-content': '#FFFFFF',
          accent: '#B2DE26',
          'accent-content': '#001818',
          neutral: '#001818',
          'neutral-content': '#FFFFFF',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          info: '#2563EB',
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    darkTheme: false,
  },
} satisfies Config;
