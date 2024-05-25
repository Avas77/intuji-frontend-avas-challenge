/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#E5E5E5",
        gray: "#EAECF0",
        skyblue: "#F4F8FB",
        blue: "#3F9BFC",
        slateGray: "#667085",
      },
    },
  },
  plugins: [],
};
