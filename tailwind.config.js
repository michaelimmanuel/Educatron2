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
      transparent: '#',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

