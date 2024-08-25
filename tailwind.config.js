/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-utama": "#f4f9f4",
        primary: "#a7d7c5",
        second: "#74b49b",
        third: "#5c8d89",
      },
    },
  },
  plugins: [],
};
