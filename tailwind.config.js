/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryColor: "#ff7e34",
        grayColor: "#FFFFFF52",
        darkColor: "#1a1a1a",
        blackColor: "#00000038",
        lightColor: "#B8B8B83B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      zIndex: {
        1: "1",
        2: "2",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1350px",
      xl: "1700px",
    },
  },
  plugins: [],
};
