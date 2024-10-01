/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				text: '', //for texts
				background: '', //background color
				primary: '',     
				secondary: '', 
				accent: '',   
			  },
			  fontSize: {
				'body-sm': '.5rem', // Smaller body text
				'body': '1rem',           // Default body text size
				'body-lg': '1.5rem',    // Larger body text for readability
				'heading-sm': '2rem', // Main headings
				'heading-md': '2.5rem', // Key section headings
				'heading-lg': '3rem', // Primary page headings
				'heading-xl': '3.5rem', // Large hero section headings
				'headline': '', // Biggest headlines for marketing
			  },
			  space: {
				'xs':'2px',
				'sm':'4px',
				'md':'8px',
				'lg':'16px',
				'xl':'24px',
				'2xl':'32px',
			  },
		},
	},
	plugins: [],
}
