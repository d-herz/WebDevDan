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
    themes: ["luxury", "corporate", "cyberpunk", "garden"],
    darkTheme: "luxury",
  }
}
