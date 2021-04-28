import { goUp, readKeypress } from '../deps.js';
import { finish } from '../appUtils.js';

export default async function ({ args, stories }) {

	let storyKey;
	const storyKeys = Object.keys(stories);
	if (storyKeys.length === 0) {
		finish('No stories found');
	} else if (storyKeys.length === 1) {
		storyKey = storyKeys[0];
	} else {
		if (args.story) {
			storyKey = args.story;
		} else {
			let currentStoryIndex = 0;
			const storyEntries = Object.entries(stories);
			async function renderStorys() {
				storyEntries.forEach(([opKey, opVal], opIndex) => {
					console.log(`${opIndex === currentStoryIndex ? '>' : ' '} ${opVal.title}`)
				});
			}
			renderStorys();
			for await (const keypress of readKeypress()) {
				if (keypress.ctrlKey && keypress.key === 'c') {
					Deno.exit(0);
				}
				if (keypress.key === 'up' && currentStoryIndex !== 0) {
					currentStoryIndex--;
					await goUp(storyEntries.length);
					renderStorys(storyEntries);
				}
				if (keypress.key === 'down' && currentStoryIndex !== storyEntries.length - 1) {
					currentStoryIndex++;
					await goUp(storyEntries.length);
					renderStorys(storyEntries);
				}
				if (keypress.key === 'return') {
					storyKey = storyEntries[currentStoryIndex][0];
					break;
				}
			}
		}
	}

	const story = stories[storyKey];
	return { storyKey, story };
}