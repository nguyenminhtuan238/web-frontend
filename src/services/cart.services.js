import ApiServices from './api.services';
const CartApi = {
  add(data) {
    const url = 'account/register/';
    return ApiServices.post(url, data);
  },
  remove(data) {
    const url = 'account/login/';
    return ApiServices.post(url, data);
  },
  get(){
    const url = 'account/login/';
    return ApiServices.get(url, data);
  }
};
export default CartApi;
