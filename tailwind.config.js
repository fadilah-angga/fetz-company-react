/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        customBlue: "#0172AF", 
        customGreen: "#74FEBD", 
        customWhite: "#F8F8FF", 
        customBlack: "#101720", 
      },
    },
  },
  plugins: [],
};
