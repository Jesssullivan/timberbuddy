// read in extant values first:
import fs from "fs";

export async function load() {
    return {
        read_defaults: await JSON.parse(fs.readFileSync('store.json', 'utf-8'))
    };
}
