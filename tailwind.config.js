/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        consolas: ["Consolas", "monospace"], // Example for Consolas font
        "netflix-sans": ["Netflix Sans", "sans-serif"], // Example for Netflix Sans font
      },
      backgroundImage: {
        "radial-grey":
          "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(30, 41, 59, 0.9) 100%)",
      },
    },
  },
  plugins: [],
};