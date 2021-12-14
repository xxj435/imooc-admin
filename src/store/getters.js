import variables from "@/style/css/variables.scss";
const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== "{}";
  },
  cssVar: () => variables,
  sidebarOpened: (state) => state.app.sidebarOpened,
  language: (state) => state.app.language,
};

export default getters;
