import { assert } from '../deps.js';
import margin from './margin.js';

Deno.test("Left and right margins", () => {
	const result = margin('hello', [0, 1], { trimNewLines: true });
	const expected = ' hello '
	console.log({ result })
	assert(result === expected);
});