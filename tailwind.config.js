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
      ColorPlatinum: '#E5E6E4',
      ColorCultured: '#F9F9F8',
      Black: '#000000',
      White: '#FFFFFF',
      sky: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
        950: '#082f49',
      },
      indigo: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
        950: '#1e1b4b',
      },
    },
    fontFamily: {
      sans: ['Fredoka', 'sans-serif'],
      serif: ['Fredoka', 'serif'],
    },
    extend: {
      backgroundImage:{
        'ImgPl1': "../imageplaceholder.jpg",
        'ImgPl2': "url('/public/img-placeholder2.JPG')"
      }
    },
  },
  plugins: [require("daisyui")],

}

