<template>
  <div class="outer">
    <div class="loginWrapper">
      <el-form :rules="rules" :model="loginInfo" ref="formRules">
        <el-form-item class="title">
          <h2>welcome</h2>
        </el-form-item>
        <el-form-item class="username_input" prop="username">
          <!-- @keydown="checkUsernameInput" -->
          <el-input
            class="username"
            v-model="loginInfo.username"
            placeholder="Username"
            id="username"
          ></el-input>
        </el-form-item>
        <el-form-item class="password_input" prop="password">
          <el-input
            class="password"
            v-model="loginInfo.password"
            placeholder="Password"
            show-password
          ></el-input>
        </el-form-item>
        <p class="errorLoginInfo" v-if="errorLoginInfo">
          Error input.Please check your account
        </p>
        <el-form-item>
          <el-button
            size="medium"
            class="loginButton"
            round
            @click="submitLogin"
            >login</el-button
          >
        </el-form-item>
        <p class="signUp">Not Registered? <a href="#">Create an Account</a></p>
      </el-form>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import { generatorRoute } from "@/utils/generatorRoute";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const formRules = ref(null);
    const loginInfo = reactive({
      username: "admin",
      password: "123"
    });
    let errorLoginInfo = ref(false);
    const rules = {
      username: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
      ],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }]
    };
    // const checkUsernameInput = () => {
    //   setInterval(() => {
    //     formRules.value.validateField("username");
    //   }, 100);
    // };

    document.onkeydown = function(e) {
      e.key == "Enter" && submitLogin();
    };
    onMounted(() => {
      // if (localStorage.getItem("token")) {
      //   const input = document.querySelector(".el-input__inner");
      //   input.style.backgroundColor = "#a5b1c2";
      //   loginInfo.username = "admin";
      //   loginInfo.password = "loginAlready";
      // }
    });
    const submitLogin = async () => {
      // if (localStorage.getItem("token")) {
      //   router.push("/");
      // } else {
      try {
        await formRules.value.validate();
        await store.dispatch("getUserInfo", loginInfo);
        if (store.state.loginInfo.info) {
          router.push("/");
        } else {
          errorLoginInfo.value = !errorLoginInfo.value;
        }
      } catch (error) {
        console.log(error);
      }
      // }
    };
    return {
      submitLogin,
      onMounted,
      formRules,
      store,
      // checkUsernameInput,
      rules,
      loginInfo,
      errorLoginInfo
    };
  }
};
</script>

<style scoped lang="scss">
.outer {
  background: url(../assets/img/wallhaven-5w2wz9.jpg);
  margin: 0;
  padding: 0;
  height: 100vh;
  background-size: cover;
  .loginWrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 380px;
    transform: translateX(-50%) translateY(-50%);
    background-color: rgb(26, 26, 26);
    opacity: 0.8;
    border-radius: 10px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
      width: 100%;
      display: flex;
      justify-content: center;
      h2 {
        font-size: 40px;
        color: #fff;
        margin-bottom: 15px;
      }
    }
    /deep/ .el-input__inner {
      width: 250px;
      height: 45px;
      box-sizing: border-box;
      outline: 0;
      font-size: 18px;
      border-radius: 25px;
    }
    /deep/ .el-input__inner :focus {
      border: 5px solid #2e86de;
    }
    /deep/ .el-button {
      width: 100px;
      box-sizing: border-box;
      font-size: 20px;
      border: 2px #2e86de solid;
      height: 50px;
      text-align: center;
      line-height: 20px;
      transition: all 0.5s;
    }
    /deep/ .el-button:focus,
    /deep/ .el-button:hover,
    /deep/ .el-button:active {
      transform: scale(1.1);
    }
    .signUp {
      color: white;
    }
  }
}
.username_input .el-form-item__label {
  color: red;
  font-size: 30px;
}
.errorLoginInfo {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
