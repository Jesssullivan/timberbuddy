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
		client: {"start":"_app/immutable/entry/start.BaTb5CWE.js","app":"_app/immutable/entry/app.DIIyAuOI.js","imports":["_app/immutable/entry/start.BaTb5CWE.js","_app/immutable/chunks/entry.Bl8pTr5r.js","_app/immutable/chunks/scheduler.B_ODK09l.js","_app/immutable/chunks/index.mMtE5ovN.js","_app/immutable/entry/app.DIIyAuOI.js","_app/immutable/chunks/scheduler.B_ODK09l.js","_app/immutable/chunks/index.0nBEQ_MK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BygHmkXk.js')),
			__memo(() => import('./chunks/1-DnX0QbzH.js')),
			__memo(() => import('./chunks/2-JkGaduox.js')),
			__memo(() => import('./chunks/3-mlnDFz20.js')),
			__memo(() => import('./chunks/4-DRkIFRwl.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: __memo(() => import('./chunks/_server.ts-D1rd6W_4.js'))
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
