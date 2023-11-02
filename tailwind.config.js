/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				bgDark: "#0d1117",
				bgLight: "#f0fcf8",
				textLight: "#b8bcc6",
				textDark: "#5a5f7a",
				textHoverDark: "#313442",
				activeBorderBottom: "#69d3a7",
				primary: " #b63e96",
				primaryDark: "#58e6d9",
				acuaGreen: {
					100: "#5fd3b6",
				},
			},
		},
	},
	plugins: [],
};
