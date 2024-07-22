/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'maxw': {'maxw': '1080px'},
      },      
      fontFamily: {
        josefinsans: ["Josefin Sans"],
        monserrat: ["Montserrat"],
        nycd : ["Nothing You Could Do"]
      },
    },
  },
  plugins: [],
};
