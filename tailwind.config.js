/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      fontFamily: {
        josefinsans: ["Josefin Sans"],
        monserrat: ["Montserrat"],
        nycd : ["Nothing You Could Do"]
      },
    },
  },
  plugins: [],
};
