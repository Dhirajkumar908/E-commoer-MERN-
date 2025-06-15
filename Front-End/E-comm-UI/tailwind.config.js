/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero_pattern':"url('/src/img/bag1.jpeg')"
      }
    },
  },
  plugins: [],
}