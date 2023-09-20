/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      'blackShunya':'#131313',
    'greenLight':'#bad8a0',
    'greenDark': '#cfb53b ',
    'limeLight': '#C0D065',
    'limeDark': '#C0D688',
    'golden': '#FCA311',
    },
    fontFamily:{
      custom1:["Custom-1", "sans-serif"],
      custom2:["Custom-2", "sans-serif"],
      custom3:["Custom-3", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
