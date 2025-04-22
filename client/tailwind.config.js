/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'beige': '#f5efeb',
        'sky-blue': '#c8d9e6',
        'navy': '#2f4156',
        'teal': '#567c8d',
      },
    },
  },
  plugins: [],
}

