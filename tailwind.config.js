/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "5px 4px 246px 114px #33C052",
      },
    },
  },
  plugins: [],
};
