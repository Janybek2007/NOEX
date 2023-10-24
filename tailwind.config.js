/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				black: 'var(--BLack)',
				blackSecond: 'var(--Black-Second)',
				grayLight: 'var(--Gray-Light)',
				grayMain: 'var(--Gray-main)',
				grayDark: 'var(--Gray-Dark)',
				gray: 'var(--Gray)',
				yellow: 'var(--Yellow)',
				green: 'var(--Green)',
				white_20: 'var(--white-20)'
			},
			fontFamily: {
				Mont: 'var(--Mont)',
				Roboto: 'var(--Roboto)',
				CN: 'var(--CourierNew)'
			}
		}
	},
	plugins: []
}
