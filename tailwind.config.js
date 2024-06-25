/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'menu-down': {
          '0%': { opacity: 0, transform: 'translateY(-100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        menuDown: 'menu-down 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
