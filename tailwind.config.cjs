/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				body: 'Consolas'
			},

			fontSize: ['responsive', 'hover', 'focus', 'group-hover'],
			margin: ['responsive', 'hover', 'focus', 'group-hover'],
			textColor: ['responsive', 'hover', 'focus', 'group-hover']
		}
	},
	plugins: [require('tailwind-scrollbar-hide')]
};
