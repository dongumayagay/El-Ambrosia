// const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const daisyui = require("daisyui")

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				anton: 'anton',
				mestizo: 'mestizo'
			}
		}
	},

	plugins: [forms,daisyui]
};

module.exports = config;