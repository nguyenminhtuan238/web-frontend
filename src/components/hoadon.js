import { useState, useEffect } from 'react';
import { GetOrder } from '../store/order';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import '../index.css';
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

  return (
    <div className="py-5 flex flex-col my-5">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <h1 className="text-center mb-8 uppercase font-bold">
              Đơn Hàng Của Bạn
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
                  <th scope="col" className="px-6 py-4">
                    Trạng thái
                  </th>
                </tr>
              </thead>
              {get.isloading ? (
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
                        {order.billing_address.street} ,{' '}
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
                        {new Date(new Date(order.updated_at).getTime() + 7 * 60 * 60 * 1000)
                          .toLocaleString('vi-VN', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour12: false,
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                        })}
                      </td>

                      <td
                        className={`whitespace-nowrap px-6 py-4 ${order.status}`}
                      >
                        {order.status === 'pending'
                          ? 'Chờ xử lý'
                          : order.status === 'confirmed'
                          ? 'Đã xác nhận'
                          : order.status === 'shipped'
                          ? 'Đang vận chuyển'
                          : order.status === 'delivered'
                          ? 'Đã giao hàng'
                          : order.status}
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
