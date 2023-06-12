<!--<template>-->
<!--  <div class="full-height">-->
<!--    <el-container class="full-height">-->
<!--      <el-header>-->
<!--        顶部高度：-->
<!--        <input-->
<!--          v-model="headerHeight"-->
<!--          type="range"-->
<!--          min="1.5"-->
<!--          max="10"-->
<!--          step="0.1"-->
<!--        />:{{ headerHeight }}em-->
<!--      </el-header>-->
<!--      <el-main>-->
<!--        <CalculatorComponent />&emsp; <CalculatorComponent />&emsp;-->
<!--        <CalculatorComponent />&emsp;-->
<!--        <CalculatorComponent />-->
<!--      </el-main>-->
<!--      <el-footer>-->
<!--        底部高度：-->
<!--        <input-->
<!--          v-model="footerHeight"-->
<!--          type="range"-->
<!--          min="1.5"-->
<!--          max="10"-->
<!--          step="0.1"-->
<!--        />:{{ footerHeight }}em-->
<!--      </el-footer>-->
<!--    </el-container>-->
<!--  </div>-->
<!--</template>-->
<!--<script setup lang="ts">-->
<!--import { ref } from "vue";-->
<!--import CalculatorComponent from "@/components/CalculatorComponent.vue";-->
<!--let headerHeight = ref("1.5");-->
<!--let footerHeight = ref("1.5");-->
<!--</script>-->
<!--<style scoped>-->
<!--.full-height {-->
<!--  height: 100%;-->
<!--}-->
<!--.el-header {-->
<!--  font-size: 14px;-->
<!--  height: v-bind(headerHeight + "em");-->
<!--  line-height: v-bind(headerHeight + "em");-->
<!--  color: #eeeeee;-->
<!--  background: #545454;-->
<!--}-->
<!--.el-footer {-->
<!--  font-size: 14px;-->
<!--  height: v-bind(footerHeight + "em");-->
<!--  line-height: v-bind(footerHeight + "em");-->
<!--  color: #eeeeee;-->
<!--  background: #333333;-->
<!--}-->
<!--</style>-->
<!--<template>-->
<!--  <fieldset>-->
<!--    <legend>菜单</legend>-->
<!--    <ol>-->
<!--      <li>-->
<!--        <router-link :to="{ name: 'mulView', params: { x: 3, y: 4 } }">-->
<!--          我的乘法器视图-->
<!--        </router-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <router-link :to="{ path: '/table99', query: { range: [3, 6] } }">-->
<!--          我的乘法表视图-->
<!--        </router-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <router-link-->
<!--          :to="{-->
<!--            name: 'compositeView',-->
<!--            path: '/composite',-->
<!--            params: { x: 12, y: 18 },-->
<!--            query: { range: [2, 3] },-->
<!--          }"-->
<!--        >-->
<!--          组合视图-->
<!--        </router-link>-->
<!--      </li>-->
<!--    </ol>-->
<!--  </fieldset>-->
<!--  <fieldset>-->
<!--    <legend>默认视图</legend>-->
<!--    <router-view />-->
<!--  </fieldset>-->
<!--  <fieldset>-->
<!--    <legend>index.ts中subMulView的视图</legend>-->
<!--    <router-view name="subMulView" />-->
<!--  </fieldset>-->
<!--  <fieldset>-->
<!--    <legend>index.ts中subTable99View的视图</legend>-->
<!--    <router-view name="subTable99View" />-->
<!--  </fieldset>-->
<!--</template>-->
<!--<script lang="ts">-->
<!--export default {-->
<!--  name: "App",-->
<!--};-->
<!--</script>-->
<!--<style>-->
<!--ol {-->
<!--  list-style-type: decimal;-->
<!--  counter-reset: itemCounter;-->
<!--}-->
<!--ol li {-->
<!--  display: inline-block;-->
<!--  margin-left: 10px;-->
<!--}-->
<!--ol li:before {-->
<!--  content: "(" counter(itemCounter) ")";-->
<!--  counter-increment: itemCounter;-->
<!--}-->
<!--fieldset {-->
<!--  margin-top: 40px;-->
<!--  min-height: 50px;-->
<!--}-->
<!--</style>-->
<!--<template>-->
<!--  <ProgramComponent />-->
<!--  &lt;!&ndash;  <AxiosComponent />&ndash;&gt;-->
<!--</template>-->
<!--<script setup lang="ts">-->
<!--import AxiosComponent from "@/components/AxiosComponent.vue";-->
<!--import ProgramComponent from "@/components/ProgramComponent.vue";-->
<!--import AComponemt from "@/components/AComponemt.vue";-->
<!--</script>-->
<!--<style></style>-->
<!--猫咪管理-->
<template>
  <CatBreedView />
  <CatView />
</template>

<script setup lang="ts">
import CatBreedView from "@/views/CatBreedView.vue";
import CatView from "@/views/CatView.vue";
</script>

<style scoped></style>

<!--体验-el-container-->
<!--<template>-->
<!--  <div class="full-height">-->
<!--    <el-container class="full-height">-->
<!--      <el-header>-->
<!--        顶部高度：-->
<!--        <input-->
<!--          v-model="headerHeight"-->
<!--          type="range"-->
<!--          min="1.5"-->
<!--          max="10"-->
<!--          step="0.1"-->
<!--        />:{{ headerHeight }}em-->
<!--      </el-header>-->
<!--      <el-main>-->
<!--        <CalculatorComponent />&emsp; <CalculatorComponent />&emsp;-->
<!--        <CalculatorComponent />&emsp;-->
<!--        <CalculatorComponent />-->
<!--      </el-main>-->
<!--      <el-footer>-->
<!--        底部高度：-->
<!--        <input-->
<!--          v-model="footerHeight"-->
<!--          type="range"-->
<!--          min="1.5"-->
<!--          max="10"-->
<!--          step="0.1"-->
<!--        />:{{ footerHeight }}em-->
<!--      </el-footer>-->
<!--    </el-container>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import { ref } from "vue";-->

<!--import CalculatorComponent from "@/components/CalculatorComponent.vue";-->
<!--let headerHeight = ref("1.5");-->
<!--let footerHeight = ref("1.5");-->
<!--</script>-->
<!--<style scoped>-->
<!--.full-height {-->
<!--  height: 100%;-->
<!--}-->
<!--.el-header {-->
<!--  font-size: 14px;-->
<!--  height: v-bind(headerHeight + "em");-->
<!--  line-height: v-bind(headerHeight + "em");-->
<!--  color: #eeeeee;-->
<!--  background: #545454;-->
<!--}-->

<!--.el-footer {-->
<!--  font-size: 14px;-->
<!--  height: v-bind(footerHeight + "em");-->
<!--  line-height: v-bind(footerHeight + "em");-->
<!--  color: #eeeeee;-->
<!--  background: #333333;-->
<!--}-->
<!--</style>-->

<!--图标-->
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
