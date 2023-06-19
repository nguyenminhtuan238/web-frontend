import { useState, useEffect } from 'react';
import axios from 'axios';
import { Storagekey } from '../unilt/key';

function Hoadon(){
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
                         Ngày lập hóa đơn
                    </th>
                    <th scope="col" className="px-6 py-4">
                         Tổng tiền
                    </th>
                  </tr>
                </thead>
                <tbody>
                { orders?.length > 0 && orders.map((order) => (
                    <tr key={order.entity_id} className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{order.entity_id}</td>
                      <td className="whitespace-nowrap px-6 py-4">{order.customer_firstname} {order.customer_lastname}</td>
                      <td className="whitespace-nowrap px-6 py-4">{order.billing_address.city}</td>
                      <td className="whitespace-nowrap px-6 py-4">{order.billing_address.postcode}</td>
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
                            <div key={item.id}>{item.price.toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                              })}</div>
                        ))}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{order.updated_at}</td>
                      
                      <td className="whitespace-nowrap px-6 py-4">{order.total_due.toLocaleString('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                        })}</td>
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