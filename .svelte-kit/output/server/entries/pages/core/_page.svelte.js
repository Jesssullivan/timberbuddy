import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { c as core_size } from "../../../chunks/index2.js";
import { E as Equal } from "../../../chunks/equal.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let display_core_number;
  let getNumString;
  let showNumString;
  let $core_size, $$unsubscribe_core_size;
  $$unsubscribe_core_size = subscribe(core_size, (value) => $core_size = value);
  display_core_number = $core_size;
  getNumString = display_core_number.toString().length < 3 ? display_core_number : Number(display_core_number.toString().substring(0, 3));
  showNumString = getNumString !== "" ? getNumString += '"' : getNumString += "";
  $$unsubscribe_core_size();
  return ` <div class="flex"><div class="w-3/5 text-2xl pl-1"><div class="h-14 my-2 text-right text-2xl variant-soft-tertiary "><button class="w-2/6 h-full float-left font-bold btn variant-ghost-success rounded-l">${validate_component(Equal, "Equal").$$render($$result, { size: 48 }, {}, {})}</button> <button class="w-4/6 h-full font-bold "></button></div> <div class="container m-auto grid grid-cols-4 gap-x-2 gap-y-1 "><button class="btn min-h-14 variant-soft-primary rounded-none" data-svelte-h="svelte-axk4">7</button> <button class="btn variant-soft-primary rounded-none" data-svelte-h="svelte-19r1uy7">8</button> <button class="btn variant-soft-primary rounded-none" data-svelte-h="svelte-rs1kbj">9</button> <button class="btn variant-soft-warning rounded-none" data-svelte-h="svelte-11j9lei">+</button> <button class="btn min-h-14 lg:min-h-26 variant-soft-primary rounded-none" data-svelte-h="svelte-oifytz">4</button> <button class="btn variant-soft-primary rounded-none" data-svelte-h="svelte-giruan">5</button> <button class="btn variant-soft-primary rounded-none" data-svelte-h="svelte-u9pa9f">6</button> <button class="btn variant-soft-warning rounded-none" data-svelte-h="svelte-1s1rmst">-</button> <button class="btn min-h-14 lg:min-h-26 variant-soft-primary rounded-none" data-svelte-h="svelte-14uy6on">1</button> <button class="btn variant-soft-primary rounded-none" data-svelte-h="svelte-c2eqbf">2</button> <button class="btn variant-soft-primary rounded-none" data-svelte-h="svelte-jcwuez">3</button> <button class="btn variant-soft-warning rounded-none" data-svelte-h="svelte-b2oa45">*</button> <button class="btn min-h-14 lg:min-h-26 variant-soft-primary rounded-none" data-svelte-h="svelte-1ylduur">0</button> <button class="btn variant-soft-tertiary rounded-none" data-svelte-h="svelte-1aeo0yx">.</button> <button class="btn variant-soft-error rounded-none" data-svelte-h="svelte-1hju5w2">Clear</button> <button class="btn variant-soft-warning rounded-none" data-svelte-h="svelte-8166of">/</button></div></div> <div class="float-right w-2/5"><div class="h-full mx-auto justify-center items-center"><div class="text-center items-center pt-12"><span class="pl-2 text-jumbo">${escape(showNumString)}</span> <div class="pt-6 flex justify-center space-x-2" data-svelte-h="svelte-79jgl0"><span class="text-2xl italic pb-8">Cut Size</span></div> <div class="btn-group-vertical variant-soft-primary"><button class="w-64 h-14" data-svelte-h="svelte-194oqco"><span class="h3">Larger Cut ↑</span></button> <button class="w-64 h-14" data-svelte-h="svelte-mhprm8"><span class="h3">Smaller Cut ↓</span></button></div></div></div></div></div>`;
});
export {
  Page as default
};
