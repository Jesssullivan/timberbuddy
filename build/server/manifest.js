const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.Di52TzxX.js","app":"_app/immutable/entry/app.Dd-mebvc.js","imports":["_app/immutable/entry/start.Di52TzxX.js","_app/immutable/chunks/entry.CyP2UbcE.js","_app/immutable/chunks/scheduler.B_ODK09l.js","_app/immutable/chunks/index.mMtE5ovN.js","_app/immutable/entry/app.Dd-mebvc.js","_app/immutable/chunks/scheduler.B_ODK09l.js","_app/immutable/chunks/index.0nBEQ_MK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-K0LtkzmE.js')),
			__memo(() => import('./chunks/1-Dv4ZtV5H.js')),
			__memo(() => import('./chunks/2-B0-K1dEu.js')),
			__memo(() => import('./chunks/3-DlwJdKb5.js')),
			__memo(() => import('./chunks/4-psD-SPpc.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: __memo(() => import('./chunks/_server.ts-CPau_ZFU.js'))
			},
			{
				id: "/core",
				pattern: /^\/core\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/stack",
				pattern: /^\/stack\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
