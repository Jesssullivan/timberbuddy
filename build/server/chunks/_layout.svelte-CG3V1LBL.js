import { c as create_ssr_component, g as get_store_value, a as subscribe, v as validate_component, e as escape, b as add_attribute, d as add_styles, f as compute_slots } from './ssr-BrqjmRdN.js';
import { r as readable, w as writable } from './index2-D_OkWmvP.js';
import { p as page } from './stores-DFIaV2TS.js';
import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
import 'socket.io-client';
import './exports-BGi7-Rnc.js';

const storePopup = writable(void 0);
const stores = {};
function localStorageStore(key, initialValue, options) {
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe: subscribe2, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set(value);
      },
      subscribe: subscribe2
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
const modeCurrent = localStorageStore("modeCurrent", false);
function setInitialClassState() {
  const elemHtmlClasses = document.documentElement.classList;
  const condLocalStorageUserPrefs = localStorage.getItem("modeUserPrefers") === "false";
  const condLocalStorageUserPrefsExists = !("modeUserPrefers" in localStorage);
  const condMatchMedia = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (condLocalStorageUserPrefs || condLocalStorageUserPrefsExists && condMatchMedia) {
    elemHtmlClasses.add("dark");
  } else {
    elemHtmlClasses.remove("dark");
  }
}
function prefersReducedMotion() {
  return false;
}
readable(prefersReducedMotion(), (set) => {
});
const cBase = "flex flex-col";
const cRowMain = "grid items-center";
const cRowHeadline = "";
const cSlotLead = "flex-none flex justify-between items-center";
const cSlotDefault = "flex-auto";
const cSlotTrail = "flex-none flex items-center space-x-4";
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRowMain;
  let classesRowHeadline;
  let classesSlotLead;
  let classesSlotDefault;
  let classesSlotTrail;
  let $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { gridColumns = "grid-cols-[auto_1fr_auto]" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { regionRowMain = "" } = $$props;
  let { regionRowHeadline = "" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0) $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0) $$bindings.spacing(spacing);
  if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0) $$bindings.gridColumns(gridColumns);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0) $$bindings.gap(gap);
  if ($$props.regionRowMain === void 0 && $$bindings.regionRowMain && regionRowMain !== void 0) $$bindings.regionRowMain(regionRowMain);
  if ($$props.regionRowHeadline === void 0 && $$bindings.regionRowHeadline && regionRowHeadline !== void 0) $$bindings.regionRowHeadline(regionRowHeadline);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0) $$bindings.slotLead(slotLead);
  if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0) $$bindings.slotDefault(slotDefault);
  if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0) $$bindings.slotTrail(slotTrail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0) $$bindings.labelledby(labelledby);
  classesBase = `${cBase} ${background} ${border} ${spacing} ${padding} ${shadow} ${$$props.class ?? ""}`;
  classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
  classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
  classesSlotLead = `${cSlotLead} ${slotLead}`;
  classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
  classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
  return `<div class="${"app-bar " + escape(classesBase, true)}" data-testid="app-bar" role="toolbar"${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledby, 0)}> <div class="${"app-bar-row-main " + escape(classesRowMain, true)}"> ${$$slots.lead ? `<div class="${"app-bar-slot-lead " + escape(classesSlotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"app-bar-slot-default " + escape(classesSlotDefault, true)}">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.trail ? `<div class="${"app-bar-slot-trail " + escape(classesSlotTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>  ${$$slots.headline ? `<div class="${"app-bar-row-headline " + escape(classesRowHeadline, true)}">${slots.headline ? slots.headline({}) : ``}</div>` : ``}</div>`;
});
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { scrollbarGutter = "auto" } = $$props;
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.scrollbarGutter === void 0 && $$bindings.scrollbarGutter && scrollbarGutter !== void 0) $$bindings.scrollbarGutter(scrollbarGutter);
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0) $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0) $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0) $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0) $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0) $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0) $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0) $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0) $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesHeader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell"> ${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}  <div class="${"flex-auto " + escape(cContentArea, true)}"> ${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}  <div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}"${add_styles({ "scrollbar-gutter": scrollbarGutter })}> ${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}  <main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>  ${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>  ${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>  ${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const cTrack = "cursor-pointer";
const cThumb = "aspect-square scale-[0.8] flex justify-center items-center";
const cIcon = "w-[70%] aspect-square";
const LightSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trackBg;
  let thumbBg;
  let thumbPosition;
  let iconFill;
  let classesTrack;
  let classesThumb;
  let classesIcon;
  let $modeCurrent, $$unsubscribe_modeCurrent;
  $$unsubscribe_modeCurrent = subscribe(modeCurrent, (value) => $modeCurrent = value);
  let { title = "Toggle light or dark mode." } = $$props;
  let { bgLight = "bg-surface-50" } = $$props;
  let { bgDark = "bg-surface-900" } = $$props;
  let { fillLight = "fill-surface-50" } = $$props;
  let { fillDark = "fill-surface-900" } = $$props;
  let { width = "w-12" } = $$props;
  let { height = "h-6" } = $$props;
  let { ring = "ring-[1px] ring-surface-500/30" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  const cTransition = `transition-all duration-[200ms]`;
  const svgPath = {
    sun: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",
    moon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
  };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.bgLight === void 0 && $$bindings.bgLight && bgLight !== void 0) $$bindings.bgLight(bgLight);
  if ($$props.bgDark === void 0 && $$bindings.bgDark && bgDark !== void 0) $$bindings.bgDark(bgDark);
  if ($$props.fillLight === void 0 && $$bindings.fillLight && fillLight !== void 0) $$bindings.fillLight(fillLight);
  if ($$props.fillDark === void 0 && $$bindings.fillDark && fillDark !== void 0) $$bindings.fillDark(fillDark);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.ring === void 0 && $$bindings.ring && ring !== void 0) $$bindings.ring(ring);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  trackBg = $modeCurrent === true ? bgLight : bgDark;
  thumbBg = $modeCurrent === true ? bgDark : bgLight;
  thumbPosition = $modeCurrent === true ? "translate-x-[100%]" : "";
  iconFill = $modeCurrent === true ? fillLight : fillDark;
  classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${ring} ${rounded} ${trackBg} ${$$props.class ?? ""}`;
  classesThumb = `${cThumb} ${cTransition} ${height} ${rounded} ${thumbBg} ${thumbPosition}`;
  classesIcon = `${cIcon} ${iconFill}`;
  $$unsubscribe_modeCurrent();
  return `${$$result.head += `<!-- HEAD_svelte-gewkj4_START --><!-- HTML_TAG_START -->${`<script nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-gewkj4_END -->`, ""} <div class="${"lightswitch-track " + escape(classesTrack, true)}" role="switch" aria-label="Light Switch"${add_attribute("aria-checked", $modeCurrent, 0)}${add_attribute("title", title, 0)} tabindex="0"> <div class="${"lightswitch-thumb " + escape(classesThumb, true)}"> <svg class="${"lightswitch-icon " + escape(classesIcon, true)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path${add_attribute("d", $modeCurrent ? svgPath.sun : svgPath.moon, 0)}></path></svg></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let core_name;
  let $page, $$unsubscribe_page;
  let $odo_value, $$unsubscribe_odo_value;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const defaultOdometerValue = data.read_defaults.core_height;
  const initialOdometerValue = defaultOdometerValue;
  const odo_value = writable(initialOdometerValue);
  $$unsubscribe_odo_value = subscribe(odo_value, (value) => $odo_value = value);
  odo_value.subscribe((value) => {
  });
  storePopup.set({
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow
  });
  const cml = (str) => {
    return str.replace(/^\w|[A-Z]|\b\w/g, function(word, index) {
      return index == 0 ? word.toUpperCase() : word.toUpperCase();
    }).replace(/\s+/g, " ");
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  core_name = $page.url.pathname.split("/")[1] === "" ? "Home" : cml($page.url.pathname.split("/")[1] + " mode");
  $$unsubscribe_page();
  $$unsubscribe_odo_value();
  return ` ${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
    footer: () => {
      return ` <div class="grid grid-cols-4 font-bold -mr-4 border-2"><button class="btn rounded-none variant-ghost-success !py-6 md:text-xl xl:!text-2xl !px-8" data-svelte-h="svelte-1ioq6ud"><span>Next Cut</span></button> <button class="btn rounded-none variant-ghost-secondary md:text-xl xl:!text-2xl !px-8" data-svelte-h="svelte-dsx8v0">Set Ref</button> <button class="btn rounded-none variant-ghost-surface md:text-xl xl:!text-2xl " data-svelte-h="svelte-13oholn">Toggle Mode</button> <button class="btn rounded-none variant-ghost-warning md:text-xl xl:!text-2xl !px-8" data-svelte-h="svelte-1bsgk4z">Raise</button></div> `;
    },
    header: () => {
      return `${validate_component(AppBar, "AppBar").$$render($$result, { class: "max-h-24" }, {}, {
        trail: () => {
          return `<button class="btn btn-sm variant-ghost-surface"><span class="animate-pulse">${escape($odo_value)}</span> <span class="italic" data-svelte-h="svelte-pyzt4o">Cuts ⤤</span></button> <button class="btn btn-sm variant-ghost-surface" data-svelte-h="svelte-hcyosv">Read Manual</button> <button class="btn btn-sm variant-ghost-surface" data-svelte-h="svelte-1uczolr">Toggle Network</button> <button class="btn btn-sm variant-ghost-surface" data-svelte-h="svelte-1tzh9wu">Support</button> <button class="btn">${validate_component(LightSwitch, "LightSwitch").$$render($$result, { height: "h-8", width: "w-16" }, {}, {})}</button> `;
        },
        lead: () => {
          return `<a href="/" class="flex flex-col justify-center text-center"><strong class="text-lg uppercase" data-svelte-h="svelte-1plrc3f">Timber Buddy</strong> <p class="text-sm hover:animate-pulse">${escape(core_name)}</p></a>`;
        }
      })} `;
    },
    default: () => {
      return ` ${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-CG3V1LBL.js.map
