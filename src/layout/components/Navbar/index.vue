<template>
  <div class="navbar">
    <Hamburger class="hamburger-container"></Hamburger>
    <Breadcrumb class="breadcrumb-container"></Breadcrumb>
    <div class="right-menu">
      <Guide class="right-menu-item hover-effect" />
      <HeaderSearch class="right-menu-item hover-effect" />
      <Screenfull class="right-menu-item hover-effect" />
      <ThemePicker class="right-menu-item hover-effect"></ThemePicker>
      <LangSelect class="right-menu-item hover-effect" />
      <!-- 头像 -->
      <el-dropdown
        class="avatar-container"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avatar"
          ></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> 首页 </el-dropdown-item>
            </router-link>
            <a
              target="_blank"
              href=""
            >
              <el-dropdown-item>课程主页</el-dropdown-item>
            </a>
            <el-dropdown-item
              divided
              @click="logout"
            >
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {} from "vue";
import LangSelect from "@/components/LangSelect";
import { useStore } from "vuex";
import Hamburger from "@/components/hamburger/index.vue";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import ThemePicker from "@/components/ThemeSelect/index";
import Screenfull from "@/components/Screenfull";
// import HeaderSearch from "@/components/HeaderSearch";
import Guide from "@/components/Guide";
const store = useStore();

// 退出登录
const logout = () => {
  store.dispatch("user/logout");
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .breadcrumb-container {
    float: left;
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
      }
    }
  }
}
</style>
