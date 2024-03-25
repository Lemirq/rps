/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'scissors-gradient': 'hsl(39, 89%, 49%)',
				'scissors-gradient-to': 'hsl(40, 84%, 53%)',
				'scissors-shadow': '#C36223',
				'paper-gradient': 'hsl(230, 89%, 62%)',
				'paper-gradient-to': 'hsl(230, 89%, 65%)',
				'paper-shadow': '#2439B4',
				'rock-gradient': 'hsl(349, 71%, 52%)',
				'rock-gradient-to': 'hsl(349, 70%, 56%)',
				'rock-shadow': '#971630',
				'lizard-gradient': 'hsl(261, 73%, 60%)',
				'lizard-gradient-to': 'hsl(261, 72%, 63%)',
				cyan: 'hsl(189, 59%, 53%)',
				'cyan-to': 'hsl(189, 58%, 57%)',
				'dark-text': 'hsl(229, 25%, 31%)',
				'score-text': 'hsl(229, 64%, 46%)',
				'header-outline': 'hsl(217, 16%, 45%)',
				'radial-gradient': 'hsl(214, 47%, 23%)',
				'radial-gradient-to': 'hsl(237, 49%, 15%)',
				'off-white': '#B2B8CE',
				white: '#fff',
			},
			fontFamily: {
				barlow: ['Barlow Semi Condensed', 'sans-serif'],
			},
			fontWeight: {
				600: '600',
				700: '700',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
		},
	},

	plugins: [],
};
