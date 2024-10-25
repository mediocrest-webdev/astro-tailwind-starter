/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "",
        contrast: "",
        primary: "",
        accent: "",
      },
      fontSize: {
        xs: "", 
        sm: "", 
        base: "1em", 
        lg: "", 
        xl: "", 
        "2xl": "", 
        "3xl": "", 
        "4xl": "", 
        "5xl": "", 
      },
      spacing: {
        0: "0", 
        xs: "", 
        sm: "", 
        md: "", 
        lg: "", 
        xl: "", 
        "2xl": "", 
        "3xl": "",
        "4xl": "",
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
