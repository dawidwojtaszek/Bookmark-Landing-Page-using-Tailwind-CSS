/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "976px",
      lg: "1351px",
    },
    colors: {
      softBlue: "hsl(231, 69%, 60%)",
      softRed: "hsl(0, 94%, 66%)",
      grayishBlue: "hsl(229, 8%, 60%)",
      veryDarkBlue: "hsl(229, 31%, 21%)",
      firefoxButton: "#f7f7f7",
      white: "#fff",
    },
    fontFamily: {
      display: ["Rubik", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
