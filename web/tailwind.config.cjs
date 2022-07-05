const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				darkSeaGreen: '#9FC088',
				goldCrayola: '#E8C07D',
				copperRed: '#CC704B',
				darkBrown: '#614124',
				lemonChiffon: '#FCF9C6',
			},
			fontFamily: {
				sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
