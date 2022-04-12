import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import UnoCss from '@unocss/vite';
import { extractorSvelte } from '@unocss/core';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import presetWebFonts from '@unocss/preset-web-fonts';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		vite: {
			plugins: [
				UnoCss({
					extractors: [extractorSvelte],
					shortcuts: [
						{ landbox: 'w-full h-124 rounded-3xl px-16' },
						{ redbox: 'px-10 py-5 bg-red' }
					],
					presets: [
						presetUno(),
						presetWebFonts({
							provider: 'google', // default provider
							fonts: {
								// these will extend the default theme
								sans: 'Roboto',
								mono: ['Fira Code', 'Fira Mono:400,700'],
								// custom ones
								grotesk: {
									name: 'Space Grotesk',
									weights: ['400', '700']
								},
								lato: [
									{
										name: 'Lato',
										weights: ['400', '700'],
										italic: true
									},
									{
										name: 'sans-serif',
										provider: 'none'
									}
								]
							}
						}),
						presetIcons({
							extraProperties: {
								display: 'inline-block',
								'vertical-align': 'middle'
							}
						})
					]
				})
			]
		},
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
