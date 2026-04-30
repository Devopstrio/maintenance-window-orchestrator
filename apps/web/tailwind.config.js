/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
        },
        amber: {
          500: '#f59e0b',
          600: '#d97706',
        },
        rose: {
          600: '#e11d48',
        }
      },
    },
  },
  plugins: [],
}
