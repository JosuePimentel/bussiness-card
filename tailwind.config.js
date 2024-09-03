/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'default': ['Poppins', 'normal'],
      'Amatic': ['Amatic SC', 'normal']
    },
    colors: {
      'primary': '#D9D9D9'
    },
    extend: {},
  },
  plugins: [],
}
