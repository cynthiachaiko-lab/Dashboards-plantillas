import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f1f5f9',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#1e1e2e',
          700: '#1a1a2e',
          800: '#12121a',
          900: '#0a0a0f',
          950: '#050507',
        },
        accent: {
          purple: '#8b5cf6',
          blue: '#6366f1',
          indigo: '#3b82f6',
          cyan: '#06b6d4',
          pink: '#ec4899',
          orange: '#f97316',
        },
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8b5cf6, #6366f1, #3b82f6)',
        'gradient-secondary': 'linear-gradient(135deg, #06b6d4, #3b82f6)',
        'gradient-success': 'linear-gradient(135deg, #10b981, #059669)',
        'gradient-danger': 'linear-gradient(135deg, #ef4444, #dc2626)',
        'gradient-warm': 'linear-gradient(135deg, #f97316, #ec4899)',
        'gradient-cool': 'linear-gradient(135deg, #6366f1, #06b6d4)',
        'gradient-card': 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(99,102,241,0.05))',
        'gradient-glow': 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15), transparent 70%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(139,92,246,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(99,102,241,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(6,182,212,0.1) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(139, 92, 246, 0.2)',
        'glow': '0 0 30px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 60px rgba(139, 92, 246, 0.4)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.3)',
        'glow-success': '0 0 30px rgba(16, 185, 129, 0.3)',
        'inner-glow': 'inset 0 0 30px rgba(139, 92, 246, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
