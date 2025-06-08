/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6200ee", // Material Indigo
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#03dac6", // Material Teal Accent
          foreground: "#000000",
        },
        background: "#f5f5f5",
        surface: "#ffffff",
        error: "#b00020",
        text: {
          primary: "#212121",
          secondary: "#757575",
          disabled: "#bdbdbd",
          inverse: "#ffffff",
        },
        border: "#e0e0e0",
      },

      fontFamily: {
        sans: ["'General Sans'", "ui-sans-serif", "system-ui"],
        display: ["'Inter'", "sans-serif"],
      },

      spacing: {
        // Material 8dp scale
        "0": "0px",
        "1": "0.25rem",   // 4px
        "2": "0.5rem",    // 8px
        "3": "0.75rem",   // 12px
        "4": "1rem",      // 16px
        "5": "1.5rem",    // 24px
        "6": "2rem",      // 32px
        "7": "3rem",      // 48px
        "8": "4rem",      // 64px
      },

      fontSize: {
        // Material style typography scale
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
      },

      boxShadow: {
        // Material Elevation Shadows
        sm: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        DEFAULT: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        md: "0px 4px 10px rgba(0, 0, 0, 0.12)",
        lg: "0px 6px 16px rgba(0, 0, 0, 0.1)",
        xl: "0px 8px 24px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
