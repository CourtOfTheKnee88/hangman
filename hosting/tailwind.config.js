/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myWhite': '#EBF8FF'
      },
      fontSize: {
        '40': '40px'
      },
    },
  },
  plugins: [],
}

