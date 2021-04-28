import { style } from '../appUtils.js';

export function button(text) {
	return style(text, {
		dim: true,
		fg: 'white',
		bg: 'black',
	});
}