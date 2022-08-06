/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      dropShadow: {
        "4xl": [
          "0px 0px 20px rgba(255, 221, 31, 0.75)",
          "0 0px 30px rgba(255, 221, 31, 0.95)",
        ],
      },
      animation: {
        "moving-background": "moving-background 5s ease-in-out",
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
      },
      colors: {
        portfolio: {
          dark: {
            100: "#414141",
            200: "#000000",
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
