import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getpd } from '../../store/products';
const ProductsPage = () => {
  const get = useSelector((state) => state.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
  const getPD=()=>{
    
    dispatch(getpd())
  }
  getPD()
  }, [dispatch]);
  
  return (
    <div>
    {get.isloading?<div class="flex justify-center items-center">
  <div class="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
</div>:
    <div className="product-list md:w-4/5 sm:w-full lg:w-3/4 xl:w-2/3 mx-auto">
      <div className="product-grid grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
        {/* Hiển thị danh sách sản phẩm */}
        {get.Product.map((product) =>  (
          <Link to={`product/${product.id}`}  key={product.id}>
            <div className="product-item col-span-1 border-2 bg-white">
              <div className="product-image py-2 px-4 ">
                {/* Hiển thị ảnh sản phẩm */}
                <div className="flex justify-center items-center h-50 md:h-auto" >
                  <img
                    // src={product.custom_attributes.find(attr => attr.attribute_code === 'image').value}
                    src="http://192.168.1.9/magento2/pub/media/catalog/product/cache/80c6d82db34957c21ffe417663cf2776////m/o/modem_wifi_4_cong.jpg"
                    alt={product.name}
                    className="object-contain max-w-full h-full"
                  />
                </div>
              </div>

              {/* Hiển thị tên sản phẩm */}
              <div className="product-name mt-2 overflow-hidden mb-2 ml-4 uppercase line-clamp-3 min-h-[70px]">
                  {product.name} 
              </div>

              {/* Hiển thị giá sản phẩm */}
              <div className="product-price mt-2 mb-4 ml-4">
                <span className="text-lg font-bold text-blue-900 ">
                  {product.price}.000 <u>đ</u>{' '}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center mt-16 mb-16">
        <Stack spacing={2}>
          <Pagination count={10} showFirstButton showLastButton />
          {/* <Pagination count={10} hidePrevButton hideNextButton /> */}
        </Stack>
      </div>
    </div>
    }
    </div>
  );
};

export default ProductsPage;