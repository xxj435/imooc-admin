<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    :unique-opened="true"
    router
    :default-active="activeMenu"
    :collapse="!$store.getters.sidebarOpened"
  >

    <SidebarItem
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></SidebarItem>
  </el-menu>
</template>
<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { filterRouters, generateMenus } from "@/utils/route";
import SidebarItem from "./SidebarItem";
const router = useRouter();

const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes());
  return generateMenus(filterRoutes);
});
// 计算高亮 menu 的方法
const route = useRoute();
const activeMenu = computed(() => {
  const { path } = route;
  return path;
});
console.log(router);
</script>
