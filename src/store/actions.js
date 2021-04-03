import axios from "@/api/config";
export default {
async getUserInfo(ctx, options) {
    await axios({
      method: "post",
      url: "http://localhost:3001/api/user/profile",
      data: {
        username: options.username,
        password: options.password
      }
    }).then(res => {
      console.log(res);
      const { token, error, menu } = res.data;
      if (error) {
        ctx.commit("errorLoginInfo");
      } else {
        const { username, password } = options;
        const config = {
          token,
          username,
          password,
          menu,
          info: true
        };
        ctx.commit("setUserInfo", config);
      }
    });
  }
};
