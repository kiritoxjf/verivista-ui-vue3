import { createApp } from "vue";
import "./style.less";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";
import 'default-passive-events'

const app = createApp(App);

app.use(router).use(createPinia()).mount("#app");
