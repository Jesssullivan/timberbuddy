import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { incrementCuts, readStore, setCutSize, writeStore } from './server/store.js';
import { DEFAULT_STORE, cutSizeUpdateSchema, normalizeStore } from './store-schema.js';

let dir: string;
let path: string;

beforeEach(() => {
	dir = mkdtempSync(join(tmpdir(), 'timberbuddy-store-'));
	path = join(dir, 'store.json');
});

afterEach(() => {
	rmSync(dir, { recursive: true, force: true });
});

const onDisk = () => JSON.parse(readFileSync(path, 'utf8'));

describe('store.json', () => {
	it('creates the file with the defaults when it is missing', () => {
		expect(readStore(path)).toEqual(DEFAULT_STORE);
		expect(onDisk()).toEqual(DEFAULT_STORE);
	});

	it('reads a store written before this release (string values)', () => {
		writeFileSync(path, JSON.stringify({ stack_height: '1.6', core_height: '7', odo_value: 12 }));
		expect(readStore(path)).toEqual({ stack_height: 1.6, core_height: 7, odo_value: 12 });
	});

	it('falls back per key for missing, empty or non-numeric values and drops unknown keys', () => {
		writeFileSync(path, JSON.stringify({ stack_height: '', core_height: 'NaN', extra: 1 }));
		expect(readStore(path)).toEqual(DEFAULT_STORE);
	});

	it('survives a corrupt file', () => {
		writeFileSync(path, '{not json');
		expect(readStore(path)).toEqual(DEFAULT_STORE);
	});

	it('sets one cut size and keeps the others', () => {
		writeStore({ stack_height: 1.5, core_height: 5, odo_value: 3 }, path);
		expect(setCutSize('core_height', 6.25, path)).toEqual({ stack_height: 1.5, core_height: 6.25, odo_value: 3 });
		expect(onDisk()).toEqual({ stack_height: 1.5, core_height: 6.25, odo_value: 3 });
	});

	it('counts cuts on the server', () => {
		writeStore({ ...DEFAULT_STORE, odo_value: 41 }, path);
		expect(incrementCuts(path).odo_value).toBe(42);
		expect(incrementCuts(path).odo_value).toBe(43);
		expect(onDisk().odo_value).toBe(43);
	});
});

describe('normalizeStore', () => {
	it('ignores a non-object', () => {
		expect(normalizeStore(null)).toEqual(DEFAULT_STORE);
		expect(normalizeStore('x')).toEqual(DEFAULT_STORE);
	});
});

describe('cut size schema (the setCutSize command validator)', () => {
	const validate = async (input: unknown) => cutSizeUpdateSchema['~standard'].validate(input);

	it('accepts a cut size key and a finite number', async () => {
		const result = await validate({ key: 'stack_height', value: 1.6 });
		expect(result.issues).toBeUndefined();
	});

	it.each([
		[{ key: 'odo_value', value: 1 }],
		[{ key: '__proto__', value: 1 }],
		[{ key: 'core_height', value: '5' }],
		[{ key: 'core_height', value: Number.POSITIVE_INFINITY }],
		[{ key: 'core_height', value: Number.NaN }],
		[{ key: 'core_height' }],
		['core_height'],
	])('rejects %j', async (input) => {
		const result = await validate(input);
		expect(result.issues?.length ?? 0).toBeGreaterThan(0);
	});
});
