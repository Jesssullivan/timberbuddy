import fs from 'fs';

async function load() {
  return {
    read_defaults: await JSON.parse(fs.readFileSync("store.json", "utf-8"))
  };
}

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-CY2e8HbQ.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.CZcr36X0.js","_app/immutable/chunks/scheduler.B_ODK09l.js","_app/immutable/chunks/index.0nBEQ_MK.js","_app/immutable/chunks/index.mMtE5ovN.js","_app/immutable/chunks/stores.B_pelHtO.js","_app/immutable/chunks/entry.CyP2UbcE.js"];
const stylesheets = ["_app/immutable/assets/0.BkqbDVyC.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-K0LtkzmE.js.map
