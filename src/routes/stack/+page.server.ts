import fs from "fs";
import {write_defaults} from "$lib/server_file_utils";
import {data_path} from "$lib/fs_schema";

export async function load() {
    return {
        read_defaults: await JSON.parse(fs.readFileSync('store.json', 'utf-8'))
    };
}

// if defaults file does not exist, create it here:
(() => fs.existsSync(data_path) ?
    console.log('schema found at ' + data_path):
    write_defaults())()