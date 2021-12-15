import { createStore } from 'vuex'
import user from './modules/user'
import app from './modules/app'
import theme from './modules/theme.js'
import getters from './getters'
export default createStore({
  modules: {
    user,
    app,
    theme
  },
  getters
})
