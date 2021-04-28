export default function trimLines(text) {
	return text.split('\n')
		.map(ln => ln.trim())
		.join('\n');
}