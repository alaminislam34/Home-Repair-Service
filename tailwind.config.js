/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        servicePage: "url('./src/assets/Banner/service.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
