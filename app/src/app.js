import * as operations from './operations.js';
import stories from './stories.js';

const args = Object.fromEntries(Deno.args.map(arg => arg.split('=')));

let op = args.operation || 'read';

const opKeys = Object.keys(operations);
if (!opKeys.includes(op)) {
	console.log(`Invalid operation: "${op}". Ficelta can only perform one of the following operations: ${opKeys.join(', ')}.`);
} else {
	operations[op]({ args, stories });
}