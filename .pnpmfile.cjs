// RU13 (TypeScript 7.0.2 as `typescript`): see patches/README.md.
//
// TypeScript 7 ships no in-process compiler API, but the packages below parse
// TypeScript in-process and declare `typescript` as a peer. pnpm resolves a
// peer from the root, where `typescript` is 7.0.2, and neither pnpm
// `overrides` nor `packageExtensions` can redirect a peer. This hook turns
// that peer into a regular dependency on Microsoft's TypeScript 6 API package
// (`@typescript/typescript6`), so only these packages load it; the root
// `typescript`, every `tsc` and every type check stay on 7.0.2. pnpm records
// the result in pnpm-lock.yaml (`pnpmfileChecksum`), which rules_js reads.
//
// SvelteKit is not listed: patches/@sveltejs__kit@3.0.1.patch teaches it to
// find the companion itself. Remove a name once its upstream supports
// TypeScript 7.

const COMPANION = 'npm:@typescript/typescript6@6.0.2';

const TS_API_CONSUMERS = new Set([
	'svelte-check',
	'ts-api-utils',
	'typescript-eslint',
	'@typescript-eslint/eslint-plugin',
	'@typescript-eslint/parser',
	'@typescript-eslint/project-service',
	'@typescript-eslint/tsconfig-utils',
	'@typescript-eslint/type-utils',
	'@typescript-eslint/typescript-estree',
	'@typescript-eslint/utils',
]);

function readPackage(pkg) {
	if (TS_API_CONSUMERS.has(pkg.name) && pkg.peerDependencies?.typescript) {
		delete pkg.peerDependencies.typescript;
		if (pkg.peerDependenciesMeta) delete pkg.peerDependenciesMeta.typescript;
		pkg.dependencies = { ...pkg.dependencies, typescript: COMPANION };
	}
	return pkg;
}

module.exports = { hooks: { readPackage }, TS_API_CONSUMERS, COMPANION };
