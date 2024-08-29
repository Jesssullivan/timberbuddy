import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.CKNTMStW.js","_app/immutable/chunks/scheduler.B_ODK09l.js","_app/immutable/chunks/index.0nBEQ_MK.js","_app/immutable/chunks/index.mMtE5ovN.js","_app/immutable/chunks/stores.B9g9DENd.js","_app/immutable/chunks/entry.9SjTIDxX.js"];
export const stylesheets = ["_app/immutable/assets/0.BkqbDVyC.css"];
export const fonts = [];
