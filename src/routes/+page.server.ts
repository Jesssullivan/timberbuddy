import {write_defaults} from "$lib/server_file_utils";
import {data_path} from "$lib/fs_schema";
import fs from "fs";

// if defaults file does not exist, create it here:
(() => fs.existsSync(data_path) ?
    console.log('schema found at ' + data_path):
    write_defaults())()