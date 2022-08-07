/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      backgroundColor:{
        stacks: '#DFF6FF'
      },
      transitionDuration: {
        2000: "2000ms",
      },
      },
      dropShadow: {
        "4xl": [
          "0px 0px 20px rgba(255, 221, 31, 0.75)",
          "0 0px 30px rgba(255, 221, 31, 0.95)",
        ],
      },
      animation: {
        "moving-background": "moving-background 5s ease-in-out",
        "float": "float 3s infinite",
        "refloat": "refloat 3s infinite"
      },
      keyframes: {
        "moving-background": {
          "0%": {
            transform: "translateY(0)",
            opacity: 0,
          },
          "66%": {
            opacity: 0.4,
          },
          "100%": {
            transform: "translateY(-150px)",
            opacity: 0,
          },
        },
        float: {
          "0%": {
            transform: "translateY(0px)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(-20px)",
            animationTimingFunction: "ease-in-out",
          },
          "100%": {
            transform: "translateY(0px)",
            animationTimingFunction: "ease-in-out",
          }
      },
      refloat: {
        "0%": {
          transform: "translateY(-20px)",
          animationTimingFunction: "ease-in-out",
        },
        "50%": {
          transform: "translateY(0px)",
          animationTimingFunction: "ease-in-out",
        },
        "100%": {
          transform: "translateY(-20px)",
          animationTimingFunction: "ease-in-out",
        }
      },
      colors: {
        portfolio: {
          dark: {
            100: "#414141",
            200: "#000000",
            300: "#19282F"
          },
          red: {
            100: "#3D0000",
            200: "#950101",
            300: "#541212",
          },
        },
      },
    },
  },
};
