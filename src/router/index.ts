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
//猫咪
// import {
//   createRouter,
//
//   //用于创建路由实例
//   createWebHistory,
//
//   //用于history的路由模式
//   RouteRecordRaw,
//
//   //路由数据结构
// } from "vue-router";
//
// const routes: Array<RouteRecordRaw> = [
//   {
//     //默认路由
//
//     path: "/",
//
//     name: "home",
//
//     meta: {
//       menuShow: true, // 是否在导航栏中显示
//
//       menuName: "首页", // 导航栏中显示的名称
//     },
//
//     // 懒加载，仅当该路由被实际访问时import相关视图组件
//
//     component: () => import("@/views/DefaultView.vue"),
//   },
//
//   {
//     //猫咪
//
//     path: "/catRoot",
//
//     name: "catRoot",
//
//     meta: {
//       menuShow: true, // 是否在导航栏中显示
//
//       menuName: "猫咪管理", // 导航栏中显示的名称
//     },
//
//     children: [
//       {
//         meta: {
//           menuShow: true, // 是否在导航栏中显示
//
//           menuName: "猫咪信息", // 导航栏中显示的名称
//         },
//
//         path: "/cat",
//
//         name: "catView",
//
//         // 懒加载，仅当该路由被实际访问时import相关视图组件
//
//         component: () => import("@/views/CatView.vue"),
//       },
//     ],
//   },
//
//   {
//     //基础信息
//
//     path: "/catBasicInfoRoot",
//
//     name: "catBasicInfoRoot",
//
//     meta: {
//       menuShow: true, // 是否在导航栏中显示
//
//       menuName: "基础信息", // 导航栏中显示的名称
//     },
//
//     children: [
//       {
//         meta: {
//           menuShow: true, // 是否在导航栏中显示
//
//           menuName: "猫咪品种", // 导航栏中显示的名称
//         },
//
//         path: "/cat/breed",
//
//         name: "catBreedView", // 懒加载，仅当该路由被实际访问时import相关视图组件
//
//         component: () => import("@/views/CatBreedView.vue"),
//       },
//     ],
//   },
// ];
//
// const router = createRouter({
//   // process.env.BASE_URL 默认为 "/"
//
//   /* 基于history的路由模式 */
//
//   history: createWebHistory(process.env.BASE_URL),
//
//   /* 基于hash的路由模式 */
//
//   //history: createWebHashHistory(process.env.BASE_URL),
//
//   /* 基于内存的路由模式 */
//
//   //history: createMemoryHistory(process.env.BASE_URL),
//
//   routes,
// });
//
// export default router;
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

// 对路由进行定义,创建路由器，调用createRouter方法
const routes: Array<RouteRecordRaw> = [
  /*{ path: "/",
  // 将"/"重定向到既有功能的路径上（非必要写法）
  redirect: { name: "mulView" }, },
  */
  // 将"/"重定向到既有功能的路径上（非必要写法）
  //params传参 和路径变量嵌入相关，因此必须在path属性的值中插入半角冒号开始的变量占位符；同时name属性必须定义
  /*{
    //路径嵌入参数后的形态
    path: "/mul/:x/:y",
    name: "mulView",
    // 懒加载，仅当该路由被实际访问时import相关视图组件
    component: () => import("@/views/MulView.vue"),
  },
  {
    path: "/table99",
    name: "table99View",
    component: () => import("@/views/Table99View.vue"),
  },
  {
    path: "/composite",
    components: {
      default: () => import("@/views/DefaultView.vue"),
      subMulView: () => import("@/views/MulView.vue"),
      subTable99View: () => import("@/views/Table99View.vue"),
    },
  },*/
  //
  /* {
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
  },*/
  {
    //默认路由
    path: "/",
    name: "Car",
    meta: {
      menuShow: true, // 是否在导航栏中显示
      menuName: "品牌设计", // 导航栏中显示的名称
    },
    // 懒加载，仅当该路由被实际访问时import相关视图组件
    component: () => import("@/views/DefaultView.vue"),
  },
  {
    //动力参数
    path: "/dynamicParametersRoot",
    name: "dynamicParametersRoot",
    meta: {
      menuShow: true, // 是否在导航栏中显示
      menuName: "动力参数", // 导航栏中显示的名称
    },
    children: [
      {
        meta: {
          menuShow: true, // 是否在导航栏中显示
          menuName: "排量大小", // 导航栏中显示的名称
        },
        path: "/carDisplacement",
        name: "carDisplacementView",
        // 懒加载，仅当该路由被实际访问时import相关视图组件
        component: () => import("@/views/CarDisplacementView.vue"),
      },
      {
        meta: {
          menuShow: true, // 是否在导航栏中显示
          menuName: "能源类型", // 导航栏中显示的名称
        },
        path: "/carEnergy",
        name: "carEnergyView",
        // 懒加载，仅当该路由被实际访问时import相关视图组件
        component: () => import("@/views/CarEnergyView.vue"),
      },
    ],
  },
  {
    //结构参数
    path: "/structureParametersRoot",
    name: "structureParametersRoot",
    meta: {
      menuShow: true, // 是否在导航栏中显示
      menuName: "结构参数", // 导航栏中显示的名称
    },
    children: [
      {
        meta: {
          menuShow: true, // 是否在导航栏中显示
          menuName: "结构类型", // 导航栏中显示的名称
        },
        path: "/carBodyStyle",
        name: "carBodyStyleView", // 懒加载，仅当该路由被实际访问时import相关视图组件
        component: () => import("@/views/CarBodyStyleView.vue"),
      },
      {
        meta: {
          menuShow: true, // 是否在导航栏中显示
          menuName: "变速箱", // 导航栏中显示的名称
        },
        path: "/carTransmission",
        name: "carTransmissionView", // 懒加载，仅当该路由被实际访问时import相关视图组件
        component: () => import("@/views/CarTransmissionView.vue"),
      },
      {
        meta: {
          menuShow: true, // 是否在导航栏中显示
          menuName: "选配件", // 导航栏中显示的名称
        },
        path: "/carFeatures",
        name: "carFeaturesView", // 懒加载，仅当该路由被实际访问时import相关视图组件
        component: () => import("@/views/CarFeaturesView.vue"),
      },
    ],
  },
  {
    //区域参数
    path: "/RegionParameterRoot",
    name: "RegionParameterRoot",
    meta: {
      menuShow: true, // 是否在导航栏中显示
      menuName: "区域参数", // 导航栏中显示的名称
    },
    children: [
      {
        meta: {
          menuShow: true, // 是否在导航栏中显示
          menuName: "车系", // 导航栏中显示的名称
        },
        path: "/carSerial",
        name: "carSerialView", // 懒加载，仅当该路由被实际访问时import相关视图组件
        component: () => import("@/views/CarSerialView.vue"),
      },
      {
        meta: {
          menuShow: true, // 是否在导航栏中显示
          menuName: "产地", // 导航栏中显示的名称
        },
        path: "/carOriginPlace",
        name: "carOriginPlaceView", // 懒加载，仅当该路由被实际访问时import相关视图组件
        component: () => import("@/views/CarOriginPlaceView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
