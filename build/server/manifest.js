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
		client: {"start":"_app/immutable/entry/start.D1FjcinT.js","app":"_app/immutable/entry/app.COpT0dH8.js","imports":["_app/immutable/entry/start.D1FjcinT.js","_app/immutable/chunks/entry.B4ji62ci.js","_app/immutable/chunks/scheduler.B_ODK09l.js","_app/immutable/chunks/index.mMtE5ovN.js","_app/immutable/entry/app.COpT0dH8.js","_app/immutable/chunks/scheduler.B_ODK09l.js","_app/immutable/chunks/index.CUMMTj8P.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-vXUrJwHE.js')),
			__memo(() => import('./chunks/1-BHlSHLUL.js')),
			__memo(() => import('./chunks/2-pbWOM8Nq.js')),
			__memo(() => import('./chunks/3-BB7QS1rA.js')),
			__memo(() => import('./chunks/4-CnBBioxS.js'))
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
