import ApiServices from './api.services';
const ProductsAPI = {
  getpd(page) {
    const url = `product/list?currentPage= ${page}`;
    return ApiServices.get(url);
  },
  getid(id) {
    const url = `product/${id}`;
    return ApiServices.get(url);
  },
};
export default ProductsAPI;
