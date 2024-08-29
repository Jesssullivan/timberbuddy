import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const year = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear();
  return `<div class="container h-full mx-auto flex justify-center items-center"><div class="space-y-10 text-center flex flex-col items-center"><h1 class="h1" data-svelte-h="svelte-1qfw1nn">Timber Buddy Control Surface</h1> <div class="flex justify-center space-x-2" data-svelte-h="svelte-h9pkl3"><a class="btn variant-filled" href="/stack" rel="noreferrer">Enter Stack Mode ➶</a></div> <div class="space-y-2"><div class="text-center opacity-80 grid grid-cols-1 gap-.5"><span class="text-sm">© Timber Buddy ${escape(year)}</span> <span class="text-xs opacity-85 " data-svelte-h="svelte-1fz41l4">Engineered with care.</span> <span class="text-xs opacity-85" data-svelte-h="svelte-1gcvqpy">Jess Sullivan &amp; Rossel &amp; Co.</span></div></div></div></div>`;
});
export {
  Page as default
};
