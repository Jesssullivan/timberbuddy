import { w as writable } from "./index.js";
const defaultValue = ".5";
const initialValue = defaultValue;
const cut_size = writable(initialValue);
cut_size.subscribe((value) => {
});
const defaultCoreValue = "4";
const initialCoreValue = defaultCoreValue;
const core_size = writable(initialCoreValue);
core_size.subscribe((value) => {
});
const defaultOdometerValue = "42";
const initialOdometerValue = defaultOdometerValue;
const odo_value = writable(initialOdometerValue);
odo_value.subscribe((value) => {
});
export {
  cut_size as a,
  core_size as c,
  odo_value as o
};
