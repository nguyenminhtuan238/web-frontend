import ApiServices from './api.services';
const AuthApi = {
  register(data) {
    const url = '/User/';
    return ApiServices.post(url, data);
  },
  Login(data) {
    const url = '/User/';
    return ApiServices.post(url, data);
  },
};
export default AuthApi;
