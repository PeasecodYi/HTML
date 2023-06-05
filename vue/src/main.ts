// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";
// import installElementPlus from "./plugins/element";
//
// const app = createApp(App);
// installElementPlus(app);
// app.use(router).mount("#app");
// import "@/assets/css/global.css";
// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";
// import installElementPlus from "./plugins/element";
// const app = createApp(App);
// installElementPlus(app);
// app.use(router).mount("#app");
//猫咪管理
// import "@/assets/css/global.css";
//
// import { createApp } from "vue";
//
// import App from "./App.vue";
//
// import router from "./router";
//
// import installElementPlus from "./plugins/element";
//
// const app = createApp(App);
//
// const token = "2f6bed43319d1a9c559d06ffdb158fd7";
// installElementPlus(app);
//
// app.provide("global", {
//   token,
// });
//
// app.use(router).mount("#app");
// 图标
import "@/assets/css/global.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import installElementPlus from "./plugins/element";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App);
const token = "6a94e3a90e8121b9e745f717e9a06761";
installElementPlus(app);
app.provide("global", {
  token,
});
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router).use(ElementPlus, { locale }).mount("#app");
//菜单整合
// import { createApp } from "vue";
//
// import App from "./App.vue";
//
// import router from "./router";
//
// import installElementPlus from "./plugins/element";
//
// const app = createApp(App);
//
// const token = "6a94e3a90e8121b9e745f717e9a06761";
//
// installElementPlus(app);
//
// app.provide("global", {
//   token,
// });
//
// app.use(router).mount("#app");
