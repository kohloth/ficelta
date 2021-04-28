export { Application, send, path } from '../deps.js';
import config from '../config.js';

const dir = new URL('.', import.meta.url).pathname;

export default async function serve({ args, stories }) {

	// 1. Make script string.
	const storiesProcessed = Object.entries(stories).map(([storyKey, story]) => {
		return {
			title: story.title,
			storyKey,
			pages: [...Object.values(story.pages).map(page => {
				const pageData = page({ answers: {} });
				const pageKey = pageData.pageKey;
				const paths = Object.values(pageData.paths).map(pathV => pathV.newPageKey === false ? '__end' : pathV.newPageKey);
				return { pageKey, paths };
			}), {
				pageKey: '__end',
				paths: [],
			}]
		}
	});

	const storiesScriptString = `
		const stories = ${JSON.stringify(storiesProcessed, null, 2)}
	`;

	// 2. Get page HTML.
	const visScriptString = await Deno.readTextFile(path.resolve(new URL('.', import.meta.url).pathname, '../webGui/vis.js'));
	let htmlPage = await Deno.readTextFile(path.resolve(new URL('.', import.meta.url).pathname, '../webGui/graphs.html'));
	htmlPage = htmlPage.replace('{ storiesScriptString }', storiesScriptString);
	htmlPage = htmlPage.replace('{ visScriptString }', visScriptString);

	// 3. Serve page.
	const app = new Application();
	app.use(async (ctx) => {
		ctx.response.body = htmlPage;
	});
	await app.listen({ port: config.httpServerPort });
}