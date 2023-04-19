/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: "cursive",
      },
      boxShadow: {
        button: "4px 4px black",
      },
    },
  },
  plugins: [],
};
