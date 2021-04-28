import { write } from '../appUtils.js';
import { showCursor } from '../deps.js';

export default async function finish(message) {
	if (message) write(message);
	showCursor();
	Deno.exit(0);
}