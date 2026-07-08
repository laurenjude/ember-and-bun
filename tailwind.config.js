/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0A',
        'dark-secondary': '#141414',
        'dark-tertiary': '#1A1A1A',
        amber: {
          DEFAULT: '#E8A020',
          light: '#F0B840',
          dark: '#C88A18',
        },
        white: {
          DEFAULT: '#FFFFFF',
          muted: '#A0A0A0',
          dim: '#6B6B6B',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(232, 160, 32, 0.5)' },
          '70%': { boxShadow: '0 0 0 15px rgba(232, 160, 32, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(232, 160, 32, 0)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 0 0 rgba(232, 160, 32, 0.6)' },
          '70%': { boxShadow: '0 0 0 20px rgba(232, 160, 32, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(232, 160, 32, 0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
