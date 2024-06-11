/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        hijau: "#00897B",
        "hijau-muda": "#44C2AC",
        grey: "#D9D9D9",
        stroke: "#DBEEEC",
        abu: "#A5A5A5",
      },
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"]
    },
    },
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "3rem"
      }
    }
  },
  plugins: [],
}

