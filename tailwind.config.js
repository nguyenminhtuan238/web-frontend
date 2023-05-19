/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.25s ease-in-out',
      },
    },
  },
  plugins: [],
};
