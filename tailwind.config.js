/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#032541",
        white: "#FFFFFF",
        color: "rgb(30,213,169)",
        color2: "rgb(1,180,228;)",
        "join-color": "#01B4E4",
      },
    },
  },
  plugins: [],
};
