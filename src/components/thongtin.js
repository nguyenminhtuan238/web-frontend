import React from 'react';

const Thongtin = () => {
  return (
    <div class="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md mt-8 mb-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Thông tin người dùng
        </h2>
      </div>
      <form class="p-6 space-y-6 ">
        <div>
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Họ và tên:
          </label>
        </div>
        <div>
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email:
          </label>
        </div>
        <div>
          <label class="block text-gray-700 font-bold mb-2" for="phone">
            Số điện thoại:
          </label>
          {/* <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="(123) 456-7890"/> */}
        </div>
        <div className="py-6 w-full flex justify-center  space-x-36 ">
          <button
            type="submit"
            className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mr-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Quản lí IOT
          </button>
          <button
            type="submit"
            className=" py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Quản lí tt
          </button>
        </div>
      </form>
    </div>
  );
};

export default Thongtin;
