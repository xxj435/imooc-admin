<!--  -->
<template>
  <div class=''>
    <UploadExcel :onSuccess="onSuccess"></UploadExcel>
  </div>
</template>
<script setup>
import UploadExcel from "@/components/UploadExcel";
import { USER_RELATIONS } from "./utils";
import { userBatchImport } from "@/api/user-manage.js";
import { ElMessage } from "element-plus";
import { i18n } from "@/i18n";
import { useRouter } from "vue-router";
import {} from "vue";
const router = useRouter();

/**
 * 筛选数据
 */
const generateData = (results) => {
  const arr = [];
  results.forEach((item) => {
    const userInfo = {};
    Object.keys(item).forEach((key) => {
      userInfo[USER_RELATIONS[key]] = item[key];
    });
    arr.push(userInfo);
  });
  return arr;
};
/**
 * 数据解析成功之后的回调
 */
const onSuccess = async ({ header, results }) => {
  const updateData = generateData(results);
  await userBatchImport(updateData);
  ElMessage.success({
    message: results.length + i18n.t("msg.excel.importSuccess"),
    type: "success",
  });
  router.push("/user/manage");
};
</script>
<style lang='scss' scoped></style>
