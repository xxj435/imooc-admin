import { login, getUserInfo } from "@/api/sys.js";
import md5 from "md5";
import { TOKEN } from "@/constant";
import { getItem, setItem } from "@/utils/storage.js";
export default {
  namespaced: true, // 命名模块
  state: () => ({
    token: getItem(TOKEN) || "",
    userInfo: null,
  }),
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      setItem(TOKEN, token);
    },
    SET_USERINFO(state, info) {
      state.userInfo = info;
    },
  },
  actions: {
    // 登录处理异步
    login({ commit }, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({ username, password: md5(password) })
          .then((res) => {
            commit("SET_TOKEN", res.token);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    async getUserInfo({ commit }) {
      const res = await getUserInfo();
      console.log(res);
      commit("SET_USERINFO", res);
    },
  },
};
