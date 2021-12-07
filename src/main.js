import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入全局样式
import './style/index.scss'

import installElementPlus from './plugins/element'

// 导入svgicon
import installIcons from '@/icons'

// 白名单
const whiteList = ['/login'];

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  // 存在token, 进入主页
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 没有token的情况下, 可以进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
const app = createApp(App)
installIcons(app)
installElementPlus(app)
app.use(store).use(router).mount('#app')
