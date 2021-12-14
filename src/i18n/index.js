import { createI18n } from "vue-i18n";
import zh from "./lang/zh";
import en from "./lang/en";
const messages = {
  en,
  zh,
};

const locale = "en";
const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale,
  messages,
});
export default i18n;
