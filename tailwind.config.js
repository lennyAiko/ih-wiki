/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': { 'max': '640px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px'
    },
    extend: {},
  },
  plugins: [],
}

