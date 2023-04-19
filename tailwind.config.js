/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        button: "4px 4px black",
      },
      fontFamily: {
        cursive: "cursive",
        yfs: "YummyFoodies",
      },
      fontSize: {
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
      },
      margin: {
        58: "232px",
      },
      spacing: {
        106: "424px",
        108: "432px",
      },
    },
  },
  plugins: [],
};
