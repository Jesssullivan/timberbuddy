import * as server from '../entries/pages/core/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/core/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/core/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.BDDPp-Ui.js","_app/immutable/chunks/scheduler.B_ODK09l.js","_app/immutable/chunks/index.0nBEQ_MK.js","_app/immutable/chunks/equal.BKZ5QOWy.js","_app/immutable/chunks/index.mMtE5ovN.js"];
export const stylesheets = [];
export const fonts = [];
