// RU3 remote functions for the control surface's server data. They replace the
// Kit 2 `+layout.server.ts` / `+page.server.ts` loads that read store.json and
// the `POST /` endpoint that wrote any key the client named.
import { command, query } from '$app/server';
import { incrementCuts, readStore, setCutSize as writeCutSize } from './server/store.js';
import { cutSizeUpdateSchema } from './store-schema.js';

// Reads only (a query is a GET with no origin check).
export const getStore = query(async () => readStore());

// Persist the stack or core cut size. Only those two keys and a finite number
// pass the schema.
export const setCutSize = command(cutSizeUpdateSchema, async ({ key, value }) => {
	const values = writeCutSize(key, value);
	// Refresh the cached query in the same response, so a page that mounts later
	// starts from the value just written.
	await getStore().refresh();
	return values[key];
});

// "Next Cut": count one cut on the server and return the new total.
export const recordCut = command(async () => {
	const values = incrementCuts();
	await getStore().refresh();
	return values.odo_value;
});
