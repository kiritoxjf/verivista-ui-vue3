import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "hello",
		component: () => import("../views/FrameView.vue"),
		children: [
			{
				path: "/",
				name: "home",
				component: () => import("../views/HomeView.vue"),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory("/"),
	routes,
});

export default router;
