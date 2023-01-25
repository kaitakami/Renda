/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const brandColor = colors.orange

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        brand: brandColor,
        ringColor: {
          DEFAULT: brandColor["500"],
        },
      },
      fontFamily: {
        sans: [`var(--font-inter)`, ...defaultTheme.fontFamily.sans]
      }

    },
  },
  plugins: [],
}
