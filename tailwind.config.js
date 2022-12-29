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
    themes: [
      {
        lightDh: {
          primary: '#E1AA3D',
          "primary-focus": '#BB892C',
          "secondary-content": '#02183C',
          neutral: '#181A2A',
          "neutral-content": '#EDF2F7',
          "base-100": '#FFFFFF',
          "base-200": '#FFFFFF',
          "base-300": '#525252',
          "base-content": '#181A2A',
          success: '#0AD49B',
        },
        darkDh: {
          primary: '#E1AA3D',
          "primary-focus": '#BB892C',
          "secondary-content": '#FFFFFF',
          neutral: '#110E0E',
          "neutral-content": '#EDF2F7',
          "base-100": '#000000',
          "base-200": '#2B2A2C',
          "base-300": '#2B2A2C',
          "base-content": '#E1AA3D',
          success: '#0AD49B',
        },
      },
      "luxury", "corporate", "garden", "light", "dark", "bumblebee", "cupcake", "retro", "valentine", "halloween", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    darkTheme: "luxury",
  }
}
