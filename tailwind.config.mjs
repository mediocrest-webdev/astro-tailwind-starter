/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				text:"",
				contrast:"",
				primary: "", 
				accent: "",
			  },
			  fontSize: {
				xs: "", // Small text for captions
				sm: "", // Smaller body text
				base: "1em", // Default body text size for readability
				lg: "", // Larger body text, good for subheadings
				xl: "", // Main headings or larger emphasis
				"2xl": "", // Key section headings
				"3xl": "", // Primary page headings
				"4xl": "", // Large hero section headings
				"5xl": "", // Biggest headlines for marketing
			  },
		},
	},
	plugins: [],
}
