import { defineConfig } from 'vitest/config';

// Unit tests cover plain modules (the store and its schema, the stack pins).
// They do not need the SvelteKit plugin.
export default defineConfig({
	test: {
		include: ['src/**/*.test.ts'],
		environment: 'node',
	},
});
