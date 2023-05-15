/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sucor-50": "#B8D0F3",
        "sucor-100": "#A0C0EF",
        "sucor-200": "#81ABEA",
        "sucor-300": "#578FE3",
        "sucor-400": "#246AD4",
        "sucor-500": "#174489",
        "sucor-600": "#143A75",
        "sucor-700": "#113263",
        "sucor-800": "#0E2A54",
        "sucor-900": "#0C2448",
      },
      maxWidth: {
        xxs: "16rem",
      },
      fontFamily: {
        cera: ["Cera Pro Regular", "sans-serif"],
        "cera-bold": ["Cera Pro Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
