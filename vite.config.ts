import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 8080,
	},
	plugins: [
		vue(),
		AutoImport({
			dts: "types/auto-imports.d.ts",
			imports: ["vue"],
			eslintrc: {
				enabled: false,
				filepath: "./.eslintrc-auto-import.json",
				globalsPropValue: true,
			},
		}),
		Components({
			dirs: ["src/views"],
			resolvers: [NaiveUiResolver()],
		}),
	],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
});
