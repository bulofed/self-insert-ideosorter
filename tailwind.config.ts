import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['DM Sans', 'sans-serif'],
		}
	},

	plugins: [],

	darkMode: 'class'
} satisfies Config;
