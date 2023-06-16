<template>
  <el-container class="full-height">
    <div class="block text-center">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
      </el-carousel>
    </div>
    <el-header>
      <el-menu
        mode="horizontal"
        :default-active="$route.path"
        router
        background-color="#00000F"
        text-color="#ffff"
        active-text-color="#ffd04b"
      >
        <template v-for="(item, index) in $router.options.routes" :key="index">
          <template v-if="item.children && item.children.length > 0">
            <el-sub-menu :index="index" v-if="item.meta.menuShow">
              <template #title>
                {{ item.meta.menuName }}
              </template>
              <!--              是对menu-item的循环-->
              <template
                v-for="(itemChild, indexChild) in item.children"
                :key="`${indexChild}`"
              >
                <!--                如果是false不显示，如果是true显示，判断item的孩子-->
                <el-menu-item
                  :index="itemChild.path"
                  v-if="itemChild.meta.menuShow"
                >
                  <span>{{ itemChild.meta.menuName }}</span>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="item.path" v-if="item.meta.menuShow">
              {{ item.meta.menuName }}
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "CarMenuView",
};
</script>

<style scoped>
.full-height {
  height: 100%;
}
:deep(.el-menu) {
}
.el-carousel__item:nth-child(6) {
  background-image: url("../assets/780.jpg");
  background-size: 100% 150px;
}
.el-carousel__item:nth-child(5) {
  background-image: url("../assets/350.jpg");
  background-size: 100% 150px;
}
.el-carousel__item:nth-child(3) {
  background-image: url("../assets/b104ec26_E906293_6fad5394.jpg");
  background-size: 100% 150px;
}
.el-carousel__item:nth-child(4) {
  background-image: url("../assets/true.jpg");
  background-size: 100% 150px;
}
</style>
