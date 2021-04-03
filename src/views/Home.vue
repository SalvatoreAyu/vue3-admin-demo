<template>
  <el-container class="home" style="height:100%,width:100%">
    <el-aside width="200px"><Sidebar></Sidebar></el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <MainPage></MainPage>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { useStore } from "vuex";
import Sidebar from "@/components/Sidebar";
import Header from "../components/Header.vue";
import MainPage from "../components/MainPage.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Home",
  components: {
    Sidebar,
    Header,
    MainPage
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const username = store.state.loginInfo.username;
    onMounted(() => {
      router.push("/about");
    });
    return {
      username
    };
  }
};
</script>
<style lang="scss" scoped>
.el-aside {
  height: 100vh;
}
.el-main {
  padding: 20px;
}
</style>
