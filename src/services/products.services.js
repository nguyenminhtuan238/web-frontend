import ApiServices from './api.services';
const ProductsAPI = {
  getpd(page) {
    if(page===undefined){
      const url = `product/list1/`;
    return ApiServices.get(url);
    }else{
      const url = `product/list?currentPage= ${page}`;
      return ApiServices.get(url);
    }
  },
  getid(id) {
    const url = `product/${id}`;
    return ApiServices.get(url);
  },
  search(values){
    const url = `product/list/name/${values}`;
    return ApiServices.get(url);
  }
};
export default ProductsAPI;
