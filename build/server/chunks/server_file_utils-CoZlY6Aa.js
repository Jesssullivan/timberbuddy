import fs from 'fs';

const data_path = "store.json";
const default_config = {
  stack_height: 1.5,
  core_height: 5,
  odo_value: 0
};
const write_defaults = () => {
  fs.writeFile("store.json", JSON.stringify(default_config, null, 2), (error) => {
    if (error) {
      console.log("An error has occurred ", error);
      return;
    }
    console.log("Data written successfully to disk");
  });
};
const write_update_value = (key, value) => {
  const f = JSON.parse(fs.readFileSync("store.json", "utf8"));
  f[key] = value;
  try {
    fs.writeFileSync("store.json", JSON.stringify(f));
    console.log("updated store!");
  } catch (e) {
    console.log("unable to update store: ", e);
  }
  return true;
};

export { write_update_value as a, data_path as d, write_defaults as w };
//# sourceMappingURL=server_file_utils-CoZlY6Aa.js.map
