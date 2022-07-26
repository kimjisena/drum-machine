/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black-one': '#182024',
      'black-two': '#2A2D3A',
      'white': '#CDDFEC',
      'red': '#F72035',
      'yellow': '#ECFF09'
    },
    fontFamily: {
      'drum-logo': ['"Ruslan Display"', 'cursive'],
      'display-default': ['Digital', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
