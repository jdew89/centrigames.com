/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html","./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#0d9bbf',
        secondary: '#ffb01f',
        'brand-white': '#fffeeb'
      },
      fontFamily: {
        'excalibur': ['Excalibur Nouveau Med', 'sans-serif']
      }
    },
  },
  plugins: [],
}
