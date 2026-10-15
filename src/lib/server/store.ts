// Flat-file store for the control surface (see README "Data transmission and
// storage"). The SvelteKit app creates and writes store.json; the node socket
// server (server/pi_socket_server.ts) reads it while it runs a routine. Both
// resolve the path against the process working directory, so they share one
// file.
import { existsSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { DEFAULT_STORE, normalizeStore, type CutSizeKey, type StoreValues } from '../store-schema.js';

export const STORE_PATH = process.env.TIMBERBUDDY_STORE || 'store.json';

export function writeStore(values: StoreValues, path: string = STORE_PATH): void {
	// Write a sibling file and rename it over store.json, so the socket server
	// never reads a half-written file.
	const tmp = `${path}.${process.pid}.tmp`;
	writeFileSync(tmp, JSON.stringify(values, null, 2) + '\n');
	renameSync(tmp, path);
}

export function readStore(path: string = STORE_PATH): StoreValues {
	if (!existsSync(path)) {
		const values = { ...DEFAULT_STORE };
		writeStore(values, path);
		return values;
	}
	let raw: unknown;
	try {
		raw = JSON.parse(readFileSync(path, 'utf8'));
	} catch (error) {
		console.log('store.json is not valid JSON, using defaults: ', error);
		raw = {};
	}
	return normalizeStore(raw);
}

export function setCutSize(key: CutSizeKey, value: number, path: string = STORE_PATH): StoreValues {
	const values = readStore(path);
	values[key] = value;
	writeStore(values, path);
	return values;
}

export function incrementCuts(path: string = STORE_PATH): StoreValues {
	const values = readStore(path);
	values.odo_value += 1;
	writeStore(values, path);
	return values;
}
