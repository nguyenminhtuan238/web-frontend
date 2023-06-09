import ApiServices from './api.services';
const CartApi = {
  add(data) {
    const url = 'cart/add/';
    return ApiServices.post(url, data);
  },
  remove(id) {
    const url = `cart/delete/${id}`;
    return ApiServices.delete(url);
  },
  get() {
    const url = 'cart/list/';
    return ApiServices.get(url);
  },
  updatesl(data) {
    const url = 'cart/change';
    return ApiServices.put(url, data);
  },
  cartAddress(data) {
    const url = 'cart/address';
    return ApiServices.post(url, data);
  },
  Checkout(data) {
    const url = 'cart/check_out';
    return ApiServices.post(url, data);
  },
};
export default CartApi;
