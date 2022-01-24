<!--
 * @Author: your name
 * @Date: 2021-12-23 20:22:04
 * @LastEditTime: 2021-12-23 20:37:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \imooc-admin\src\views\profile\component\feature.vue
-->
<!--  -->
<template>
  <el-collapse
    v-model="activeName"
    accordion
  >
    <el-collapse-item
      v-for="item in features"
      :key="item.id"
      :title="item.title"
      :name="item.id"
    >
      <div v-html="item.content"></div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup>
import { ref, defineProps } from "vue";
const activeName = ref(0);
const props = defineProps({
  features: {
    type: Array,
    required: true,
  },
});
console.log(props.features);
</script>

<style lang="scss" scoped>
::v-deep .el-collapse-item__header {
  font-weight: bold;
}

.el-collapse-item {
  ::v-deep a {
    color: #2d62f7;
    margin: 0 4px;
  }
}
</style>
