<template>
  <div>
    <Header></Header>
    <Sidebar></Sidebar>
    <MainPage> </MainPage>
  </div>
</template>

<script>
import { useStore } from "vuex";
import Sidebar from "@/components/Sidebar";
import Header from "../components/Header.vue";
import MainPage from "../components/MainPage.vue";
export default {
  name: "Course",
  components: {
    Sidebar,
    Header,
    MainPage
    // About,
  },
  setup() {
    const store = useStore();
    const username = store.state.loginInfo.username;
    return {
      username
    };
  }
};
</script>

<style></style>
