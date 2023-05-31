import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getpd } from '../../store/products';
import { img } from '../../unilt/key';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const ProductsPage = () => {
  const [p,setp]=useState(1)
  const get = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const handleChange = (event, value) => {
    setp(value);
  };

  useEffect(() => {
  const getPD=()=>{
    dispatch(getpd(p))
  }
  getPD()
  }, [dispatch,p]);
  
  return (
    <div>
    {get.isloading?<div className="flex justify-center items-center">
  <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
</div>:
    <div className="product-list md:w-4/5 sm:w-full lg:w-3/4 xl:w-2/3 mx-auto">
      <div className="product-grid grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
        {/* Hiển thị danh sách sản phẩm */}
        {get.Product.map((product) =>  (
          <div key={product.id}> 
            <Link to={`product/${product.id}`}  >
              <div className="product-item col-span-1 border-2 bg-gray-100 rounded-lg">
                <div className="product-image py-2 px-4 ">
                  {/* Hiển thị ảnh sản phẩm */}
                  <div className="flex justify-center items-center h-50 md:h-auto bg-white rounded-lg" >
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
                <div className="product-price mt-2 mb-4 flex ">
                  <span className="text-lg font-bold text-red-700 ml-4">
                    {product.price.toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    })}                 
                  </span>
                </div>
              </div>
            </Link> 
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-16 mb-16">
        <Stack spacing={1}>
          <Pagination count={get.getpage} page={p}   onChange={handleChange} />
          {/* <Pagination count={10} hidePrevButton hideNextButton /> */}
        </Stack>
      </div>
    </div>
    }
    </div>
  );
};
export default ProductsPage;