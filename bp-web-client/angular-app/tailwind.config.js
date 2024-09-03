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
      fontFamily: {
        verlag: ['"Verlag XLight"', '"Verlag Light Italic"', '"Helvetica"', "Arial", "sans-serif"]
      },
      zIndex: {
        100: "100",
      }
    },
    screens: {
      xxsm: "360px",
      // => @media (min-width: 360px) { ... }

      xsm: "540px",
      // => @media (min-width: 360px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

