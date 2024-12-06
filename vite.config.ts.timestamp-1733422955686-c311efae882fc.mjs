// vite.config.ts
import { purgeCss } from "file:///home/TimberBuddy/timberbuddy/node_modules/.pnpm/vite-plugin-tailwind-purgecss@0.3.3_tailwindcss@3.4.5_vite@5.4.8_@types+node@22.7.0_/node_modules/vite-plugin-tailwind-purgecss/dist/index.js";
import { sveltekit } from "file:///home/TimberBuddy/timberbuddy/node_modules/.pnpm/@sveltejs+kit@2.5.28_@sveltejs+vite-plugin-svelte@3.1.2_svelte@4.2.19_vite@5.4.8_@types+node@_ztmrzcl3rp3et57l7inewubl3y/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { defineConfig } from "file:///home/TimberBuddy/timberbuddy/node_modules/.pnpm/vite@5.4.8_@types+node@22.7.0/node_modules/vite/dist/node/index.js";
import { Server } from "file:///home/TimberBuddy/timberbuddy/node_modules/.pnpm/socket.io@4.8.0/node_modules/socket.io/wrapper.mjs";
var webSocketServer = {
  name: "webSocketServer",
  configureServer(server) {
    if (!server.httpServer) return;
    const io = new Server(server.httpServer);
    io.on("connection", (socket) => {
      socket.emit("eventFromServer", "Hello, World \u{1F44B}");
    });
  }
};
var vite_config_default = defineConfig({
  plugins: [sveltekit(), purgeCss(), webSocketServer],
  server: {
    port: 3e3
  },
  preview: {
    port: 3e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9UaW1iZXJCdWRkeS90aW1iZXJidWRkeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvVGltYmVyQnVkZHkvdGltYmVyYnVkZHkvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvVGltYmVyQnVkZHkvdGltYmVyYnVkZHkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBwdXJnZUNzcyB9IGZyb20gJ3ZpdGUtcGx1Z2luLXRhaWx3aW5kLXB1cmdlY3NzJztcbmltcG9ydCB7IHN2ZWx0ZWtpdCB9IGZyb20gJ0BzdmVsdGVqcy9raXQvdml0ZSc7XG5pbXBvcnQgeyB0eXBlIFZpdGVEZXZTZXJ2ZXIsIGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnc29ja2V0LmlvJztcblxuY29uc3Qgd2ViU29ja2V0U2VydmVyID0ge1xuXHRuYW1lOiAnd2ViU29ja2V0U2VydmVyJyxcblx0Y29uZmlndXJlU2VydmVyKHNlcnZlcjogVml0ZURldlNlcnZlcikge1xuXHRcdGlmICghc2VydmVyLmh0dHBTZXJ2ZXIpIHJldHVyblxuXG5cdFx0Y29uc3QgaW8gPSBuZXcgU2VydmVyKHNlcnZlci5odHRwU2VydmVyKVxuXG5cdFx0aW8ub24oJ2Nvbm5lY3Rpb24nLCAoc29ja2V0KSA9PiB7XG5cdFx0XHRzb2NrZXQuZW1pdCgnZXZlbnRGcm9tU2VydmVyJywgJ0hlbGxvLCBXb3JsZCBcdUQ4M0RcdURDNEInKVxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW3N2ZWx0ZWtpdCgpLCBwdXJnZUNzcygpLCB3ZWJTb2NrZXRTZXJ2ZXJdLFxuXHRzZXJ2ZXI6IHtcblx0XHRwb3J0OiAzMDAwLFxuXHR9LFxuXHRwcmV2aWV3OiB7XG5cdFx0cG9ydDogMzAwMCxcblx0fVxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF5USxTQUFTLGdCQUFnQjtBQUNsUyxTQUFTLGlCQUFpQjtBQUMxQixTQUE2QixvQkFBb0I7QUFDakQsU0FBUyxjQUFjO0FBRXZCLElBQU0sa0JBQWtCO0FBQUEsRUFDdkIsTUFBTTtBQUFBLEVBQ04sZ0JBQWdCLFFBQXVCO0FBQ3RDLFFBQUksQ0FBQyxPQUFPLFdBQVk7QUFFeEIsVUFBTSxLQUFLLElBQUksT0FBTyxPQUFPLFVBQVU7QUFFdkMsT0FBRyxHQUFHLGNBQWMsQ0FBQyxXQUFXO0FBQy9CLGFBQU8sS0FBSyxtQkFBbUIsd0JBQWlCO0FBQUEsSUFDakQsQ0FBQztBQUFBLEVBQ0Y7QUFDRDtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFHLGVBQWU7QUFBQSxFQUNsRCxRQUFRO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsTUFBTTtBQUFBLEVBQ1A7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
