import { figlet, readLines, goUp, hideCursor, showCursor, readKeypress } from '../deps.js'
import { selectStory, border, margin, button, write, finish, trimLines } from '../appUtils.js';
import * as pageUtils from '../pageUtils.js';

export default async function read({ args, stories }) {

	hideCursor();
	write(margin(border(await figlet('Ficelta')), [1, 1]), { wrap: false });
	write('Welcome to Ficelta; interactive fiction reader.');
	write('Which story do you want to enter?');
	write('');
	
	const { storyKey, story } = await selectStory({ args, stories });

	const { pages, firstPageKey } = story;

	let currentPageKey = firstPageKey;
	let currentOptionIndex = 0;

	let answers = {};

	let keepStepping = true;

	async function renderPage(page) {
		const { paths, path } = page({ currentPageKey, answers, pageUtils });
		const { pageText, question, newPageKey } = paths[path];
		const pageHasContent = pageText || question;
		if (pageHasContent) write('');
		if (pageText) write(trimLines(pageText));
		let answer;
		if (question) {
			write(question.text);
			if (question.options) {
				write('');
				currentOptionIndex = 0;
				const optionEntries = Object.entries(question.options);
				renderOptions(optionEntries);
				for await (const keypress of readKeypress()) {
					if (keypress.ctrlKey && keypress.key === 'c') {
						finish();
					}
					if (keypress.key === 'up' && currentOptionIndex !== 0) {
						currentOptionIndex--;
						await goUp(optionEntries.length);
						renderOptions(optionEntries);
					}
					if (keypress.key === 'down' && currentOptionIndex !== optionEntries.length - 1) {
						currentOptionIndex++;
						await goUp(optionEntries.length);
						renderOptions(optionEntries);
					}
					if (keypress.key === 'return') {
						answer = optionEntries[currentOptionIndex][0];
						break;
					}
				}
			} else {
				write('');
				showCursor();
				for await (const line of readLines(Deno.stdin)) {
					if (line === 'exit') {
						keepStepping = false;
						write('Bye');
					} else {
						answer = line;
						hideCursor();
						break;
					}
				}
			}
		} else if (pageHasContent) {
			write('');
			write(button('Press enter to continue'));
			for await (const keypress of readKeypress()) {
				if (keypress.ctrlKey && keypress.key === 'c') {
					finish();
				}
				if (keypress.key === 'return') {
					break;
				}
			}
		}
		return {
			newPageKey,
			pageText,
			question,
			answer,
		};
	}

	async function renderOptions(optionEntries) {
		optionEntries.forEach(([opKey, opVal], opIndex) => {
			write(`${opIndex === currentOptionIndex ? '>' : ' '} ${opVal}`)
		});
	}

	async function step() {
		const { newPageKey, question, answer } = await renderPage(pages[currentPageKey]);
		if (typeof answer !== 'undefined') {
			answers[question.key] = answer;
		}
		if (typeof newPageKey !== 'undefined') {
			currentPageKey = newPageKey;
		}
		if (newPageKey === false) {
			finish('\n\nThanks for playing. Exiting Ficelta.\n\n');
		}
	}

	while (keepStepping) {
		if (!pages[currentPageKey]) {
			keepStepping = false;
			write('');
			write('Oops, I have made a mistake.');
			write('');
		}
		else {
			await step();
		}
	}
}