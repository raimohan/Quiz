import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'pulse-slow': {
          '0%, 100%': {
            transform: 'scale(0.8)',
            opacity: '0.5',
          },
          '50%': {
            transform: 'scale(1.2)',
            opacity: '1',
          },
        },
        'pulse-medium': {
          '0%, 100%': {
            transform: 'scale(0.9)',
            opacity: '0.7',
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '1',
          },
        },
        'fade-in-scale': {
          from: {
            opacity: '0',
            transform: 'scale(0.5)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'hero-fade-in-up': {
            from: {
              opacity: '0',
              transform: 'translateY(30px) scale(0.95)',
            },
            to: {
              opacity: '1',
              transform: 'translateY(0) scale(1)',
            },
        },
        'float-blob-1': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 30px) scale(0.9)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        'float-blob-2': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-30px, 40px) scale(0.9)' },
          '66%': { transform: 'translate(50px, -20px) scale(1.1)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-medium': 'pulse-medium 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-scale': 'fade-in-scale 1s ease-out forwards',
        'hero-fade-in-up': 'hero-fade-in-up 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards',
        'float-blob-1': 'float-blob-1 15s infinite ease-in-out',
        'float-blob-2': 'float-blob-2 18s infinite ease-in-out -5s',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
