/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "",
        primary: "",
        accent: "",
      },

      fontFamily: {
        light: ["-Light", "sans-serif"],
        regular: ["-Regular", "sans-serif"],
        medium: ["-Medium", "sans-serif"],
        semibold: ["-Semibold", "sans-serif"],
        bold: ["Satshi-Bold", "sans-serif"],
        black: ["-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
