import { useState, useEffect } from 'react';
import { GetOrder } from '../store/order';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
function Hoadon() {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const get = useSelector((state) => state.order);
  const user = useSelector((state) => state.User);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user.User) {
      navigate('/');
    }
  }, [user.User, navigate]);
  useEffect(() => {
    dispatch(GetOrder());
    console.log(get);
  }, [dispatch, get]);

  const handleRowClick = (index) => {
    setSelectedRowIndex(index);
  };

<<<<<<< HEAD
    useEffect(() => {
      async function fetchOrders() {
        try {
          // Lấy token từ localStorage
          const token = localStorage.getItem(Storagekey);
          // Gửi yêu cầu HTTP GET đến endpoint trên server với Authorization header chứa token
          const response = await axios.get('http://192.168.1.9:5000/order/list/', {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log(response.data);
          // Cập nhật state với dữ liệu trả về từ server
          setOrders(response.data.orders);
        } catch (error) {
          console.error(error);
        }
      }
      fetchOrders();
    }, []);
  
    const handleRowClick = (index) => {
      setSelectedRowIndex(index);
    };

    return (
      <div className="w-full py-5 flex flex-col">
        <div className="overflow-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <h1 className="text-center mb-8 uppercase font-bold">Hóa Đơn Của Bạn</h1>
              <table className="w-full text-left text-sm font-light w-5 overflow-hidden ">
                <thead className="bg-gray-700 text-white border-b font-medium dark:border-neutral-500">
                  <tr className="px-4 py-6 text-center ">
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Tài khoản
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Địa chỉ
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Số điện thoại
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Tên sản phẩm
                    </th>
                    <th scope="col" className="px-6 py-4">
                         Số lượng
                    </th>
                    <th scope="col" className="px-6 py-4">
                         Giá sản phẩm
                    </th>
                    <th scope="col" className="px-6 py-4">
                         Tổng tiền
                    </th>
                    <th scope="col" className="px-6 py-4">
                         Ngày lập hóa đơn
                    </th>
                  </tr>
                </thead>
=======
  return (
    <div className="py-5 flex flex-col my-5">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <h1 className="text-center mb-8 uppercase font-bold">
              Hóa Đơn Của Bạn
            </h1>
            <table className="min-w-full text-left text-sm font-light w-5 overflow-hidden">
              <thead className="bg-gray-700 text-white border-b font-medium dark:border-neutral-500">
                <tr className="px-4 py-6 text-center ">
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Tài khoản
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Địa chỉ
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Số điện thoại
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Tên sản phẩm
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Số lượng
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Giá sản phẩm
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Tổng tiền
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Ngày lập hóa đơn
                  </th>
                </tr>
              </thead>
              {get.isloading ? (
>>>>>>> 956da3470ad42de3a2d6da512d13ca5dff085bb1
                <tbody>
                  <tr>
                    <td colSpan="9" className="px-4 py-2">
                      <div className="flex justify-center items-center">
                        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin mb-8 "></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {get.Order.map((order, index) => (
                    <tr
                      key={index}
                      className={`border-b dark:border-neutral-500 text-center ${
                        selectedRowIndex === index ? 'bg-gray-100' : ''
                      }`}
                      onClick={() => handleRowClick(index)}
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {order.entity_id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {order.customer_firstname} {order.customer_lastname}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {order.billing_address.city}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {order.billing_address.postcode}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {order.items.map((item) => (
                          <div key={item.id}>{item.name}</div>
                        ))}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {order.items.map((item) => (
                          <div key={item.id}>{item.qty_ordered}</div>
                        ))}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {order.items.map((item) => (
                          <div key={item.id}>
                            {item.price.toLocaleString('vi-VN', {
                              style: 'currency',
                              currency: 'VND',
                            })}
                          </div>
                        ))}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {order.total_due.toLocaleString('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {order.updated_at}
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hoadon;
