import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [count, setCount] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const calculatePrice = () => {
    const price = 1 * count;
    return price.toFixed(2);
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
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Product"
                      className="w-20 h-20 object-contain mr-2"
                    />
                    <span className="font-bold">Sản phẩm 3</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <span className="text-sm font-medium text-gray-700 mr-4">
                    {calculatePrice()}
                  </span>
                  {!isSmallScreen && (
                    <span className="hidden lg:inline-block text-gray-400">
                      đơn vị tính
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center justify-between px-2 py-1 bg-gray-200 rounded w-[70px]">
                    <button
                      className="text-sm font-medium text-gray-700 focus:outline-none"
                     onClick={decreaseCount}
                    >
                      -
                    </button>
                    <span className="text-sm font-medium text-gray-700">
                      {count}
                    </span>
                    <button
                      className="text-sm font-medium text-gray-700 focus:outline-none"
                      onClick={increaseCount}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <span className="text-sm font-medium text-gray-700 mr-4">
                    {calculatePrice()}
                  </span>
                  {!isSmallScreen && (
                    <span className="hidden lg:inline-block text-gray-400">
                      đơn vị tính
                    </span>
                  )}
                </td>
              </tr>
            </tbody>
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
              <span className="ml-auto">{calculatePrice()}</span>
            </p>
            {!isSmallScreen && (
              <p className="flex mb-4">
                Giảm giá
                <span className="text-green-500 ml-auto">-$0.00</span>
              </p>
            )}
            <p className="flex mb-4">
              Tổng cộng
              <span className="text-blue-500 ml-auto font-bold">
                ${calculatePrice()}
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