export default function margin(text, [v1, v2, v3, v4], { trimNewLines = false } = {}) {
	let top = 0, right = 0, bottom = 0, left = 0;
	const nArgs = [v1, v2, v3, v4].filter(val => typeof val !== 'undefined').length;
	if (nArgs === 2) {
		top = v1;
		bottom = v1;
		left = v2;
		right = v2;
	}
	if (nArgs >= 3) {
		top = v1;
		right = v2;
		bottom = v3;
		if (typeof v4 !== 'undefined') {
			left = v4;
		}
	}
	const topLines = '\n'.repeat(v1);
	const bottomLines = '\n'.repeat(v4) + '\n';
	const lines = text.split('\n').map(line => `${' '.repeat(left)}${line}${' '.repeat(right)}`);
	let out = `${topLines}${lines.join('\n')}${bottomLines}`;
	if (trimNewLines) out = out.replace(/^\n+|\n+$/g, '');
	return out;
}