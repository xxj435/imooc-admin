<!--
 * @Author: your name
 * @Date: 2021-12-11 12:03:32
 * @LastEditTime: 2021-12-23 20:41:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \imooc-admin\src\views\profile\index.vue
-->
<!--  -->
<template>
  <div class="my-container">
    <el-row>
      <el-col :span="6">
        <ProjectCard
          class="user-card"
          :features="featureData"
        ></ProjectCard>
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-tabs v-model="activeName">
            <el-tab-pane
              :label="$t('profile.feature')"
              name="feature"
            >
              <Feature :features="featureData"></Feature>
            </el-tab-pane>
            <el-tab-pane
              :label="$t('profile.chapter')"
              name="chapter"
            >
              <chapter />
            </el-tab-pane>
            <el-tab-pane
              :label="$t('profile.author')"
              name="author"
            >
              <author />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import ProjectCard from "./components/ProjectCard.vue";
import Chapter from "./components/Chapter.vue";
import Feature from "./components/Feature.vue";
import Author from "./components/Author.vue";
import { ref } from "vue";
import { feature } from "@/api/user";
import { watchSwitchLang } from "@/utils/i18n";
const activeName = ref("feature");
const featureData = ref([]);
const getFeatureData = async () => {
  featureData.value = await feature();
};
getFeatureData();
watchSwitchLang(getFeatureData);
</script>
<style lang='scss' scoped>
.my-container {
  .user-card {
    margin-right: 20px;
  }
}
</style>
