/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        126: "31.25rem",
        128: "32rem",
      },
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
        verlag: [
          '"Verlag XLight"',
          '"Verlag Light Italic"',
          '"Helvetica"',
          "Arial",
          "sans-serif",
        ],
      },
      zIndex: {
        100: "100",
      },
      screens: {
        sm: "540px",
        md: "768px",
        lg: "912px",
        xl: "1024px",
        "2xl": "1280px",
      },
    },
    screens: {
      "8xsm": "344px", // min-width Samsung Z Fold 5
      "7xsm": "360px", // min-width Samsung Galaxy S8+
      "6xsm": "375px", // min-width iPhone SE
      "5xsm": "390px", // min-width iPhone 12 Pro
      "4xsm": "412px", // min-width Pixel 7 & Samsung Galaxy S20 Ultra, Samsung Galaxy A51/71
      "3xsm": "430px", // min-width iPhone 12 Pro Max
      "2xsm": "414px", // min-width iPhone XR
      sm: "540px", // Surface Duo
      md: "768px", // min-width iPad Mini
      "2md": "820px", // min-width iPad Air
      "3md": "853px", // min-width Asus Zenbook Fold
      lg: "912px", // min-width Surface Pro 7
      xl: "1024px", // min-width iPad Pro
      nesthub: { raw: "(min-width: 1024px) and (min-height: 600px)" },
      nesthubMax: { raw: "(min-width: 1024px) and (min-height: 800px)" },
      ipadmini: { raw: "(min-width: 768px) and (min-height: 1024px)" },
      ipadpro: { raw: "(min-width: 1024px) and (min-height: 1366px)" },
      "2xl": { raw: "(min-width: 1280px) and (min-height: 744px)" },
      "3xl": { raw: "(min-width: 1470px) and (min-height: 864px)" },
    },
  },
  plugins: [],
};
