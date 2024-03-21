import { fileURLToPath } from "url";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [],

	// Alias do Vite @server para a pasta server/
	alias: {
		"@server": fileURLToPath(new URL("./server/", import.meta.url)),
		"@types": fileURLToPath(new URL("./types", import.meta.url)),
	},
});
