// The control surface's persisted values and the schema that guards writes to
// them. Shared by the server (src/lib/server/store.ts, src/lib/store.remote.ts)
// and the browser, so it holds no Node imports.
import { Schema } from 'effect';

export const STORE_KEYS = ['stack_height', 'core_height', 'odo_value'] as const;
export type StoreKey = (typeof STORE_KEYS)[number];
export type StoreValues = Record<StoreKey, number>;

// Written to store.json when the file does not exist yet.
export const DEFAULT_STORE: Readonly<StoreValues> = {
	stack_height: 1.5,
	core_height: 5,
	odo_value: 0,
};

// The two cut sizes the touch UI edits. The cut counter (odo_value) only moves
// through recordCut, which increments it on the server.
export const CUT_SIZE_KEYS = ['stack_height', 'core_height'] as const;
export type CutSizeKey = (typeof CUT_SIZE_KEYS)[number];

export const CutSizeUpdate = Schema.Struct({
	key: Schema.Literals(CUT_SIZE_KEYS),
	value: Schema.Finite,
});
export type CutSizeUpdate = typeof CutSizeUpdate.Type;

export const cutSizeUpdateSchema = Schema.toStandardSchemaV1(CutSizeUpdate);

// store.json written before this release holds the cut sizes as strings
// ("5", "1.6"). Read each known key as a number and fall back to the default
// for anything missing or not a finite number. Unknown keys are dropped.
export function normalizeStore(raw: unknown): StoreValues {
	const source = typeof raw === 'object' && raw !== null ? (raw as Record<string, unknown>) : {};
	const out = { ...DEFAULT_STORE };
	for (const key of STORE_KEYS) {
		const value = source[key];
		if (typeof value === 'string' && value.trim() === '') continue;
		const n = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : Number.NaN;
		if (Number.isFinite(n)) out[key] = n;
	}
	return out;
}
