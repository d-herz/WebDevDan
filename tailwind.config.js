/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    screens: {
      'xs': '361px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'shadows': ['"Shadows Into Light"', 'cursive']

      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate", "forest", "synthwave", "aqua", "cupcake", "luxury", "cyberpunk"]
  }
}
