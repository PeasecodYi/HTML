//猫咪管理
import "@/assets/css/global.css";

import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";

import installElementPlus from "./plugins/element";

const app = createApp(App);

const token = "2f6bed43319d1a9c559d06ffdb158fd7";
installElementPlus(app);

app.provide("global", {
  token,
});

app.use(router).mount("#app");
