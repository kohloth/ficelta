export function afterReaderName({ answers } = {}) {
	const { readerName = '' } = answers;
	return {
		pageKey: 'afterReaderName',
		paths: {
			main: {
				pageText: `Thats right, ${readerName ? `you are ${readerName}.` : `you have no name, you somehow lost it in an ill-fated snooker bet when you were young.`} You are the kind of person who has to inspect danger to feel safe.`,
				newPageKey: 'item',
			},
			ash: {
				pageText: 'Oh. You would not like this story.',
				newPageKey: false,
			},
		},
		path: readerName.toLowerCase() === 'ash' ? 'ash' : 'main',
	};
}