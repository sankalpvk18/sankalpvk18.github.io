/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#050816",
        primary: {
          DEFAULT: "black", // Fallback color
          // gradient: "linear-gradient(180deg, rgba(21,16,13,1) 0%, rgba(47,43,40,1) 100%)",
        },
        // primary: "#2F2B28",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg.jpg')",
      // },
    },
  },
  plugins: [],
};
