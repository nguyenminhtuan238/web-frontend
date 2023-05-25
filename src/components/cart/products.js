import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ProductsPage = () => {
  return (
    <div>
      
      <div className="grid grid-cols-5 ml-8 mr-8 mt-8">
        <div className="col-span-1 border-2 bg-white">
          <div className="py-2 px-4 ">
            {/* Ảhh sản phẩm */}
            <div className="flex justify-center items-center w-[250px] h-[250px]">
              <img
                src="https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc=w230-rw"
                alt="Ảnh sản phẩm"
                className="object-contain"
              ></img>
            </div>

            {/* Tên sản phẩm */}
            <div className="mt-2 overflow-hidden mb-4 uppercase">
              <p class="line-clamp-3">
                Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003) (Ryzen
                5 7535HS/RAM 8GB/512GB SSD/ Windows 11)
              </p>
            </div>

            {/* Giá sản phẩm */}
            <div className="mt-4 mb-4">
              <span className="text-lg font-bold text-blue-900">
                29.000.000 <u>đ</u>{' '}
              </span>
            </div>
          </div>
        </div>
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

export default ProductsPage;
