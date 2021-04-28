export function action({ answers } = {}) {
	const { item } = answers;
	return {
		pageKey: 'action',
		paths: {
			main: {
				pageText: (() => {
					let itemDescr = '';
					if (item === 'knife') itemDescr = 'bowie knife. It is 12 inches long and sharp enough to cut the ears off a tardigrade. You feel good about this choice.';
					if (item === 'bat') itemDescr = 'baseball bat. It is signed by Ty Cobb and is sturdier than a really sturdy thing. You feel good about this choice.';
					if (item === 'cheese') itemDescr = 'small piece of cheese. You question your choice of armament for a moment, then you remember your new year\'s resolution to get more calcium, and quickly decide it was probably the most sensible thing to bag after all.';
					return `You pick up the ${itemDescr} You move confidently towards the door and open it slowly...`;
				})(),
				newPageKey: 'end',
			}
		},
		path: 'main',
	}
}