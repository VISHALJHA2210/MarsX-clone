/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customGray: "#848585", // Use a unique key to avoid overwriting default colors
        customOrange:"#FF5E20",
        footerBG: "#FAFAFD"
      },
      fontFamily: {
        blk: ['blk', 'sans-serif'],
        boldFont: ['boldFont', 'sans-serif'],
        xbold: ['xbold', 'sans-serif'],
        light: ['light', 'sans-serif'],
        medium: ['medium', 'sans-serif'],
        regular: ['regular', 'sans-serif'],
        semibold: ['semibold', 'sans-serif'],
        thin: ['thin', 'sans-serif'],
        ultralight: ['ultralight', 'sans-serif'],
        default:['sans-serif','serif'],
      },
    },
  },
  plugins: [],
};
