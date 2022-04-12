import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import UnoCss from '@unocss/vite';
import { extractorSvelte } from '@unocss/core';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';

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
								{ landbox: 'w-full h-124 rounded-3xl px-16'},
								{ redbox: 'px-10 py-5 bg-red'},
							],
							presets: [
								presetUno(),
								presetIcons({
									extraProperties: {
										'display': 'inline-block',
										'vertical-align': 'middle',
									},
								})
							],
						}),
					],
				},
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
