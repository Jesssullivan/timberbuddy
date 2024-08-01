import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.caxOB-44.js","_app/immutable/chunks/scheduler.CyJLdlF6.js","_app/immutable/chunks/index.DE9qO_jh.js","_app/immutable/chunks/index.D7owZnvV.js","_app/immutable/chunks/index.B6xMir5B.js","_app/immutable/chunks/stores.el0OYveP.js","_app/immutable/chunks/entry.B4xYBZ9F.js"];
export const stylesheets = ["_app/immutable/assets/0.wFCSJe3M.css"];
export const fonts = [];
