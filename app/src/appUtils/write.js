import { wrap } from '../deps.js';

export default function write(text, {
	wrap: doWrap = true
} = {}) {
	let output = text;
	if (doWrap){
		let width = Deno.consoleSize().columns - 10;
		output = wrap(text, { width });
	}
	console.log(output);
}