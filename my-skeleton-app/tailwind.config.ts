import { join } from 'path'
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		fontSize: {
			xs: '0.7rem',
			sm: '0.9rem',
			base: '1rem',
			xl: '1.75rem',
			'2xl': '2.563rem',
			'3xl': '3.953rem',
			'4xl': '4.441rem',
			'5xl': '5.052rem',
		},
		extend: {},
	},
	plugins: [
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true,
					},
				],
			},
		}),
	],
} satisfies Config;
