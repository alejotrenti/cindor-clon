/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				bangers: ['Bangers', "system-ui"],
				staat: ['Staatliches', "system-ui"]
			}
		},
	},
	plugins: [],
}
