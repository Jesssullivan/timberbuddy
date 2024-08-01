export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.C_WzKxHi.js","app":"_app/immutable/entry/app.DyvOf9Xa.js","imports":["_app/immutable/entry/start.C_WzKxHi.js","_app/immutable/chunks/entry.B4xYBZ9F.js","_app/immutable/chunks/scheduler.CyJLdlF6.js","_app/immutable/chunks/index.D7owZnvV.js","_app/immutable/entry/app.DyvOf9Xa.js","_app/immutable/chunks/scheduler.CyJLdlF6.js","_app/immutable/chunks/index.DE9qO_jh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
