import { j as json } from './index-BIAFQWR9.js';
import { a as write_update_value } from './server_file_utils-CoZlY6Aa.js';
import 'fs';

async function POST(ev) {
  const { new_cut_size } = await ev.request.json();
  const res = write_update_value("odo_value", new_cut_size);
  return json(res);
}

export { POST };
//# sourceMappingURL=_server.ts-CPau_ZFU.js.map
