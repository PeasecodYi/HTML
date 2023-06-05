// import {
//   createRouter,
//   createWebHistory,
//   RouteRecordRaw,
//   createWebHashHistory,
//   createMemoryHistory,
// } from "vue-router";
// import HomeView from "../views/HomeView.vue";
//
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: "/mul/:x/:y",
//     name: "mulView",
//     component: () => import("@/views/MulView.vue"),
//   },
//   {
//     path: "/table99",
//     //name: "table99View",
//     component: () => import("@/views/Table99View.vue"),
//   },
//   {
//     path: "/composite/:x/:y",
//     components: {
//       default: () => import("@/views/DefaultView.vue"),
//       subMulView: () => import("@/views/MulView.vue"),
//       subTable99View: () => import("@/views/Table99View.vue"),
//     },
//   },
// ];
//
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });
//
// export default router;
import {
  createRouter,

  //用于创建路由实例
  createWebHistory,

  //用于history的路由模式
  RouteRecordRaw,

  //路由数据结构
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    //默认路由

    path: "/",

    name: "home",

    meta: {
      menuShow: true, // 是否在导航栏中显示

      menuName: "首页", // 导航栏中显示的名称
    },

    // 懒加载，仅当该路由被实际访问时import相关视图组件

    component: () => import("@/views/DefaultView.vue"),
  },

  {
    //猫咪

    path: "/catRoot",

    name: "catRoot",

    meta: {
      menuShow: true, // 是否在导航栏中显示

      menuName: "猫咪管理", // 导航栏中显示的名称
    },

    children: [
      {
        meta: {
          menuShow: true, // 是否在导航栏中显示

          menuName: "猫咪信息", // 导航栏中显示的名称
        },

        path: "/cat",

        name: "catView",

        // 懒加载，仅当该路由被实际访问时import相关视图组件

        component: () => import("@/views/CatView.vue"),
      },
    ],
  },

  {
    //基础信息

    path: "/catBasicInfoRoot",

    name: "catBasicInfoRoot",

    meta: {
      menuShow: true, // 是否在导航栏中显示

      menuName: "基础信息", // 导航栏中显示的名称
    },

    children: [
      {
        meta: {
          menuShow: true, // 是否在导航栏中显示

          menuName: "猫咪品种", // 导航栏中显示的名称
        },

        path: "/cat/breed",

        name: "catBreedView", // 懒加载，仅当该路由被实际访问时import相关视图组件

        component: () => import("@/views/CatBreedView.vue"),
      },
    ],
  },
];

const router = createRouter({
  // process.env.BASE_URL 默认为 "/"

  /* 基于history的路由模式 */

  history: createWebHistory(process.env.BASE_URL),

  /* 基于hash的路由模式 */

  //history: createWebHashHistory(process.env.BASE_URL),

  /* 基于内存的路由模式 */

  //history: createMemoryHistory(process.env.BASE_URL),

  routes,
});

export default router;
