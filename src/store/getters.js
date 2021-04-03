import { toRaw } from "vue";
export default {
  getMenuArray(state) {
    return toRaw(state.menu);
  }
};
