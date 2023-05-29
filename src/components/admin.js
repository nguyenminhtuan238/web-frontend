import React from 'react';

function Admin() {
  return (
    <div>
      <nav class="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div class="flex items-center lg:order-2">
            {/* <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> */}
            <a
              href="#"
              class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Đăng xuất
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Quản lí bài viết
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <p className="mt-4">Quản lí bài viết</p>
      <div class="flex flex-col mt-4">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr className="bg-gray-400">
                    <th scope="col" class="px-6 py-4">
                      #
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Tên bài viết
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Hình ảnh
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Mô tả
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Thể loại
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Ngày đăng
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Quản lí
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <td class="whitespace-nowrap px-6 py-4">Mark</td>
                    <img
                      className="object-contain h-[150px] w-[150px]"
                      src="https://static.developer.sony.com/images/image/v6/s3/uploads/2017/11/Develop_364x212_cameras.png?size=1920xAUTO&v=759790&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzcmMiOiIvdXBsb2Fkcy8yMDE3LzExL0RldmVsb3BfMzY0eDIxMl9jYW1lcmFzLnBuZyIsImFsdF90ZXh0IjoiRGV2ZWxvcCAzNjTDlzIxMiBDYW1lcmFzIiwiaW1hZ2VfaWQiOjc1OTc5MCwic2VydmljZSI6ImF3cy1zMyIsImF3c19idWNrZXQiOiJzb255ZHctcHJvZC1zdGF0aWMtYXNzZXRzIiwiaGVpZ2h0X2FzcGVjdF9yYXRpbyI6MC41ODI0MTc1ODI0MTc1ODI1LCJvcmlnaW5hbF9oZWlnaHQiOjIxMiwib3JpZ2luYWxfd2lkdGgiOjM2NCwiZm9jdXMiOnsieCI6MC41LCJ5IjowLjV9LCJ3aGl0ZWxpc3RTaXplcyI6WyIxMjAweEFVVE8iLCIxMDB4NjUiLCIxMDB4QVVUTyIsIjExMHg4MiIsIjc1MHhBVVRPIiwiMTAwMHhBVVRPIiwiMTIwMHhBVVRPIiwiMTIwMHg4MDAiLCIxOTIweEFVVE8iLCIxOTIweDEwMDAiLCIyMDB4MTUwIiwiMjI1eDE3MCIsIjIyNXhBVVRPIiwiMjI5eDMwMCIsIjM2OHhBVVRPIiwiNDUweDM0MCIsIjUwMHhBVVRPIiwiNzUweDUwMCIsIjd4MTAiLCI3eDEyIiwiN3gxNiIsIjd4MyIsIjd4NCIsIjd4NSIsIjd4NiIsIjd4NyIsIjd4OCIsIjd4OSJdLCJpbWFnZVZlcnNpb24iOiJ2NiIsImV4cCI6MTkwNDY4ODAwMDAwMH0.4OQBWtF-cI3dQxDCXgx4dHfxPNzRgGAVD3otIyayez0"
                    ></img>
                    {/* <td class="whitespace-nowrap px-6 py-4">@mdo</td> */}
                    <td class="whitespace-nowrap px-6 py-4">sss</td>
                    <td class="whitespace-nowrap px-6 py-4">Otto</td>
                    <td class="whitespace-nowrap px-6 py-4">23/5/2023</td>
                    {/* <td class="whitespace-nowrap px-6 py-4">23/5/2023</td> */}
                    <td className="mt-8 mb-8 whitespace-nowrap px-6 py-4">
                      <button
                        type="submit"
                        className="mr-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-stone-200 hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Sửa
                      </button>
                      <button
                        type="submit"
                        className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-900  mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                type="submit"
                className="ml-2 mb-2 mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Thêm bài viết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
