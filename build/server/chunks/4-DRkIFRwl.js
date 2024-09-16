import fs from 'fs';

const config = {
  runtime: "edge"
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  config: config
});

async function load() {
  return {
    read_defaults: await JSON.parse(fs.readFileSync("store.json", "utf-8"))
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-lp4zk4eL.js')).default;
const universal_id = "src/routes/stack/+page.ts";
const server_id = "src/routes/stack/+page.server.ts";
const imports = ["_app/immutable/nodes/4.DanUromP.js","_app/immutable/chunks/scheduler.B_ODK09l.js","_app/immutable/chunks/index.0nBEQ_MK.js","_app/immutable/chunks/equal.BKZ5QOWy.js","_app/immutable/chunks/index.mMtE5ovN.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-DRkIFRwl.js.map
