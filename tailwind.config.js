/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html", "./public/blog-posts/*.html"],
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
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
  daisyui: {
    themes: ["luxury", "corporate", "garden", "light", "dark", "bumblebee", "retro", "valentine", "halloween", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    darkTheme: "luxury",
  }
}
