/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sucor: {
          50: "#e8ecf3",
          100: "#b7c5da",
          200: "#94a9c9",
          300: "#6482b0",
          400: "#4569a1",
          500: "#174489",
          600: "#153e7d",
          700: "#103061",
          800: "#0d254b",
          900: "#0a1d3a",
        },
      },
      fontFamily: {
        cera: ["Cera Pro Regular", "sans-serif"],
        "cera-bold": ["Cera Pro Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
