import { json } from '@sveltejs/kit';
import {write_update_value} from "$lib/server_file_utils";

// HTTP request methods
export function GET() {}

// update odo value:
export async function POST(ev) {
    const { key, new_cut_size } = await ev.request.json();
    const res = write_update_value(key, new_cut_size)
    return json(res)
}

