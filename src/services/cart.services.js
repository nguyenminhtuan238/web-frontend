import ApiServices from './api.services';
const CartApi = {
  add(data) {
    const url = 'cart/add/';
    return ApiServices.post(url, data);
  },
  remove(data) {
    const url = 'account/login/';
    return ApiServices.delete(url, data);
  },
  get(){
    const url = 'cart/list/';
    return ApiServices.get(url);
  },
  updatesl(data){
    const url = 'cart/change';
    return ApiServices.put(url, data);
  }
};
export default CartApi;
