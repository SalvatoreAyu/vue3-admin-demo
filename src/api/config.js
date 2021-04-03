import axios from "axios";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";

axios.defaults.timeout = 5000;

// 请求拦截
axios.interceptors.request.use(
  config => {
    if (Cookies.get("token")) {
      // config: url ,data,method,headers
      // console.log(config);

      // console.log("config.headers");

      // headers: token
      // console.log(config.headers);
      config.headers.token = Cookies.get("token");
    }
    return config;
  },
  error => {
    console.log(error);
  }
);
// 响应拦截
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { status } = error.response;
    const router = useRouter();
    if (status == 401) {
      console.log("token 过期");
      Cookies.remove("token");
      router.push("/login");
    } else {
      console.log(error);
    }
  }
);
export default axios;
