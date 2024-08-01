/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        f1regular: ['Formula1-regular', 'sans-serif'],
        f1bold: ['Formula1-bold', 'sans-serif'],
        f1wide: ['Formula1-wide', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

