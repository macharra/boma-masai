/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Existing keyframes
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },

        // New bounce-in keyframes
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

        // New fade-in keyframes
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      animation: {
        // Existing animations
        'fade-in-down': 'fadeInDown 1s ease-out',

        // New animations
        'bounce-in': 'bounce-in 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
    },
  },

  plugins: [],
};
