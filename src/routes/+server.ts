import { json } from '@sveltejs/kit';
import {write_update_value} from "$lib/server_file_utils";

// update odo size:
export async function POST(ev) {
    const { new_cut_size } = await ev.request.json();
    const res = write_update_value('odo_value', new_cut_size)
    return json(res)
}