/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "fha": "#5FAAF0",
        "accept": "#5FC356",
        "decline": "#F96A6A",
      },
    },
  },
  plugins: [],
}