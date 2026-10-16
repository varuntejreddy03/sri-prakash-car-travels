/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5fc',
          100: '#e5eefa',
          200: '#c5daf5',
          700: '#14335e',
          800: '#0c2340', // Karthikeya Royal Navy
          900: '#08172c', // Karthikeya Midnight Navy
          950: '#040b17', // Karthikeya Deepest Obsidian Navy
        },
        gold: {
          50: '#fefcf5',
          100: '#fdf7e2',
          200: '#faecc1',
          300: '#f5dc8a',
          400: '#efcd61',
          500: '#e3be47',
          600: '#d4af37', // Karthikeya Classic Rich Gold
          700: '#b88911',
          800: '#946d0e',
          900: '#7a5a08',
        },
        brand: {
          navy: '#0c2340',
          'navy-hover': '#14335e',
          'navy-dark': '#040b17',
          gold: '#d4af37',
          'gold-hover': '#b88911',
          'gold-light': '#f5dc8a',
          amber: '#f59e0b',
          'amber-hover': '#d97706',
          // Mapped brand aliases so legacy references adapt to gold/amber:
          orange: '#d4af37',
          'orange-hover': '#b88911',
          'orange-light': '#f5dc8a',
          'orange-dark': '#946d0e',
          dark: '#040b17',
          'dark-card': '#08172c',
          'dark-surface': '#0c2340',
        }
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.45)',
        'navy-elevated': '0 20px 40px -15px rgba(12, 35, 64, 0.25)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
