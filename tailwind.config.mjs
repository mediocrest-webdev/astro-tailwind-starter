/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '',   
				secondary: '', 
				accent: '',   
			  },
			  fontSize: {
				'caption': ['0.75rem', { lineHeight: '1.25rem', letterSpacing: '0.1em' }],  // Small text for captions
				'body-sm': ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '0.05em' }], // Smaller body text
				'body': ['1rem', { lineHeight: '1.75rem', letterSpacing: '0' }],           // Default body text size
				'body-lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0' }],    // Larger body text for readability
				'heading-sm': ['clamp(1.25rem, 1.5vw + 1rem, 1.5rem)', { lineHeight: '1.5rem', letterSpacing: '0.025em' }], // Main headings
				'heading-md': ['clamp(1.5rem, 2vw + 1rem, 2rem)', { lineHeight: '1.5rem', letterSpacing: '0' }], // Key section headings
				'heading-lg': ['clamp(1.875rem, 2.5vw + 1rem, 2.5rem)', { lineHeight: '1.5rem', letterSpacing: '0' }], // Primary page headings
				'heading-xl': ['clamp(2.25rem, 3vw + 1rem, 3rem)', { lineHeight: '1.5rem', letterSpacing: '0' }], // Large hero section headings
				'headline': ['clamp(3rem, 4vw + 1rem, 4rem)', { lineHeight: '1.5rem', letterSpacing: '0.05em' }], // Biggest headlines for marketing
			  },
		},
	},
	plugins: [],
}
