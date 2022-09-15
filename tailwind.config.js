/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#D5D9DD",
          200: "#ABB3BA",
          300: "#828C98",
          400: "#586675",
          500: "#2E4053",
        },
        grey: {
          100: "#F2F3F4",
          200: "#E5E7E9",
          300: "#D7DBDD",
          400: "#CACFD2",
          500: "#BDC3C7",
        },
        orange: {
          100: "#FFF1EB",
          200: "#FFB899",
          300: "#FF9466",
          400: "#FF7133",
          500: "#FF4D00",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
