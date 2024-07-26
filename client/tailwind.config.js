/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primaryBlack': '#0D0D0D',
        'secondaryBlack': '#000000',
        'primaryGreen': '#88F67E',
      },
      fontSize: {
        'headerText': '2.5rem',
    },
    },
  },
  plugins: [],
}