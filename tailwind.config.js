/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#0B0F17',
          900: '#111726',
          800: '#1B2438',
          700: '#26334D',
          600: '#3A4B6E',
        },
        warm: {
          50: '#FAF9F5',
          100: '#F4F2EB',
          200: '#E8E5DA',
          500: '#7D796F',
          700: '#4A4740',
          900: '#1A1917',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'arch-lg': '140px 140px 24px 24px',
        'arch-md': '96px 96px 20px 20px',
        'arch-sm': '64px 64px 16px 16px',
        'bento': '24px',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.04)',
        'arch': '0 20px 48px -12px rgba(0, 0, 0, 0.18), 0 8px 16px -4px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 40px -8px rgba(79, 70, 229, 0.25)',
        'card-dark': '0 4px 24px -4px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
        'arch-dark': '0 24px 60px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
