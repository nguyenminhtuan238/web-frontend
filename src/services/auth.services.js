import ApiServices from './api.services';
const AuthApi = {
  register(data) {
    const url = 'account/register/';
    return ApiServices.post(url, data);
  },
  Login(data) {
    const url = 'account/login/';
    return ApiServices.post(url, data);
  },
};
export default AuthApi;
