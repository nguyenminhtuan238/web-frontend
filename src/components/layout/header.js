import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSearch, setmodal } from '../../store/hidden';
import { Userkey } from '../../unilt/key';
import { Logout } from '../../store/auth';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { setloading } from '../../store/products';
import Directory from './Directory';
import Badge from '@mui/material/Badge';
import { getcart } from '../../store/cart';

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const hidden = useSelector((state) => state.hidden);
  const User = useSelector((state) => state.User);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(Logout());
    dispatch(getcart());
  };
  useEffect(() => {
    if (User.User) {
      dispatch(getcart());
    }
  }, [dispatch, User.User]);
  return (
    <div className={hidden.changscroll ? ' hidden' : 'w-full sticky top-0 '}>
      <header>
        <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 z-50">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link
              to="/"
              onClick={() => dispatch(setloading())}
              className="flex items-center"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-white font-semibold whitespace-nowrap dark:text-white">
                Mekong
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              {!User.User && (
                <button
                  className="text-white dark:text-white cursor-pointer hover:bg-sky-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  onClick={() => dispatch(setmodal())}
                >
                  Đăng nhập
                </button>
              )}
              {User.User && (
                <Link
                  className="text-white dark:text-white cursor-pointer hover:bg-sky-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  to="/thongtin"
                >
                  {JSON.parse(localStorage.getItem(Userkey)).firstname +
                    ' ' +
                    JSON.parse(localStorage.getItem(Userkey)).lastname}
                </Link>
              )}
              {User.User && (
                <button
                  className="text-white dark:text-white cursor-pointer hover:bg-sky-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  onClick={() => logout()}
                >
                  Đăng Xuất
                </button>
              )}

              <div>
                <Link
                  className="block cursor-pointer py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                  onClick={() => dispatch(setIsSearch())}
                >
                  Tìm kiếm
                </Link>
              </div>
              <Link
                className="text-white ml-3 dark:text-white cursor-pointer hover:bg-sky-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                to="/Cart"
              >
                <Badge
                  badgeContent={
                    cart.cart.length === undefined ? 0 : cart.cart.length
                  }
                  color="primary"
                >
                  <ShoppingCartIcon />
                </Badge>
              </Link>
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
                <li>
                  <Link
                    className="block cursor-pointer py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                    to="post"
                  >
                    Bài Viết
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {isVisible && <Directory />}
    </div>
  );
}

export default memo(Header);
