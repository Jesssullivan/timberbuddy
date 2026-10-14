# Upstream-ready TypeScript 7 changes

These are for the operator to take upstream (RU13). Nobody in the estate opens
pull requests or issues on repositories we do not own.

## sveltejs/kit: `svelte-kit sync` with TypeScript 7

Diff: `sveltejs-kit-sync-typescript7.diff`, against `packages/kit` at tag
`@sveltejs/kit@3.0.1` (the npm `src/` files are byte-identical to that tag).

Problem: with `typescript@7` installed, `vite build`, `vite dev` and
`svelte-kit sync` crash in `src/core/sync/write_tsconfig/index.js`
(`TypeError: Cannot read properties of undefined (reading 'readFile')`),
because TypeScript 7's entry point exports only its version.

Change:

- `src/core/sync/ts.js` loads the compiler API from `typescript` when it has
  one, else from `@typescript/typescript6` (Microsoft's TypeScript 6 API
  package for tools running beside TypeScript 7), and exports a separate
  `ts_installed` flag.
- `write_tsconfig` reuses that loader instead of importing `typescript`
  itself, so tsconfig validation runs on the companion or is skipped.
- `write_types` generates `$types` whenever TypeScript is installed (the
  generation is string-based) and skips only the load-function proxies when no
  API is available.

Suggested follow-ups upstream: declare `@typescript/typescript6` as an optional
peer, and widen the `typescript` peer range to `^6.0.0 || ^7.0.0`.

## sveltejs/language-tools: `svelte-check --tsgo` with TypeScript 7 as `typescript`

Diff: `sveltejs-language-tools-svelte-check-tsgo-typescript7.diff`, against
`packages/svelte-check/src/tsgo.ts` at tag `svelte-check@4.7.6`.

Problem: `--tsgo` and `--tsgo-experimental-api` only look for TypeScript 7
under the `@typescript/native` or `@typescript/native-preview` aliases, so a
project whose `typescript` is 7.0.2 gets "requires TypeScript 7 to be
installed".

Change: `tryParseTsGoVersion` also tries `typescript` itself; the existing
`major >= 7` check keeps TypeScript 6 projects on the old path.

Not in the diff, for the maintainers to decide: svelte-check's bundle imports
`typescript` for svelte2tsx and the language service, and
`bin/ts-version-check.js` rejects TypeScript 7. The estate gives svelte-check
`@typescript/typescript6` through a pnpm `readPackage` hook instead. Upstream, the same
effect would be a small loader that prefers `typescript` when it has
`createSourceFile` and otherwise requires `@typescript/typescript6`, with
`ts-version-check.js` accepting TypeScript 7 when the companion resolves.

## sveltejs/language-tools: `svelte-check --tsgo` stale emit directory

Diff: `sveltejs-language-tools-svelte-check-tsgo-stale-emit.diff`, against
`packages/svelte-check/src/incremental.ts` at language-tools `af7c6a5` (the
same code ships in the `svelte-check@4.7.6` bundle).

Problem: a non-incremental `--tsgo` run starts from an empty manifest, so no
deleted source is ever pruned, but the emit directory
(`.svelte-kit/.svelte-check/svelte`) is reused. Every file in it is part of the
overlay program, so the svelte2tsx output of a deleted `.svelte` file is still
type-checked and reports errors for a file that no longer exists. Found by the
U4 xoxd.ai lane (a removed `__Canary.svelte` kept failing `check`).

Change: when the manifest has no entries, `emitSvelteFiles` removes the emit
directory before writing. Incremental runs with a valid manifest are
unchanged.

## typescript-eslint: no diff

typescript-eslint 8.71.1 peers `typescript >=4.8.4 <6.1.0` and imports it in
about 180 modules. The estate redirects those packages' `typescript`
dependency to `@typescript/typescript6` with a pnpm `readPackage` hook. The upstream fix
is typescript-eslint's own TypeScript 7 work, not a patch from us; the
rationale above is the request to pass on.

## sveltejs/devalue: thenable error message (house rule, optional)

Diff: `sveltejs-devalue-thenable-message.diff`, against `src/stringify.js` at
tag `v5.9.4`.

Not a TypeScript 7 change. SvelteKit bundles devalue into the client runtime,
and the `Cannot stringify a Promise or thenable` error is the one em dash in
devalue that survives minification. The estate leak scan bans em and en dashes
in published output, so the message uses a semicolon. Upstream value is low;
the operator may keep this local.
