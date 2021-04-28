export function readerName() {
	return {
		pageKey: 'readerName',
		paths: {
			main: {
				pageText: 'Sat at your desk you regard the room in low lamp light. Then, you look in the mirror at yourself.',
				question: {
					key: 'readerName',
					text: 'What is your name?'
				},
				newPageKey: 'afterReaderName',
			}
		},
		path: 'main',
	}
}