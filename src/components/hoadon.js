import { useState, useEffect } from 'react';
import axios from 'axios';
import { Storagekey } from '../unilt/key';

function Hoadon() {
  const [orders, setOrders] = useState([]);

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

  return (
    <div className="py-5 flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light w-5 overflow-hidden">
              <thead className="bg-zinc-900 text-white border-b font-medium dark:border-neutral-500">
                <tr className="px-4 py-6">
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Tên khách hàng
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Ngày lập hóa đơn
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Tổng tiền
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Quản lý
                  </th>
                </tr>
              </thead>
              <tbody>
              { orders?.length > 0 && orders.map((order) => (
                  <tr key={order.entity_id} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{order.entity_id}</td>
                    <td className="whitespace-nowrap px-6 py-4">{order.customer_firstname} {order.customer_lastname}</td>
                    <td className="whitespace-nowrap px-6 py-4">{order.customer_email}</td>
                    <td className="whitespace-nowrap px-6 py-4">{order.updated_at}</td>
                    <td className="whitespace-nowrap px-6 py-4">{order.total_due}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button
                        type="submit"
                        className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-900  mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        xem chi tiết
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hoadon;