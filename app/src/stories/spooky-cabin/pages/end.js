export function end({ answers } = {}) {
	const { item } = answers;
	return {
		pageKey: 'end',
		paths: {
			main: {
				pageText: (() => {
					if (item === 'bat') {
						return `The moment you step out of the door, you are attacked by a giant cream cracker. You try to swing at it with your bat, but the cracker simply falls apart into smaller pieces that continue to attack you like some kind of dry, fibrous swarm. "If only I had picked up the cheese" you think to yourself as the crackers stamp you into the ground.`;
					}
					if (item === 'knife') {
						return `You step out of the door when suddenly, you are attacked by a giant cream cracker. You want to use your knife to fight back, but you realise its completely the wrong kind of knife for a cracker. The cracker pushes you over and as it squashes you under its glutenous weight, you can't help but think to yourself: "If only I had picked up the cheese"...`;
					}
					if (item === 'cheese') {
						return `You step out of the door with the small piece of cheese held tightly in your fist. But not too tightly, as you do not wish to spoil it. Suddenly, a giant cream cracker appears in the periphery of your vision and demands that you bow down to it as your new lord and master.
						
						"Never..." you say with a grim snarl. "I have...CHEESE!"

						And with that, you focibly punch the cheese lump into the cracker, rubbing the pungent, yellow matter into it's crackery face. Its only a modest smattering of cheese, but its enough to make the cracker know that you mean business.

						The cracker walks away slowly, dejected and defeated, its ego utterly crushed...

						You stand proud, as squirrels and deers rush to bask in your heroic aura. You saved earth with only a small piece of cheese. Congratulations!
						`;
					}
				})(),
				newPageKey: false,
			}
		},
		path: 'main',
	}
}