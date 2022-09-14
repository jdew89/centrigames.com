/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app.vue",
    "./components/**/*.{html,js,vue}",
    "./pages/**/*.{html,js,vue}"
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
    },
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
      },
    },
  },
  plugins: [],
}
