import fs from "fs";
async function load() {
  return {
    read_defaults: await JSON.parse(fs.readFileSync("store.json", "utf-8"))
  };
}
export {
  load
};
