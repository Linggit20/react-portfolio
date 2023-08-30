/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "primary" : "#8685EF",
        "50": "#333140",
        "100" : "#1E1E1E",
      },
    },
  },
  plugins: [],
}

