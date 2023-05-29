import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const New = () => {
  return (
    <div className="md:w-4/5 sm:w-full lg:w-3/4 xl:w-2/3 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
        {/* Thẻ Card sản phẩm */}
        <Link to="#">
          <div className="col-span-1 border-2 bg-white">
            <div className="py-2 px-4 ">
              {/* Ảnh sản phẩm */}
              <div className="flex justify-center items-center h-48 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                  alt="Ảnhsản phẩm"
                  className="object-contain max-w-full h-full"
                ></img>
              </div>

              {/* Tên sản phẩm */}
              <div className="mt-2 overflow-hidden mb-4 uppercase">
                <title className="line-clamp-3">
                  Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                  (Ryzen 5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
                </title>
              </div>

              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-lg font-bold text-blue-900 ">
                  29.000.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </div>
        </Link>

         {/* Thẻ Card sản phẩm */}
         <Link to="#">
          <div className="col-span-1 border-2 bg-white">
            <div className="py-2 px-4 ">
              {/* Ảnh sản phẩm */}
              <div className="flex justify-center items-center h-48 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                  alt="Ảnhsản phẩm"
                  className="object-contain max-w-full h-full"
                ></img>
              </div>

              {/* Tên sản phẩm */}
              <div className="mt-2 overflow-hidden mb-4 uppercase">
                <title className="line-clamp-3">
                  Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                  (Ryzen 5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
                </title>
              </div>

              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-lg font-bold text-blue-900 ">
                  29.000.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </div>
        </Link>
         {/* Thẻ Card sản phẩm */}
         <Link to="#">
          <div className="col-span-1 border-2 bg-white">
            <div className="py-2 px-4 ">
              {/* Ảnh sản phẩm */}
              <div className="flex justify-center items-center h-48 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                  alt="Ảnhsản phẩm"
                  className="object-contain max-w-full h-full"
                ></img>
              </div>

              {/* Tên sản phẩm */}
              <div className="mt-2 overflow-hidden mb-4 uppercase">
                <title className="line-clamp-3">
                  Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                  (Ryzen 5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
                </title>
              </div>

              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-lg font-bold text-blue-900 ">
                  29.000.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </div>
        </Link>
         {/* Thẻ Card sản phẩm */}
         <Link to="#">
          <div className="col-span-1 border-2 bg-white">
            <div className="py-2 px-4 ">
              {/* Ảnh sản phẩm */}
              <div className="flex justify-center items-center h-48 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                  alt="Ảnhsản phẩm"
                  className="object-contain max-w-full h-full"
                ></img>
              </div>

              {/* Tên sản phẩm */}
              <div className="mt-2 overflow-hidden mb-4 uppercase">
                <title className="line-clamp-3">
                  Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                  (Ryzen 5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
                </title>
              </div>

              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-lg font-bold text-blue-900 ">
                  29.000.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </div>
        </Link>
         {/* Thẻ Card sản phẩm */}
         <Link to="#">
          <div className="col-span-1 border-2 bg-white">
            <div className="py-2 px-4 ">
              {/* Ảnh sản phẩm */}
              <div className="flex justify-center items-center h-48 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                  alt="Ảnhsản phẩm"
                  className="object-contain max-w-full h-full"
                ></img>
              </div>

              {/* Tên sản phẩm */}
              <div className="mt-2 overflow-hidden mb-4 uppercase">
                <title className="line-clamp-3">
                  Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                  (Ryzen 5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
                </title>
              </div>

              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-lg font-bold text-blue-900 ">
                  29.000.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </div>
        </Link>
         {/* Thẻ Card sản phẩm */}
         <Link to="#">
          <div className="col-span-1 border-2 bg-white">
            <div className="py-2 px-4 ">
              {/* Ảnh sản phẩm */}
              <div className="flex justify-center items-center h-48 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                  alt="Ảnhsản phẩm"
                  className="object-contain max-w-full h-full"
                ></img>
              </div>

              {/* Tên sản phẩm */}
              <div className="mt-2 overflow-hidden mb-4 uppercase">
                <title className="line-clamp-3">
                  Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                  (Ryzen 5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
                </title>
              </div>

              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-lg font-bold text-blue-900 ">
                  29.000.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </div>
        </Link>
         {/* Thẻ Card sản phẩm */}
         <Link to="#">
          <div className="col-span-1 border-2 bg-white">
            <div className="py-2 px-4 ">
              {/* Ảnh sản phẩm */}
              <div className="flex justify-center items-center h-48 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                  alt="Ảnhsản phẩm"
                  className="object-contain max-w-full h-full"
                ></img>
              </div>

              {/* Tên sản phẩm */}
              <div className="mt-2 overflow-hidden mb-4 uppercase">
                <title className="line-clamp-3">
                  Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                  (Ryzen 5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
                </title>
              </div>

              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-lg font-bold text-blue-900 ">
                  29.000.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </div>
        </Link>
         {/* Thẻ Card sản phẩm */}
         <Link to="#">
          <div className="col-span-1 border-2 bg-white">
            <div className="py-2 px-4 ">
              {/* Ảnh sản phẩm */}
              <div className="flex justify-center items-center h-48 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                  alt="Ảnhsản phẩm"
                  className="object-contain max-w-full h-full"
                ></img>
              </div>

              {/* Tên sản phẩm */}
              <div className="mt-2 overflow-hidden mb-4 uppercase">
                <title className="line-clamp-3">
                  Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                  (Ryzen 5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
                </title>
              </div>

              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-lg font-bold text-blue-900 ">
                  29.000.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </div>
        </Link>
         {/* Thẻ Card sản phẩm */}
         <Link to="#">
          <div className="col-span-1 border-2 bg-white">
            <div className="py-2 px-4 ">
              {/* Ảnh sản phẩm */}
              <div className="flex justify-center items-center h-48 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                  alt="Ảnhsản phẩm"
                  className="object-contain max-w-full h-full"
                ></img>
              </div>

              {/* Tên sản phẩm */}
              <div className="mt-2 overflow-hidden mb-4 uppercase">
                <title className="line-clamp-3">
                  Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                  (Ryzen 5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
                </title>
              </div>

              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-lg font-bold text-blue-900 ">
                  29.000.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </div>
        </Link>
         {/* Thẻ Card sản phẩm */}
         <Link to="#">
          <div className="col-span-1 border-2 bg-white">
            <div className="py-2 px-4 ">
              {/* Ảnh sản phẩm */}
              <div className="flex justify-center items-center h-48 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                  alt="Ảnhsản phẩm"
                  className="object-contain max-w-full h-full"
                ></img>
              </div>

              {/* Tên sản phẩm */}
              <div className="mt-2 overflow-hidden mb-4 uppercase">
                <title className="line-clamp-3">
                  Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                  (Ryzen 5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
                </title>
              </div>

              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-lg font-bold text-blue-900 ">
                  29.000.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </div>
        </Link>
         {/* Thẻ Card sản phẩm */}
         <Link to="#">
          <div className="col-span-1 border-2 bg-white">
            <div className="py-2 px-4 ">
              {/* Ảnh sản phẩm */}
              <div className="flex justify-center items-center h-48 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                  alt="Ảnhsản phẩm"
                  className="object-contain max-w-full h-full"
                ></img>
              </div>

              {/* Tên sản phẩm */}
              <div className="mt-2 overflow-hidden mb-4 uppercase">
                <title className="line-clamp-3">
                  Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                  (Ryzen 5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
                </title>
              </div>

              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-lg font-bold text-blue-900 ">
                  29.000.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </div>
        </Link>
         {/* Thẻ Card sản phẩm */}
         <Link to="#">
          <div className="col-span-1 border-2 bg-white">
            <div className="py-2 px-4 ">
              {/* Ảnh sản phẩm */}
              <div className="flex justify-center items-center h-48 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                  alt="Ảnhsản phẩm"
                  className="object-contain max-w-full h-full"
                ></img>
              </div>

              {/* Tên sản phẩm */}
              <div className="mt-2 overflow-hidden mb-4 uppercase">
                <title className="line-clamp-3">
                  Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                  (Ryzen 5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
                </title>
              </div>

              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-lg font-bold text-blue-900 ">
                  29.000.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </div>
        </Link> {/* Thẻ Card sản phẩm */}
        <Link to="#">
          <div className="col-span-1 border-2 bg-white">
            <div className="py-2 px-4 ">
              {/* Ảnh sản phẩm */}
              <div className="flex justify-center items-center h-48 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                  alt="Ảnhsản phẩm"
                  className="object-contain max-w-full h-full"
                ></img>
              </div>

              {/* Tên sản phẩm */}
              <div className="mt-2 overflow-hidden mb-4 uppercase">
                <title className="line-clamp-3">
                  Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                  (Ryzen 5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
                </title>
              </div>

              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-lg font-bold text-blue-900 ">
                  29.000.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </div>
        </Link> {/* Thẻ Card sản phẩm */}
        <Link to="#">
          <div className="col-span-1 border-2 bg-white">
            <div className="py-2 px-4 ">
              {/* Ảnh sản phẩm */}
              <div className="flex justify-center items-center h-48 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                  alt="Ảnhsản phẩm"
                  className="object-contain max-w-full h-full"
                ></img>
              </div>

              {/* Tên sản phẩm */}
              <div className="mt-2 overflow-hidden mb-4 uppercase">
                <title className="line-clamp-3">
                  Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                  (Ryzen 5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
                </title>
              </div>

              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-lg font-bold text-blue-900 ">
                  29.000.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center mt-8 mb-8">
        <Stack spacing={2}>
          <Pagination count={10} showFirstButton showLastButton />
          {/* <Pagination count={10} hidePrevButton hideNextButton /> */}
        </Stack>
      </div>
    </div>
  );
};

export default New;
