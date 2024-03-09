/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        almostWhite: "hsl(0, 0%, 98%)",
        mediumGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 8%)",
      },
      fontSize: {
        default: "18px",
      },
      fontFamily: {
        default: '"Epilogue", sans-serif',
      },
      height: {
        navMobile: "calc(100vh - 64px)",
      },
      boxShadow: {
        navMobile: "2px 2px 12px 0 hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
