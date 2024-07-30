/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primaryBlack': '#0D0D0D',
        'secondaryBlack': '#000000',
        'primaryGreen': '#88F67E',
        'primaryBorder': '#313D4F'
      },
      fontSize: {
        'headerText': '2.5rem',
      },
      borderRadius: {
        'cardRadius': '2xl'
      }
    },
  },
  plugins: [],
}