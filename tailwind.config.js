/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	daisyui: {
		themes: ["light", "dark", "retro"],
		darkTheme: "dracula",
	},
};
