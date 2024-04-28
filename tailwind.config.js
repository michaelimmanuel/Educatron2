/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,tsx}',
    './components/**/*.{html,tsx}',
  ],
  theme: {
    container:{
      center: true,
    },
    colors:{
      ColorWhite: '#F1F6F9',
      ColorBlueish: '#394867',
      ColorTealish: '#212A3E',
      ColorBlueGrayish: '#9BA4B5',
      ColorBaseline: '#D9D9D9',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

