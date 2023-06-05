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
            <el-submenu :index="index" v-if="item.meta.menuShow">
              <template #title>
                {{ item.meta.menuName }}
              </template>

              <template
                v-for="(itemChild, indexChild) in item.children"
                :key="`${indexChild}`"
              >
                <el-menu-item
                  :index="itemChild.path"
                  v-if="itemChild.meta.menuShow"
                >
                  <span>{{ itemChild.meta.menuName }}</span>
                </el-menu-item>
              </template>
            </el-submenu>
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

<script setup lang="ts"></script>

<style scoped lang="css">
.full-height {
  height: 100%;
}

:deep(.el-menu) {
}
</style>
