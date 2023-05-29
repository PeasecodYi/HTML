import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  createWebHashHistory,
  createMemoryHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/mul/:x/:y",
    name: "mulView",
    component: () => import("@/views/MulView.vue"),
  },
  {
    path: "/table99",
    //name: "table99View",
    component: () => import("@/views/Table99View.vue"),
  },
  {
    path: "/composite/:x/:y",
    components: {
      default: () => import("@/views/DefaultView.vue"),
      subMulView: () => import("@/views/MulView.vue"),
      subTable99View: () => import("@/views/Table99View.vue"),
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
