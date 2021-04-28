export function welcome() {
	return {
		pageKey: 'welcome',
		paths: {
			main: {
				pageText: `
					The Spooky Cabin
					By Anonymous

					It it a dark stormy night, and you are sat in your cabin in the woods relaxing. The tabletop radio is playing some totally savory alternative rock tunes. Suddenly, the broadcast is interrupted by a fizz of static and the sound of a microphone being fumbled.

					"Testing, testing..."

					Says the voice on the other end of the radiowaves.

					"We have sufficient amplitude now? Good. We interrupt this regular programming to bring you a dire warning. Under no circumstances must you..."

					The radio crackled and spat as the signal dropped.

					"...thought we were...only creatures in the...BUT..."

					The announcers words were swallowed up by more fizzing and crackling.

					"This is no joke. Planet earth has been OVERRUN by..."

					Suddenly the broadcast went dead. What was the man talking about? What should you do?
				`,
				newPageKey: 'readerName',
			}
		},
		path: 'main'
	};
}