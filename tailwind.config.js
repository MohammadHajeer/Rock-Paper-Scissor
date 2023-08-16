/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-background": "radial-gradient(circle at top, #1f3756,#141539)",
      },
      animation: {
        "hide-diagram": "hide-diagram 0.5s linear forwards",
      },
      keyframes: {
        "hide-diagram": {
          from: {
            transform: "scale(0)",
          },
          to: {
            transform: "scale(1)",
          },
        },
      },
      boxShadow: {
        win: "0 0 0 30px #1f3756, 0 0 0 60px #1f375675, 0 0 0 90px #1f375637",
      },
    },
  },
  plugins: [],
};
