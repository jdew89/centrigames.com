/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html","./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2'
      }
    },
  },
  plugins: [],
}
