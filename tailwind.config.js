/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        skillbg: "#d6edf9",
      },
      fontFamily: {
        pretendard: ["Pretendard"],
        Nanum: ["NanumSquare"],
      },
      screens: {
        mysm: "375px",
      },
      transitionProperty: {
        mobileMenu: "height , color",
        width: "width",
        margin: "margin",
      },
      transitionDuration: {
        4000: "4000ms",
      },

      keyframes: {
        ProejctOn: {
          0: { opacity: 0 },
          "100%": { opacity: 1 },
        },
        ProejctOff: {
          0: { opacity: 1 },
          "100%": { opacity: 0 },
        },
        modalPop: {
          0: { transform: " scale(0.95)", opacity: 0 },
          "50%": { transform: " scale(0.95)", opacity: 0.7 },
          "100%": { transform: " scale(1)", opacity: 1 },
        },
        introSlideIn: {
          0: { transform: "translateX(500px) scale(.2)" },
          "100%": { transform: "translateX(0px) scale(1)" },
        },
        introSlideInTitle: {
          0: { transform: "translateX(500px) ", opacity: 0 },
          "50%": { opacity: 0.5 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
        introPopUp: {
          "0%": { opacity: 0, transform: "scale(0)" },
          "50%": { opacity: 0.5, transform: "scale(1.05)" },
          "100%": { opacity: 1, transform: "scale(1)" },
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
        "Modal-on": "modalPop 0.5s forwards",
        "ProejctAni-On": "ProejctOn 0.3s ",
        "ProejctAni-Off": "ProejctOff 1s ",
        "introSlideIn-title": "introSlideInTitle .5s ease forwards .5s",
        "introSlideUp-button": "introSlideUp 0.8s ease-in-out forwards 1.5s",
        "introSlideUp-description":
          "introSlideUp 0.8s ease-in-out forwards 0.8s",
        "introSlideIn-profileImg": "introSlideIn 1.5s ease-in-out forwards 1s",
        "introPopUp-profileImg": "introPopUp 0.7s ease-in-out forwards 1s",
        "introExpand-container": "introExpand 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
