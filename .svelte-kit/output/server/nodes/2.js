

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B0n0MpC3.js","_app/immutable/chunks/scheduler.CyJLdlF6.js","_app/immutable/chunks/index.DE9qO_jh.js"];
export const stylesheets = [];
export const fonts = [];
