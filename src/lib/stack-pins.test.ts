// RU1/RU5 stack pins. site.scaffold's estate drift check (estate/versions.json)
// has not merged yet; until it does, this test holds the exact pins.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const pkg = JSON.parse(readFileSync(new URL('../../package.json', import.meta.url), 'utf8'));
const lock = readFileSync(new URL('../../pnpm-lock.yaml', import.meta.url), 'utf8');
const all: Record<string, string> = { ...pkg.dependencies, ...pkg.devDependencies, ...pkg.optionalDependencies };

const EXACT: Record<string, string> = {
	'@sveltejs/kit': '3.0.1',
	svelte: '5.57.2',
	vite: '8.3.3',
	typescript: '7.0.2',
	effect: '4.0.2',
	'@skeletonlabs/skeleton': '5.0.1',
	'@skeletonlabs/skeleton-svelte': '5.0.1',
	vitest: '5.0.3',
	'@sveltejs/vite-plugin-svelte': '7.3.1',
	'@sveltejs/adapter-node': '6.0.0',
	'svelte-check': '4.7.6',
	'@typescript/typescript6': '6.0.2',
};

describe('RU5 exact pins', () => {
	it.each(Object.entries(EXACT))('%s is %s exactly', (name, version) => {
		expect(all[name]).toBe(version);
	});

	it('the lockfile importer resolves typescript 7.0.2', () => {
		expect(lock).toMatch(/\n {6}typescript:\n {8}specifier: 7\.0\.2\n {8}version: 7\.0\.2\n/);
	});

	it('has no @typescript/native and no npm:typescript alias (RU13b)', () => {
		expect(Object.keys(all)).not.toContain('@typescript/native');
		expect(Object.values(all).some((v) => v.startsWith('npm:typescript'))).toBe(false);
		expect(lock).not.toContain('@typescript/native');
	});

	it('has no in-house npm package (RU6/RU9)', () => {
		expect(Object.keys(all).filter((n) => n.startsWith('@tummycrypt/') || n.startsWith('@xoxd/'))).toEqual([]);
	});

	it('maps #lib/* to src/lib (Kit 3)', () => {
		expect(pkg.imports['#lib/*']).toBe('./src/lib/*');
	});

	it('runs on a Node that SvelteKit 3 supports', () => {
		expect(pkg.engines.node).toBe('^22.17.0 || >=24 <25');
	});
});
