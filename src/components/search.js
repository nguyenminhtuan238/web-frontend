import React, { useState } from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';

function Search() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [modal, setmodal] = useState(false);
  
  const closemodal = () => {
    setmodal(false);
  };
  
  return (
    <div className="w-full fixed ">
      <header style="pointer-events: none;">
        <nav class="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 z-50 ">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" class="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span class="self-center text-white font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
            <div class="flex items-center lg:order-2 ">
              <button
                class="text-white dark:text-white cursor-pointer hover:bg-sky-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </button>
              <div >
                <a
                    class="block cursor-pointer py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                    onClick={() => setIsSearch(!isSearch)}
                    style="pointer-events: auto;"
                  >
                    Search
                </a>
              </div> 
              
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
                    class="block cursor-pointer py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {modal && (
        <Login
          modal={() => {
            setmodal(false);
          }}
        />
      )}
      {isVisible && (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 border-b-4 border-indigo-500 animate-slideDown z-40 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1 ">
              <ul className="text-gray-400 mt-4 cursor-pointer ">
                <li>
                  <a
                    href="#"
                    class="text-black dark:text-white  hover:bg-gray-300 focus:bg-4 focus:bg-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Iot
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-4 gap-4 col-span-2 mt-4 mb-4">
              <div className="">
                <img
                  className="w-[300px] h-[200px]"
                  src="https://static.developer.sony.com/images/image/v6/s3/uploads/2017/07/Open-Devices-Header-5.6.jpg?size=225x170&v=784&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzcmMiOiIvdXBsb2Fkcy8yMDE3LzA3L09wZW4tRGV2aWNlcy1IZWFkZXItNS42LmpwZyIsImFsdF90ZXh0IjoiT3BlbiBEZXZpY2VzIEhlYWRlciA1LjYiLCJpbWFnZV9pZCI6Ijc4NCIsInNlcnZpY2UiOiJhd3MtczMiLCJhd3NfYnVja2V0Ijoic29ueWR3LXByb2Qtc3RhdGljLWFzc2V0cyIsImZvY3VzIjp7IngiOjAuNSwieSI6MC41fSwid2hpdGVsaXN0U2l6ZXMiOlsiMTIwMHhBVVRPIiwiMTAweDY1IiwiMTAweEFVVE8iLCIxMTB4ODIiLCI3NTB4QVVUTyIsIjEwMDB4QVVUTyIsIjEyMDB4QVVUTyIsIjEyMDB4ODAwIiwiMTkyMHhBVVRPIiwiMTkyMHgxMDAwIiwiMjAweDE1MCIsIjIyNXgxNzAiLCIyMjV4QVVUTyIsIjIyOXgzMDAiLCIzNjh4QVVUTyIsIjQ1MHgzNDAiLCI1MDB4QVVUTyIsIjc1MHg1MDAiLCI3eDEwIiwiN3gxMiIsIjd4MTYiLCI3eDMiLCI3eDQiLCI3eDUiLCI3eDYiLCI3eDciLCI3eDgiLCI3eDkiXSwiaW1hZ2VWZXJzaW9uIjoidjYiLCJleHAiOjE5MDQ2ODgwMDAwMDB9.dJ3lxb1l_rIV2YhYU1CztQVxCeiEGRq4xyOp_qwTErM"
                ></img>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSearch &&(
        <div className=" w-[640px] animate animate-slideLeft bg-white min-h-screen ml-auto absolute top-0 right-0 w-full h-full flex items-center justify-center z-50">
          <div className="absolute top-[10px] right-[40px] modal bg-white p-8">
            
            <Link to="/Search" onClick={() => setIsSearch(!isSearch)} >close</Link>  
      
          </div>
          
        </div>
      )}
    </div>
  );
}
export default Search;