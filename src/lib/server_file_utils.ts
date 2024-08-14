import fs from "fs";
import { default_config } from "$lib/fs_schema";

// write default file if it isn't already there:
export const write_defaults = () => {
    fs.writeFile('store.json', JSON.stringify(default_config, null, 2), (error) => {
        if (error) {
            console.log('An error has occurred ', error);
            return;
        }
        console.log('Data written successfully to disk');
    });
}

// update a key's value:
export const write_update_value = (key: string | number, value: string) => {
    const f = JSON.parse(fs.readFileSync('store.json', 'utf8'));
    f[key] = value;
    try {
        fs.writeFileSync('store.json', JSON.stringify(f))
        console.log('updated store!');
    } catch (e) {
        console.log('unable to update store: ', e);
    }
    return true
}
