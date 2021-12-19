<!--
 * @Author: your name
 * @Date: 2021-12-08 06:17:08
 * @LastEditTime: 2021-12-08 06:49:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \imooc-admin\src\layout\index.vue
-->
<!--  -->
<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <!-- 左侧 menu -->
    <Sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <Navbar />

        <TagsView id="guide-tags" />
      </div>
      <!-- 内容区 -->
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import AppMain from "@/layout/components/AppMain";
import Navbar from "@/layout/components/Navbar";
import Sidebar from "@/layout/components/Sidebar";
import {} from "vue";
import variables from "@/style/css/variables.scss";
import TagsView from "@/components/TagsView";
</script>
<style lang="scss" scoped>
@import "@/style/css/mixin.scss";
@import "@/style/css/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
