export default function border(text, { borderChar = '#' } = {}) {
	const rawLines = text.split('\n');
	const width = rawLines.reduce((acc, cur) => Math.max(cur.length, acc), 0);
	const horzBorder = borderChar.repeat(width + 4);
	const lines = rawLines.map(line => (`${borderChar} ${line || ' '.repeat(width)} ${borderChar}`));
	return `${horzBorder}\n${lines.join('\r\n')}\n${horzBorder}`;
}