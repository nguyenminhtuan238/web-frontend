import axios from 'axios';
import { StorageAdminkey } from '../unilt/key';

const getAdminToken = async () => {
  if (localStorage.getItem(StorageAdminkey)) {
    return localStorage.getItem(StorageAdminkey);
  }
};

const ApiadminServices = axios.create({
  baseURL: 'http://192.168.1.9:5000/',
});
ApiadminServices.interceptors.request.use(
  async (config) => {
    const admin=await getAdminToken()
    if(admin){
      config.headers = {
        Authorization: `Bearer ${admin}`,
        'Content-Type':'multipart/form-data',
      };
    }else {
        config.headers = {
        'Content-Type':'multipart/form-data',
        };
      }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

ApiadminServices.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default ApiadminServices;
