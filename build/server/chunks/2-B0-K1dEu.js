import { d as data_path, w as write_defaults } from './server_file_utils-CoZlY6Aa.js';
import fs from 'fs';

(() => fs.existsSync(data_path) ? console.log("schema found at " + data_path) : write_defaults())();

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C5spCnuJ.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.76pXIvt7.js","_app/immutable/chunks/scheduler.B_ODK09l.js","_app/immutable/chunks/index.0nBEQ_MK.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-B0-K1dEu.js.map
