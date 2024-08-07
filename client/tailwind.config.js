/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jumper: ['JumperPERSONALUSEONLY-Regular',],
        manrope: ['Manrope-Regular'],
        mohol: ['Mohol-Regular'],
      },
      colors: {
        'primaryBlack': '#0D0D0D',
        'secondaryBlack': '#000000',
        'primaryGreen': '#88F67E',
        'primaryBorder': '#313D4F',
        'cardBG': '#0d0d0d'
      },
      fontSize: {
        'headerText': '2.5rem',
      },
      borderRadius: {
        'cardRadius': '2xl'
      },
      borderColor: {
        borderInput: '#454545'
      }
    },
  },
  plugins: [],
}