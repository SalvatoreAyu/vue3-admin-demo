import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import Cookies from "js-cookie";
import getters from "./getters";
export default createStore({
  state: {
    loginInfo: {
      username: Cookies.get("username") ? Cookies.get("username") : "",
      // username: "",
      password: "",
      info: false
    },
    token: "",
    menu: sessionStorage.getItem("menu")
      ? JSON.parse(sessionStorage.getItem("menu"))
      : []
    // menu: []
  },
  mutations,
  actions,
  getters,
  modules: {}
});
