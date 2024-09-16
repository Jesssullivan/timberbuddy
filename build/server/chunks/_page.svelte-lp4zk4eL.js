import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from './ssr-BrqjmRdN.js';
import { w as writable } from './index2-D_OkWmvP.js';
import { E as Equal } from './equal-DCQjTjIl.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let display_number;
  let getNumString;
  let showNumString;
  let $cut_size, $$unsubscribe_cut_size;
  let { data } = $$props;
  const defaultStackValue = data.read_defaults.stack_height;
  const initialStackValue = defaultStackValue;
  const cut_size = writable(initialStackValue.toString());
  $$unsubscribe_cut_size = subscribe(cut_size, (value) => $cut_size = value);
  cut_size.subscribe((value) => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  display_number = $cut_size;
  getNumString = (Math.round(Number(display_number) * 100) / 100).toString();
  showNumString = getNumString !== "" ? getNumString += '"' : getNumString += "";
  $$unsubscribe_cut_size();
  return ` <div class="flex"><div class="w-3/5 text-2xl pl-1"><div class="h-14 my-1 text-right text-2xl variant-soft-tertiary "><button class="w-2/6 h-full float-left font-bold btn variant-ghost-success rounded-l">${validate_component(Equal, "Equal").$$render($$result, { size: 48 }, {}, {})}</button> <button class="w-4/6 h-full font-bold"></button></div> <div class="container m-auto grid grid-cols-4 gap-x-2 gap-y-1 "><button class="btn min-h-14 variant-soft-primary rounded-none" data-svelte-h="svelte-axk4">7</button> <button class="btn variant-soft-primary rounded-none" data-svelte-h="svelte-19r1uy7">8</button> <button class="btn variant-soft-primary rounded-none" data-svelte-h="svelte-rs1kbj">9</button> <button class="btn variant-soft-warning rounded-none" data-svelte-h="svelte-11j9lei">+</button> <button class="btn min-h-14 lg:min-h-26 variant-soft-primary rounded-none" data-svelte-h="svelte-oifytz">4</button> <button class="btn variant-soft-primary rounded-none" data-svelte-h="svelte-giruan">5</button> <button class="btn variant-soft-primary rounded-none" data-svelte-h="svelte-u9pa9f">6</button> <button class="btn variant-soft-warning rounded-none" data-svelte-h="svelte-1s1rmst">-</button> <button class="btn min-h-14 lg:min-h-26 variant-soft-primary rounded-none" data-svelte-h="svelte-14uy6on">1</button> <button class="btn variant-soft-primary rounded-none" data-svelte-h="svelte-c2eqbf">2</button> <button class="btn variant-soft-primary rounded-none" data-svelte-h="svelte-jcwuez">3</button> <button class="btn variant-soft-warning rounded-none" data-svelte-h="svelte-b2oa45">*</button> <button class="btn min-h-14 lg:min-h-26 variant-soft-primary rounded-none" data-svelte-h="svelte-1ylduur">0</button> <button class="btn variant-soft-tertiary rounded-none" data-svelte-h="svelte-1aeo0yx">.</button> <button class="btn variant-soft-error rounded-none" data-svelte-h="svelte-1hju5w2">Clear</button> <button class="btn variant-soft-warning rounded-none" data-svelte-h="svelte-8166of">/</button></div></div> <div class="float-right w-2/5"><div class="h-full mx-auto justify-center items-center"><div class="text-center items-center pt-12"><span class="pl-2 text-jumbo">${escape(showNumString.substring(0, 5))}</span> <div class="pt-6 flex justify-center space-x-2" data-svelte-h="svelte-79jgl0"><span class="text-2xl italic pb-8">Cut Size</span></div> <div class="btn-group-vertical variant-soft-primary"><button class="w-64 h-14" data-svelte-h="svelte-194oqco"><span class="h3">Larger Cut ↑</span></button> <button class="w-64 h-14" data-svelte-h="svelte-mhprm8"><span class="h3">Smaller Cut ↓</span></button></div></div></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-lp4zk4eL.js.map
