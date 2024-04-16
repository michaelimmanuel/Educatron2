/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    container:{
      center: true,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

