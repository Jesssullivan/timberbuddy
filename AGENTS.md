# AGENTS.md

Timber Buddy is a SvelteKit touch UI plus a node socket server for a sawmill
control panel on a Raspberry Pi (see README.md). This file records the stack
and the rules for changing it.

## Stack (estate uplift RU1, 2026-10)

Exact pins (RU5); every other dependency uses a range.

| Package | Version |
|---|---|
| @sveltejs/kit | 3.0.1 |
| svelte | 5.57.2 (runes, async mode) |
| vite | 8.3.3 |
| typescript | 7.0.2 |
| effect | 4.0.2 |
| @skeletonlabs/skeleton, @skeletonlabs/skeleton-svelte | 5.0.1 (Tailwind 4) |
| vitest | 5.0.3 |
| @sveltejs/adapter-node | 6.0.0 |
| @sveltejs/vite-plugin-svelte | 7.3.1 |
| svelte-check | 4.7.6 (`--tsgo`) |
| @typescript/typescript6 | 6.0.2 (in-process parser companion only, RU13b) |

Node `^22.17.0 || >=24 <25`, pnpm 10.13.1 from `packageManager`.
`src/lib/stack-pins.test.ts` fails if a pin drifts. When site.scaffold's
estate drift check (`estate/versions.json`) lands, wire it in and keep the test.

## TypeScript 7 (RU13, RU13b)

TypeScript 7.0.2 is `typescript` and does all type checking
(`svelte-check --tsgo`). It has no in-process JS API, so SvelteKit sync,
svelte2tsx (inside svelte-check) and typescript-eslint parse with
`@typescript/typescript6`. `patches/`, `.pnpmfile.cjs` and the `pnpm` block of
package.json are copied verbatim from xoxd-ai/site.scaffold; take updates from
there rather than editing them here. `patches/README.md` explains each patch.
Never add `@typescript/native` or an `npm:typescript@6` alias.

## SvelteKit 3

- No svelte.config.js: options are passed to `sveltekit({...})` in
  vite.config.ts (adapter-node with `envPrefix: ''`, as before).
- `#lib/*` (package.json `imports`) replaces `$lib`; import `.ts` modules with
  a `.js` suffix.
- `$app/state` replaces `$app/stores`; use `resolve()` from `$app/paths` for
  internal links and `goto`.

## Server data (RU3)

Remote functions in `src/lib/store.remote.ts` own store.json:
`getStore` (query, read only), `setCutSize` (command, Effect Schema validated:
only `stack_height` / `core_height` and a finite number) and `recordCut`
(command, increments the cut count on the server). The file logic is in
`src/lib/server/store.ts`. `server/pi_socket_server.ts` reads the same
store.json from the working directory while it runs a routine.

## In-house packages (RU6, RU9)

None. If one is added, it comes from the Bazel registry (bazel_dep plus
rules_js linking), never from npm. Nothing here is published to npm (RU8).

## Checks

```shell
pnpm install --frozen-lockfile
pnpm run check   # svelte-kit sync + svelte-check --tsgo --fail-on-warnings
pnpm run test    # vitest: store, schema and stack pins
pnpm run lint    # prettier + eslint over src and root configs
pnpm run build   # adapter-node output in build/ (server/*.ts imports build/handler.js)
```

Development without a Pi: `pnpm run build && pnpm run darwin-start` serves the
app with socket.io on port 3000 and maps the n/s/t/r keys to the panel buttons.
