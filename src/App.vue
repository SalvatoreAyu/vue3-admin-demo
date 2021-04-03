<template>
  <router-view />
</template>
<script>
import { provide } from "vue";
import * as echarts from "echarts";
// import { onMounted } from "vue";
// import { useStore } from "vuex";
// import { useRouter } from "vue-router";
// import { generatorRoute } from "@/utils/generatorRoute";
export default {
  setup() {
    // const store = useStore();
    // const router = useRouter();
    // onMounted(() => {
    //   router.addRoute(generatorRoute(store.getters.getMenuList));
    // });
    // return {
    //   onMounted
    // };
    provide("chart", echarts);
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
