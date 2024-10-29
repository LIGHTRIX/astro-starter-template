const f = "modulepreload",
	h = function (o) {
		return "/" + o;
	},
	l = {},
	E = function (u, s, v) {
		let a = Promise.resolve();
		if (s && s.length > 0) {
			document.getElementsByTagName("link");
			const r = document.querySelector("meta[property=csp-nonce]"),
				e = r?.nonce || r?.getAttribute("nonce");
			a = Promise.allSettled(
				s.map((t) => {
					if (((t = h(t)), t in l)) return;
					l[t] = !0;
					const i = t.endsWith(".css"),
						d = i ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${t}"]${d}`)) return;
					const n = document.createElement("link");
					if (
						((n.rel = i ? "stylesheet" : f),
						i || (n.as = "script"),
						(n.crossOrigin = ""),
						(n.href = t),
						e && n.setAttribute("nonce", e),
						document.head.appendChild(n),
						i)
					)
						return new Promise((m, p) => {
							n.addEventListener("load", m),
								n.addEventListener("error", () =>
									p(
										new Error(
											`Unable to preload CSS for ${t}`,
										),
									),
								);
						});
				}),
			);
		}
		function c(r) {
			const e = new Event("vite:preloadError", { cancelable: !0 });
			if (((e.payload = r), window.dispatchEvent(e), !e.defaultPrevented))
				throw r;
		}
		return a.then((r) => {
			for (const e of r || []) e.status === "rejected" && c(e.reason);
			return u().catch(c);
		});
	};
(
	await E(async () => {
		const { initializeApp: o } = await import("./index.esm.CKdHjiUb.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "",
	appId: "",
	authDomain: "",
	databaseURL: "",
	measurementId: "",
	messagingSenderId: "",
	projectId: "",
	storageBucket: "",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.DGLoSwJy.js.map
