import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-node';
import tailwindcss from '@tailwindcss/vite';
import { Server } from 'socket.io';
import { defineConfig, type Plugin, type ViteDevServer } from 'vite';

// Dev only: attach a socket.io server to Vite's HTTP server so the touch UI
// can connect while developing. Production uses server/*_socket_server.ts,
// which wraps the adapter-node handler.
const webSocketServer: Plugin = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return;

		const io = new Server(server.httpServer);

		io.on('connection', (socket) => {
			socket.emit('eventFromServer', 'Hello, World 👋');
		});
	},
};

export default defineConfig({
	plugins: [
		tailwindcss(),
		// SvelteKit 3: the former svelte.config.js options are options of the
		// sveltekit() plugin.
		sveltekit({
			preprocess: [vitePreprocess()],
			compilerOptions: {
				runes: true,
				// Remote functions (RU3) need Svelte's async mode: components
				// `await` a remote query directly.
				experimental: { async: true },
			},
			// RU3: remote functions (query/command) carry the server data.
			experimental: { remoteFunctions: true },
			adapter: adapter({
				precompress: true,
				envPrefix: '',
			}),
		}),
		webSocketServer,
	],
	server: {
		port: 3000,
	},
	preview: {
		port: 3000,
	},
});
