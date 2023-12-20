import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 8080,
		proxy: {
			"/file": {
				target: "https://verivista.oss-cn-beijing.aliyuncs.com/",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/file/, ""),
			},
			"/api": {
				target: "http://localhost:8081/",
				changeOrigin: true,
			},
		},
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
			dirs: ["src/views", "src/components"],
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
  define: {
    'process.env': {
      BASE_URL: ''
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
	build: {
		target: "modules", //浏览器兼容性modules|esnext
		sourcemap: false, //构建后是否生成soutrce map文件
		minify: "terser", // 混淆器,terser构建后文件体积更小
		// outDir: envConfig.VITE_OUTPUT_DIR,  //指定输出文件包名
		outDir: "dist",
		assetsDir: "assets", // 指定生成静态资源的存放路径
		chunkSizeWarningLimit: 1500, //警报门槛，限制大文件大小B为单位
		assetsInlineLimit: 4096, //小于此阈值的导入或引用资源将内联为base64编码,以避免额外的http请求,设置为0可以完全禁用此项
		// 清除console和debugger(minify: 'terser',)设置后这个terserOptions才有用
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
		rollupOptions: {
			output: {
				//自动分割包名输出 chunkSizeWarningLimit 配置大小
				chunkFileNames: "js/[name]-[hash].js", //入口文件名
				entryFileNames: "js/[name]-[hash].js", //出口文件名位置
				assetFileNames: "static/[ext]/[name]-[hash].[ext]", //静态文件名位置
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return id
							.toString()
							.split("node_modules/")[1]
							.split("/")[0]
							.toString();
					}
				},
			},
		},
	},
});
