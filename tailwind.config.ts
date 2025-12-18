import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#d4af37',
        accent: '#8b7355',
        light: '#f8f6f3',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-whatsapp': 'pulseWhatsapp 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseWhatsapp: {
          '0%': { boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' },
          '50%': { boxShadow: '0 4px 25px rgba(37, 211, 102, 0.6), 0 0 0 10px rgba(37, 211, 102, 0.1)' },
          '100%': { boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}

export default config