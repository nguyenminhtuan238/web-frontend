import axios from 'axios';
import { Storagekey } from '../unilt/key';
const getUserToken = async () => {
  if (localStorage.getItem(Storagekey)) {
    return localStorage.getItem(Storagekey);
  }
};

const ApiServices = axios.create({
  baseURL: 'http://192.168.1.9:5000/',
});
ApiServices.interceptors.request.use(
  async (config) => {
    const token = await getUserToken();
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };
    } else {
      config.headers = {
        'Content-Type': 'application/json',
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

ApiServices.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default ApiServices;
