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
      'display-one': ['"Ruslan Display"', 'cursive'],
      'display-two': ['"Major Mono Display"', 'monospace'],
      'drum-logo': ['"Big Shoulders Stencil Display"', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}
