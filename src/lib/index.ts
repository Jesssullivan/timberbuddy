import { browser } from '$app/environment';
import { writable } from 'svelte/store';


const defaultValue = '.5';
const initialValue = browser ? window.localStorage.getItem('cut_size') ?? defaultValue : defaultValue;

const cut_size = writable<string>(initialValue);

cut_size.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('cut_size', value);
    }
});

export default cut_size;