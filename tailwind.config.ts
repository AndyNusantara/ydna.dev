import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				detailLight: '#543A14',
				detailDark: '#F0BB78'
			},
			fontFamily: {
				jersey: ['var(--font-jersey-15)'],
				mono: ['var(--font-geist-mono)']
			}
		}
	},
	plugins: []
} satisfies Config
