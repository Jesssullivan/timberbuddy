import { browser } from '$app/environment';
import { writable } from 'svelte/store';


// cut store values
const defaultValue = '.5';
const initialValue = browser ? window.localStorage.getItem('cut_size') ?? defaultValue : defaultValue;

const cut_size = writable<string>(initialValue);

cut_size.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('cut_size', value);
    }
});


// core store values
const defaultCoreValue = '4';
const initialCoreValue = browser ? window.localStorage.getItem('core_size') ?? defaultCoreValue : defaultCoreValue;

const core_size = writable<string>(initialCoreValue);

core_size.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('core_size', value);
    }
});

// odometer store values
const defaultOdometerValue = '42';
const initialOdometerValue = browser ? window.localStorage.getItem('odo_value') ?? defaultOdometerValue : defaultOdometerValue;

const odo_value = writable<string>(initialOdometerValue);

odo_value.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('odo_value', value);
    }
});


export  {
    cut_size,
    odo_value,
    core_size
}