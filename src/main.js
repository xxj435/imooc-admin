import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

// 导入全局样式
import "./style/index.scss";

import installElementPlus from "./plugins/element";

// 导入全局属性
import installFilter from '@/filter'
// 导入svgicon
import installIcons from "@/icons";

import i18n from "@/i18n";

// 白名单
const whiteList = ["/login"];
// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  // 存在token, 进入主页
  if (store.getters.token) {
    if (to.path === "/login") {
      next("/");
    } else {
      // 判断用户资料是否获取
      // 若不存在用户信息, 则需要获取用户信息
      if (!store.getters.hasUserInfo) {
        // 去触发action的获取用户信息
        await store.dispatch("user/getUserInfo");
      }
      next();
    }
  } else {
    // 没有token的情况下, 可以进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next("/login");
    }
  }
});
const app = createApp(App);
installFilter(app);
installIcons(app);
installElementPlus(app);
app.use(i18n);
app.use(store).use(router).mount("#app");
