<template>
  <el-container class="full-height">
    <el-header>
      <el-menu
        mode="horizontal"
        :default-active="$route.path"
        router
        background-color="#324157"
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
</style>
