import React, { useState } from 'react';

function Header() {
  const [isVisible, setIsVisible] = useState(true);

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div>
        <header>
            <nav class="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span class="self-center text-white font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div class="flex items-center lg:order-2">
                        <a href="#" class="text-white dark:text-white hover:bg-sky-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                        <a href="#" class="text-white dark:text-white hover:bg-sky-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Sign up</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" onClick={() => setIsVisible(!isVisible)} aria-current="page">Home</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        {isVisible &&
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-6 flex justify-center">
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <a href="/" className="text-2xl font-bold text-black">
                Trụ Sở và chi nhánh
                </a>
                <p className="mt-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ullamcorper et lectus vel mattis. Donec volutpat sapien et lorem
                dictum, eget ullamcorper odio varius. Morbi ut magna eu nulla
                ultricies interdum.
                </p>
            </div>
            <div className="col-span-1">
                <h3 className="text-lg font-bold text-black mb-4">Liên hệ</h3>
                <ul className="text-gray-400">
                <li className="mb-2">
                    <i className="fas fa-map-marker-alt mr-2"></i>Hotline: (+84) 939
                    814 858
                </li>
                <li className="mb-2">
                    <i className="fas fa-phone-alt mr-2"></i>Email:
                    Sales@scadaautomation.com.vn
                </li>
                </ul>
            </div>
            </div>
        </div>
        }
    </div>
  );
}

export default Header;
