import axios from "axios";
import { TOKEN } from "../constants/global.contant";

const baseURL = process.env.REACT_APP_BASE_URL || "http://127.0.0.1:30040";

const instanceWithoutToken = axios.create({
  baseURL,
});

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Axios = {
  instanceWithoutToken,
  instance,
};

export default Axios;
