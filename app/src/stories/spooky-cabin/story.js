import { welcome } from './pages/welcome.js';
import { item } from './pages/item.js';
import { action } from './pages/action.js';
import { readerName } from './pages/readerName.js';
import { afterReaderName } from './pages/afterReaderName.js';
import { end } from './pages/end.js';

export default {
	title: 'The spooky cabin',
	author: 'Ash Williams',
	firstPageKey: 'welcome',
	pages: {
		welcome,
		readerName,
		afterReaderName,
		item,
		action,
		end,
	},
}