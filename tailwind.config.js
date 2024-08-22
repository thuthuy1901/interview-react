/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        widthPage: '1120px',
      },
      colors: {
        purple: '#9C69E2',
        header: '#212353',
        text: '#4B5D68',
      },
      borderRadius: {
        button: '50px',
      },
      boxShadow: {
        button: '0px 5px 5px 0px #4B5D681A',
      },
      keyframes: {
        fadeDown: {
          '0%': { opacity: 0, transform: 'translateY(-48px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeDown: 'fadeDown 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
