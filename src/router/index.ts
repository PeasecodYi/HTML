import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

// 对路由进行定义,创建路由器，调用createRouter方法
const routes: Array<RouteRecordRaw> = [
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
