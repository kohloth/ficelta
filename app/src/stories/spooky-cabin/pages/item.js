export function item({ answers } = {}) {
	const { name } = answers;
	return {
		pageKey: 'item',
		paths: {
			main: {
				question: {
					key: 'item',
					text: 'You decide you will leave the cabin. But before you go, you feel you should pick up some kind of weapon. You look at the table. What item will you pick up to protect you against the minions of adversity?',
					options: {
						knife: 'Knife',
						bat: 'Baseball Bat',
						cheese: 'A small piece of cheese',
					},
				},
				newPageKey: 'action',
			}
		},
		path: 'main',
	};
}