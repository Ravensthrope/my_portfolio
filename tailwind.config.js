/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        underline: "transform, opacity",
      },
      animation: {
        moveX: "moveX 1s infinite",
      },
      keyframes: {
        moveX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
