import ApiServices from './api.services';
const ProductsAPI = {
    getpd() {
        const url = 'product/list/';
        return ApiServices.get(url);
      },
};
export default ProductsAPI;
