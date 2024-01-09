/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      
      'poppins': ['Poppins', 'sans-serif'],
  
    },
    extend: {
      colors: {
        'color1': '#1877F2',
        'color2': '#36A420',
      },
    },
  },
  plugins: [],
}