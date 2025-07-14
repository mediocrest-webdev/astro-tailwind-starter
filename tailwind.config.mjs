/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },

    extend: {
      // 🌈 Enhanced Brand Colors & Semantic Tokens
      colors: {
        primary: {
          50: "#f3e8ff",
          100: "#e9d5ff",
          200: "#d8b4fe",
          300: "#c084fc",
          400: "#a855f7",
          500: "#9333ea",    // Main brand color
          600: "#7c3aed",    // DEFAULT
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
          DEFAULT: "#6200ee",
          foreground: "#ffffff",
        },
        secondary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",    // DEFAULT
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
          DEFAULT: "#03dac6",
          foreground: "#000000",
        },
        
        // Neutral palette
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },

        // Semantic colors
        background: {
          DEFAULT: "#ffffff",
          secondary: "#f8fafc",
          muted: "#f1f5f9",
        },
        surface: {
          DEFAULT: "#ffffff",
          secondary: "#f8fafc",
          hover: "#f1f5f9",
        },
        
        // Status colors
        success: {
          DEFAULT: "#10b981",
          foreground: "#ffffff",
          light: "#d1fae5",
          dark: "#047857",
        },
        warning: {
          DEFAULT: "#f59e0b",
          foreground: "#ffffff",
          light: "#fef3c7",
          dark: "#d97706",
        },
        error: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
          light: "#fee2e2",
          dark: "#dc2626",
        },
        info: {
          DEFAULT: "#3b82f6",
          foreground: "#ffffff",
          light: "#dbeafe",
          dark: "#1d4ed8",
        },

        // Border colors
        border: {
          DEFAULT: "#e2e8f0",
          secondary: "#cbd5e1",
          muted: "#f1f5f9",
        },

        // Text colors
        text: {
          DEFAULT: "#0f172a",
          secondary: "#64748b",
          muted: "#94a3b8",
          disabled: "#cbd5e1",
          inverse: "#ffffff",
        },

        // Accent colors for highlights
        accent: {
          DEFAULT: "#8b5cf6",
          foreground: "#ffffff",
        },

        // Destructive actions
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },

        // Muted elements
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },

        // Popover backgrounds
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },

        // Card backgrounds
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
      },

      // 🌐 Enhanced Font System
      fontFamily: {
        sans: [
          "'General Sans'",
          "'Inter'",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji"
        ],
        display: [
          "'Inter'",
          "'General Sans'",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        mono: [
          "'Fira Code'",
          "'JetBrains Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace"
        ],
      },

      // 📏 Enhanced Spacing System
      spacing: {
        "0": "0px",
        "px": "1px",
        "0.5": "0.125rem",    // 2px
        "1": "0.25rem",       // 4px
        "1.5": "0.375rem",    // 6px
        "2": "0.5rem",        // 8px
        "2.5": "0.625rem",    // 10px
        "3": "0.75rem",       // 12px
        "3.5": "0.875rem",    // 14px
        "4": "1rem",          // 16px
        "5": "1.25rem",       // 20px
        "6": "1.5rem",        // 24px
        "7": "1.75rem",       // 28px
        "8": "2rem",          // 32px
        "9": "2.25rem",       // 36px
        "10": "2.5rem",       // 40px
        "11": "2.75rem",      // 44px
        "12": "3rem",         // 48px
        "14": "3.5rem",       // 56px
        "16": "4rem",         // 64px
        "20": "5rem",         // 80px
        "24": "6rem",         // 96px
        "28": "7rem",         // 112px
        "32": "8rem",         // 128px
        "36": "9rem",         // 144px
        "40": "10rem",        // 160px
        "44": "11rem",        // 176px
        "48": "12rem",        // 192px
        "52": "13rem",        // 208px
        "56": "14rem",        // 224px
        "60": "15rem",        // 240px
        "64": "16rem",        // 256px
        "72": "18rem",        // 288px
        "80": "20rem",        // 320px
        "96": "24rem",        // 384px
      },

      // 🔠 Enhanced Typography Scale
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.025em" }],
        sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.025em" }],
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0em" }],
        lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "-0.025em" }],
        xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.025em" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.025em" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "-0.025em" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.025em" }],
        "5xl": ["3rem", { lineHeight: "1.16", letterSpacing: "-0.025em" }],
        "6xl": ["3.75rem", { lineHeight: "1.16", letterSpacing: "-0.025em" }],
        "7xl": ["4.5rem", { lineHeight: "1.16", letterSpacing: "-0.025em" }],
        "8xl": ["6rem", { lineHeight: "1.16", letterSpacing: "-0.025em" }],
        "9xl": ["8rem", { lineHeight: "1.16", letterSpacing: "-0.025em" }],
      },

      // ☁️ Enhanced Shadow System
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        DEFAULT: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        md: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        lg: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        xl: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        
        // Custom shadows for components
        card: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        dropdown: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        modal: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      },

      // 🎨 Border Radius System
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },

      // ⚡ Animation & Transitions
      animation: {
        // Existing animations
        'spin': 'spin 1s linear infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        
        // Custom animations
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-in-up': 'slideInUp 0.5s ease-out',
        'slide-in-down': 'slideInDown 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'scale-out': 'scaleOut 0.2s ease-in',
        'shake': 'shake 0.5s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
      },

      // 🎬 Keyframes for animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      // 🎭 Transition Properties
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform',
        'filter': 'filter',
        'backdrop-filter': 'backdrop-filter',
      },

      // ⏱️ Transition Durations
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
        'slower': '1000ms',
      },

      // 🌊 Transition Timing Functions
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-out': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'snappy': 'cubic-bezier(0.4, 0, 0.6, 1)',
      },

      // 📐 Enhanced Breakpoints
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        
        // Custom breakpoints
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        
        // Height breakpoints
        'tall': { 'raw': '(min-height: 800px)' },
        'short': { 'raw': '(max-height: 600px)' },
      },

      // 🎯 Z-Index Scale
      zIndex: {
        'hide': '-1',
        'auto': 'auto',
        'base': '0',
        'docked': '10',
        'dropdown': '1000',
        'sticky': '1100',
        'banner': '1200',
        'overlay': '1300',
        'modal': '1400',
        'popover': '1500',
        'skipLink': '1600',
        'toast': '1700',
        'tooltip': '1800',
      },
    },
  },

  // 🌙 Enhanced Dark Mode
  darkMode: ["class", '[data-theme="dark"]'],

  // 🧩 Recommended Plugins
  plugins: [
    // Uncomment these as needed:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),
    // require('tailwindcss-animate'),
    // require('@tailwindcss/line-clamp'),
  ],

  // 🎯 Future flags for upcoming features
  future: {
    hoverOnlyWhenSupported: true,
  },

  // 🔧 Experimental features
  experimental: {
    // Enable when ready
    // optimizeUniversalDefaults: true,
  },
};