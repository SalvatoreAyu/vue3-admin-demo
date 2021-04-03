import Cookies from "js-cookie";
import {
  generatorRoute,
  getMenuList,
  asyncRouter,
  filterMenu
} from "@/utils/generatorRoute";
export default {
  setUserInfo(state, config) {
    console.log(config.menu);
    let list = filterMenu(config.menu);
    const menu = getMenuList(list);
    console.log("树形化");
    console.log(menu);
    state.loginInfo.username = config.username;
    state.loginInfo.password = config.password;
    state.loginInfo.info = config.info;
    state.token = config.token;
    state.menu = menu;
    // 路由化
    const routeMenu = generatorRoute(menu);
    console.log("路由化");
    console.log(routeMenu);
    asyncRouter(routeMenu);
    Cookies.set("username", config.username);
    Cookies.set("menu", config.menu);
    Cookies.set("token", config.token);
    sessionStorage.setItem("menu", JSON.stringify(menu));
  },
  errorLoginInfo(state) {
    Cookies.remove("token");
    state.loginInfo.info = false;
  }
  // setRouters(state) {
  //   console.log(state.menu[0]);
  //   let route = generatorRoute(state.menu);
  //   router.addRoute(route);
  // }
};
