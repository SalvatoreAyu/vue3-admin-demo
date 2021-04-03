import { createApp } from "vue";
import App from "./App.vue";
import "default-passive-events";
import router from "./router";
import store from "./store";
import "@/assets/css/reset.css";
import "element-plus/lib/theme-chalk/index.css";
import { asyncRouter, generatorRoute } from "@/utils/generatorRoute";
import elementPlus from "element-plus";
import * as echarts from "echarts";
import Cookie from "js-cookie";
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else if (!Cookie.get("token")) {
    next("/login");
  } else if (!store.state.loginInfo.info) {
    asyncRouter(generatorRoute(store.getters.getMenuArray));
    store.state.loginInfo.info = true;
    next({ path: to.path });
  } else {
    next();
  }
});
const app = createApp(App);
app.use(elementPlus);
app.use(store);
app.use(router);
app.config.globalProperties.$echarts = echarts;
app.mount("#app");
