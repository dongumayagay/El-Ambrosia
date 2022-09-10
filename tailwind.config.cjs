// const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			sm: '640px',

			md: '768px',

			lg: '1024px',

			xl: '1280px'
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
				sm: '0'
			}
		},
		extend: {
			fontFamily: {
				anton: 'anton',
				mestizo: 'mestizo'
			}
		}
	},

	plugins: [forms]
};

module.exports = config;