import { j as json } from "../../chunks/index.js";
import { w as write_update_value } from "../../chunks/server_file_utils.js";
async function POST(ev) {
  const { new_cut_size } = await ev.request.json();
  const res = write_update_value("odo_value", new_cut_size);
  return json(res);
}
export {
  POST
};
