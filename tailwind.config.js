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
          dark: '#0B1329',      // Deep navy/slate background
          darkNavy: '#0F172A',  // Slate 900
          tealBg: '#0A323D',    // Deep teal accent for dark curves
          orange: '#F97316',    // Warm vibrant orange
          orangeHover: '#EA580C',
          teal: '#0D9488',      // Rich teal / cyan
          tealHover: '#0F766E',
          cardLight: '#FFFFFF',
          bgLight: '#FAFAF9',   // Warm off-white content canvas
          muted: '#64748B',     // Slate 500
          mutedLight: '#94A3B8' // Slate 400
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(249, 115, 22, 0.4)',
        'glow-teal': '0 0 25px -5px rgba(13, 148, 136, 0.4)',
        'card-soft': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
      }
    },
  },
  plugins: [],
}
