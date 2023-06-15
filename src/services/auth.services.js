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
  update(data) {
    const url = 'account/update_address/';
    return ApiServices.put(url, data);
  },
  Loginadmin(data) {
    const url = 'account/admin/login/';
    return ApiServices.post(url, data);
  },
};
export default AuthApi;
