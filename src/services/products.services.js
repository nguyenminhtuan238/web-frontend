import ApiServices from './api.services';
const ProductsAPI = {
  getpd(page) {
    const url = `product/list?currentPage= ${page}`;
    return ApiServices.get(url);
  },
  getDirectory() {
    const url = `category/list`;
    return ApiServices.get(url);
  },
  getALL() {
    const url = `product/list1/`;
    return ApiServices.get(url);
  },
  getid(id) {
    const url = `product/detail/${id}`;
    return ApiServices.get(url);
  },
  search(values) {
    const url = `product/list/name/?name=${values}`;
    return ApiServices.get(url);
  },
  searchPrice(data) {
    const url = `product/price?min=${data.min}&max=${data.max}`;
    return ApiServices.get(url);
  },
  searchidDiretory(id) {
    const url = `product/search/category_id/${id}`;
    return ApiServices.get(url);
  },
  searchtype(type) {
    if (type) {
      const url = `product/list/name?type=DESC`;
      return ApiServices.get(url);
    } else {
      const url = `product/list/name`;
      return ApiServices.get(url);
    }
  },
};
export default ProductsAPI;
