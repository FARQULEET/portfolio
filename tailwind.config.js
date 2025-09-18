import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: colors.gray, // keep Tailwind’s gray scale
      },
    },
  },
  plugins: [],
}
