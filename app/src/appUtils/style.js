import { ink } from '../deps.js';
import margin from './margin.js';

const bools = 'bold,italic,underline,strikethrough,inverted,dim,hidden'.split(',');
const supportedCols = 'black,white,red,green,blue,magenta,cyan,yellow'.split(',');

export default function style(text, {
	fg,
	bg,
	bold = false,
	italic = false,
	underline = false,
	strikethough = false,
	inverted = false,
	dim = false,
	hidden = false,
}) {
	const boolParams = [bold, italic, underline, strikethough, inverted, dim, hidden];
	let output = text;
	if (fg && !supportedCols.includes(fg)) throw new Error(`Invalid fg colour: "${fg}"`);
	if (bg && !supportedCols.includes(bg)) throw new Error(`Invalid bg colour: "${fg}"`);
	if (fg) output = `<${fg}>${output}</${fg}>`;
	if (bg) output = `<bg-${bg}>${output}</bg-${fg}>`;
	bools.forEach(bool => {
		if (boolParams[bool]) {
			output = `<${bool}>output</${bool}>`;
		}
	});
	return ink.colorize(output);
}