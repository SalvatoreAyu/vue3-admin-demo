<template>
  <div class="header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in breadcrumb.list"
        :to="item.path"
        :key="item.name"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="user">
      <span class="welcomeText">欢迎你,{{ username }}</span>
      <el-avatar :src="avatarSrc"></el-avatar>
      <i class="el-icon-switch-button">
        <span @click="loginOut">安全退出</span>
      </i>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import Cookies from "js-cookie";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const username = ref(store.state.loginInfo.username);
    const avatarSrc = require("@/assets/img/qbhn.jpg");
    const loginOut = () => {
      console.log("login-out");
      Cookies.remove("username");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("menu");
      router.push("/login");
    };
    const breadcrumb = reactive({
      list: []
    });
    onMounted(() => {
      breadcrumb.list = router.currentRoute.value.matched;
    });
    watch(
      () => router.currentRoute.value.matched,
      newValue => {
        breadcrumb.list = newValue;
      }
    );
    return {
      username,
      loginOut,
      breadcrumb,
      onMounted,
      avatarSrc
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  // height: 75px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /deep/ .el-breadcrumb {
    padding-left: 250px;
  }
  .user {
    display: flex;
    align-items: center;
    .el-avatar {
      background-color: rgb(156, 185, 197);
      margin-right: 20px;
      transition: all 2s;
    }
    .el-avatar:hover {
      transform: rotate(360deg);
    }
    .welcomeText {
      padding-right: 5px;
    }
    /deep/ .el-icon-switch-button {
      width: 120px;
      display: flex;
      align-items: center;
      height: 75px;
      justify-content: space-around;
      font-size: 20px;
      cursor: pointer;
      background-color: rgba(217, 222, 236, 0.37);
      color: #395977ee;
    }
    /deep/ .el-icon-switch-button:hover {
      color: #c09b9b;
    }
  }
}
</style>
