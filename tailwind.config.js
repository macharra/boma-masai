/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'boma-red': '#F70000', // Custom red color for your theme
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        body: ['Lora', 'serif'],
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'bounce-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '60%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out',
        'bounce-in': 'bounce-in 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
