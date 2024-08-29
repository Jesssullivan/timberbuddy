import { d as data_path, a as write_defaults } from "../../chunks/server_file_utils.js";
import fs from "fs";
(() => fs.existsSync(data_path) ? console.log("schema found at " + data_path) : write_defaults())();
