/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Build your palette here
        transparent: "transparent",
        gray: colors.slate,
        blue: colors.blue,
        lightblue: colors.sky,
        red: colors.red,
        green: colors.green,
        indigo: colors.indigo,
        white: colors.white,
      },
      zIndex: {
        100: "100",
      }
    },
  },
  plugins: [],
}

