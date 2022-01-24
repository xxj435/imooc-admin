<!--
 * @Author: your name
 * @Date: 2021-12-23 20:22:15
 * @LastEditTime: 2021-12-23 20:37:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \imooc-admin\src\views\profile\component\chapter.vue
-->
<!--  -->
<template>
  <el-timeline>
    <el-timeline-item
      v-for="item in chapterData"
      :key="item.id"
      :timestamp="item.timestamp"
      placement="top"
    >
      <el-card>
        <h4>{{ item.content }}</h4>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup>
import { watchSwitchLang } from "@/utils/i18n";
import { chapter } from "@/api/user";
import { ref } from "vue";
const chapterData = ref([]);

const getChapterData = async () => {
  chapterData.value = await chapter();
};
getChapterData();

// 监听语言切换
watchSwitchLang(getChapterData);
</script>

<style lang='scss' scoped></style>
