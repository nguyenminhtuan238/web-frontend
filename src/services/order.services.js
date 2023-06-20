import ApiServices from './api.services';
const OrderAPI = {
  getorder() {

      const url = `order/list/`;
      return ApiServices.get(url);
    
  },
  
};
export default OrderAPI;
