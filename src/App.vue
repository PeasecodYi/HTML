//汽车
<template>
  <CarMenuView />
</template>
<script lang="ts">
import CarMenuView from "@/views/CarMenuView.vue";
export default {
  name: "App",
  components: {
    CarMenuView,
  },
};
</script>
<style>
.full-height {
  height: 100%;
}
.el-header {
  font-size: 14px;
  height: v-bind(headerHeight + "em");
  line-height: v-bind(headerHeight + "em");
  color: #eeeeee;
  background: #545454;
}
.el-footer {
  font-size: 14px;
  height: v-bind(headerHeight + "em");
  line-height: v-bind(headerHeight + "em");
  color: #eeeeee;
  background: #333333;
}
</style>
