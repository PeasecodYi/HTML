<!--<template>-->
<!--  <HomeMenuView />-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import HomeMenuView from "@/views/HomeMenuView.vue";-->
<!--</script>-->

<!--<style scoped></style>-->
//图标
<!--<template>-->
<!--  <div>-->
<!--    <el-icon><Service /></el-icon>&emsp;-->
<!--    <el-icon color="#0000ff"><Service /></el-icon>&emsp;-->
<!--    <el-icon size="32"><Service /></el-icon>-->
<!--    <el-icon color="red" size="64"><Service /></el-icon>-->
<!--    <hr />-->
<!--    <Button>-->
<!--      <el-icon> <Service /> </el-icon>-->
<!--      服务-->
<!--    </Button>-->
<!--    &emsp;-->
<!--    <el-button>-->
<!--      <el-icon> <Service /> </el-icon>-->
<!--      服务-->
<!--    </el-button>-->
<!--  </div>-->
<!--</template>-->
<!--<script setup lang="ts"></script>-->
<!--<style scoped></style>-->
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
