/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gellix: ['Gellix', 'system-ui', 'sans-serif'],
      },
    },
  },
 plugins: [
  require('tailwind-scrollbar-hide')  // Install via: npm i -D tailwind-scrollbar-hide
],
}
