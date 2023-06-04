import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletecart, getcart, updatecart } from '../../store/cart';
import { unwrapResult } from '@reduxjs/toolkit';
import { img, Userkey } from '../../unilt/key';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from '@mui/material';
import { useSnackbar } from 'notistack';
const CartPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const get = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    const getcarta = async () => {
      try {
        const res = await dispatch(getcart());
        const cart = unwrapResult(res);
        return cart;
      } catch (error) {
        console.log(error);
      }
    };
    getcarta();
  }, [dispatch]);
  const decreaseCount = async (id, sku, sl) => {
    try {
      if (sl > 1) {
        const a = await dispatch(
          updatecart({ sku: sku, qty: sl - 1, item_id: id })
        );
        const c = unwrapResult(a);
        return c;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const increaseCount = async (id, sku, sl) => {
    try {
      const a = await dispatch(
        updatecart({ sku: sku, qty: sl + 1, item_id: id })
      );
      const c = unwrapResult(a);
      return c;
    } catch (error) {
      console.log(error);
    }
  };
  const handledelete = async (id) => {
    try {
      const a = await dispatch(deletecart(id));
      const c = unwrapResult(a);
      enqueueSnackbar('Xóa giỏ hàng thành công', {
        variant: 'success',
        autoHideDuration: 1200,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
      return c;
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
        autoHideDuration: 1200,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2 lg:ml-16 lg:mr-16">
        <div className="text-lg font-bold mt-6 mb-4 lg:mt-11 lg:mb-10 lg:ml-2">
          <h2>Giỏ hàng</h2>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-2xl border-2">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="border-b ">
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ
                </th>
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Đơn giá
                </th>
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Số lượng
                </th>
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Thành tiền
                </th>
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Xóa
                </th>
              </tr>
            </thead>
            {!localStorage.getItem(Userkey) ? (
              ''
            ) : (
              <tbody>
                {get.isloading ? (
                  <tr>
                    <td colSpan="4" className="px-4 py-2">
                      <div className="flex justify-center items-center">
                        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin mb-8 "></div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  get.cart.map((item) => {
                    return (
                      <tr key={item.item_id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center">
                            <img
                              src={img + item.img}
                              alt="Product"
                              className="w-20 h-20 object-contain mr-2"
                            />
                            <span className="font-bold">{item.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <span className="text-sm font-medium text-gray-700 mr-4">
                            {item.price.toLocaleString('vi-VN', {
                              style: 'currency',
                              currency: 'VND',
                            })}
                          </span>
                          {/* {!isSmallScreen && (
                            <span className="hidden lg:inline-block text-gray-400">
                              đơn vị tính
                            </span>
                          )} */}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center justify-between px-2 py-1 bg-gray-200 rounded w-[70px]">
                            <button
                              className="text-sm font-medium text-gray-700 focus:outline-none"
                              onClick={() =>
                                decreaseCount(item.item_id, item.sku, item.qty)
                              }
                            >
                              -
                            </button>
                            <span className="text-sm font-medium text-gray-700">
                              {item.qty}
                            </span>
                            <button
                              className="text-sm font-medium text-gray-700 focus:outline-none"
                              onClick={() =>
                                increaseCount(item.item_id, item.sku, item.qty)
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <span className="text-sm font-medium text-gray-700 mr-4">
                            {(item.price * item.qty).toLocaleString('vi-VN', {
                              style: 'currency',
                              currency: 'VND',
                            })}
                          </span>
                          {/* {!isSmallScreen && (
                            <span className="hidden lg:inline-block text-gray-400">
                              đơn vị tính
                            </span>
                          )} */}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <Link
                            onClick={() => handledelete(item.item_id)}
                            className="cursor-pointer "
                          >
                            <DeleteIcon />
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <div className="lg:col-span-1 mt-8 lg:mt-28 lg:mr-16">
        <div className="grid grid-rows-2">
          <div className="bg-white border-2 rounded-lg p-4 shadow-2xl row-span-1 lg:mb-8">
            <h2 className="text-lg font-bold mb-4">Khuyến mãi</h2>
            <span>Đơn hàng chưa đủ điều kiện</span>
          </div>

          <div className="bg-white border-2 rounded-lg p-4 shadow-2xl mt-8 row-span-1">
            <h2 className="text-lg font-bold mb-4">Thanh toán</h2>
            <p className="flex mb-1">
              Tạm tính
              <span className="ml-auto">
                {get.isloading ? 0 : get.cart.reduce((a, b) => a + b.price, 0).toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      })}
              </span>
            </p>
            {!isSmallScreen && (
              <p className="flex mb-4">
                Giảm giá
                <span className="text-green-500 ml-auto">-0 đ</span>
              </p>
            )}
            <p className="flex mb-4">
              Tổng cộng
              <span className="text-blue-500 ml-auto font-bold">
                {get.isloading ? 0 : get.cart.reduce((a, b) => a + b.price, 0).toLocaleString('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </span>
            </p>
            <button
              type="submit"
              className="group w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase text-lg"
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
