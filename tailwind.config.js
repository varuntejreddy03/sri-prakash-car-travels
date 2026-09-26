/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF5B00',
          'orange-hover': '#E65200',
          'orange-light': '#FF7824',
          'orange-dark': '#CC4900',
          dark: '#0B0F17',
          'dark-card': '#111827',
          'dark-surface': '#161F30',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
