import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSearch, setmodal } from '../../store/hidden';
function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const hidden = useSelector((state) => state.hidden);
  const dispatch = useDispatch();
  return (
    <div
      className={hidden.changscroll ? ' hidden' : 'w-full sticky top-0 '}
      id="he"
    >
      <header>
        <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 z-50">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-white font-semibold whitespace-nowrap dark:text-white">
                Mekong
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <button
                className="text-white dark:text-white cursor-pointer hover:bg-sky-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                onClick={() => dispatch(setmodal())}
              >
                Đăng nhập
              </button>
              <div>
                <Link
                  className="block cursor-pointer py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                  onClick={() => dispatch(setIsSearch())}
                >
                  Tìm kiếm
                </Link>
              </div>
              <button
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 sm:"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    className="block cursor-pointer py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    Sản phẩm
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {isVisible && (
        <div className="max-w-screen-2xl absolute  mx-auto px-4 sm:px-6 lg:px-8 border-b-4 border-indigo-500  animate-slideDown z-40 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1 ml-[150px]">
              <ul className="text-gray-400 mt-4 cursor-pointer">
                <li>
                  <Link className="line-clamp-1 text-black dark:text-white  hover:bg-gray-300 focus:bg-4 focus:bg-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-1 lg:py-1 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                    IoT  
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-4 gap-4 col-span-2 mt-4 mb-4">
              <div className="">
                <img
                  className="w-[250px] h-[150px]"
                  src="https://static.developer.sony.com/images/image/v6/s3/uploads/2017/07/Open-Devices-Header-5.6.jpg?size=225x170&v=784&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzcmMiOiIvdXBsb2Fkcy8yMDE3LzA3L09wZW4tRGV2aWNlcy1IZWFkZXItNS42LmpwZyIsImFsdF90ZXh0IjoiT3BlbiBEZXZpY2VzIEhlYWRlciA1LjYiLCJpbWFnZV9pZCI6Ijc4NCIsInNlcnZpY2UiOiJhd3MtczMiLCJhd3NfYnVja2V0Ijoic29ueWR3LXByb2Qtc3RhdGljLWFzc2V0cyIsImZvY3VzIjp7IngiOjAuNSwieSI6MC41fSwid2hpdGVsaXN0U2l6ZXMiOlsiMTIwMHhBVVRPIiwiMTAweDY1IiwiMTAweEFVVE8iLCIxMTB4ODIiLCI3NTB4QVVUTyIsIjEwMDB4QVVUTyIsIjEyMDB4QVVUTyIsIjEyMDB4ODAwIiwiMTkyMHhBVVRPIiwiMTkyMHgxMDAwIiwiMjAweDE1MCIsIjIyNXgxNzAiLCIyMjV4QVVUTyIsIjIyOXgzMDAiLCIzNjh4QVVUTyIsIjQ1MHgzNDAiLCI1MDB4QVVUTyIsIjc1MHg1MDAiLCI3eDEwIiwiN3gxMiIsIjd4MTYiLCI3eDMiLCI3eDQiLCI3eDUiLCI3eDYiLCI3eDciLCI3eDgiLCI3eDkiXSwiaW1hZ2VWZXJzaW9uIjoidjYiLCJleHAiOjE5MDQ2ODgwMDAwMDB9.dJ3lxb1l_rIV2YhYU1CztQVxCeiEGRq4xyOp_qwTErM"
                  alt="Hình lỗi"
                />
              </div>
              
              
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
