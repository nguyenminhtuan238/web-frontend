import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getpd } from '../../store/products';
import { img } from '../../unilt/key';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const ProductsPage = () => {
  const get = useSelector((state) => state.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
  const getPD=()=>{
    
    dispatch(getpd())
    // console.log(get.Product[0].custom_attributes.find(a=>{return a.attribute_code==='image'}).value)
  }
  getPD()
  }, [dispatch]);
  
  return (
    <div>
    {get.isloading?<div className="flex justify-center items-center">
  <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin mb-8"></div>
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
                      src={img+product.custom_attributes.find(a=>{return a.attribute_code==='image'}).value}
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
                  {product.price} <u>đ</u>{' '}                   
                </span>
                <div className="float-right mr-2 hover:bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center">
                  
                  <Link to="/cart">
                    <button>
                      <AddShoppingCartIcon />
                    </button>
                    
                  </Link>
                </div>
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