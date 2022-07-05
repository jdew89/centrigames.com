/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html","./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'primary-light': '#28c8f0',
        primary: '#0d9bbf',
        'primary-dark': '#0a748f',
        'primary-darker': '#032730',
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
