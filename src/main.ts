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
const token = "d9c0091bc10eaf012817207bd0109855";
installElementPlus(app);
app.provide("global", {
  token,
});
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router).use(ElementPlus, { locale }).mount("#app");
