/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mysm: "375px",
      },

      keyframes: {
        introSlideIn: {
          0: { transform: "translateX(500px) scale(.2)" },
          "100%": { transform: "translateX(0px) scale(1)" },
        },
        introSlideUp: {
          0: { transform: "translateY(300px)" },
          "100%": { transform: "translateY(0px)" },
        },
        introExpand: {
          0: { transform: "translateX(1400px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        "introSlideIn-title": "introSlideIn 0.8s ease forwards .5s",
        "introSlideUp-button": "introSlideUp 0.8s ease-in-out forwards 1.5s",
        "introSlideUp-description":
          "introSlideUp 0.8s ease-in-out forwards 0.8s",
        "introSlideIn-profileImg": "introSlideIn 1.5s ease-in-out forwards 1s",
        "introExpand-container": "introExpand 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};
