/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sucorblue: 'rgba(59, 88, 148, 1)',
        'sucorblue-1': 'rgba(59, 88, 148, 1)',
        'sucorblue-2': 'rgba(59, 88, 148, 0.75)',
      },
      maxWidth: {
        xxs: '16rem',
      },
    },
  },
  plugins: [],
};
