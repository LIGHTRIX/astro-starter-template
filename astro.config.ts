import type { defineConfig } from "astro/config";

export default (await import("astro/config")).defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	// TODO Place your site URL here
	// site: "",
	compressHTML: true,
	prefetch: {
		defaultStrategy: "hover",
		prefetchAll: true,
	},
	server: {
		port: 9999,
	},
	build: {
		concurrency: 9999,
	},
	integrations: [
		// @ts-ignore
		import.meta.env.MODE === "production"
			? (await import("astrojs-service-worker")).default()
			: null,
		(await import("@astrojs/sitemap")).default(),
		(await import("@playform/inline")).default({ Logger: 1 }),
		(await import("@playform/format")).default({ Logger: 1 }),
		(await import("@playform/compress")).default({ Logger: 1 }),
	],
	experimental: {
		clientPrerender: true,
		contentIntellisense: true,
	},
	vite: {
		build: {
			sourcemap: true,
		},
		resolve: {
			preserveSymlinks: true,
		},
		css: {
			devSourcemap: true,
			transformer: "postcss",
		},
	},
}) as typeof defineConfig;
