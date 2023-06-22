import React, { useState } from 'react';
import { useEffect } from 'react';
// import {getpd} from '../../store/products';
import { img } from '../../unilt/key';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getid } from '../../store/products';
import { useSnackbar } from 'notistack';
import { addcart } from '../../store/cart';
import { unwrapResult } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

function Chitiet() {
  const get = useSelector((state) => state.products);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const pdid = useParams();
  const handlecart = async () => {
    try {
      const res = await dispatch(
        addcart({
          sku: pdid.id,
          qty: count,
        })
      );
      const cart = unwrapResult(res);
      enqueueSnackbar('Thêm Vào giỏ hàng thành công', {
        variant: 'success',
        autoHideDuration: 1200,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
      return cart;
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
        autoHideDuration: 1200,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
    }
  };
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const increaseCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    const getpdbyid = () => {
      dispatch(getid(pdid.id));
    };
    getpdbyid();
  }, [dispatch, pdid]);

  
  return (
    <div>
      {get.loadingid ? (
        <div className="flex justify-center items-center">
          <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin mb-8"></div>
        </div>
      ) : (
        <section className="container bg-slate-100 rounded-[10px] mx-auto my-8 px-6">
          <div className="flex flex-wrap py-5 justify-betweenitems-center">
            <div className="float-right border-r border-gray-300">
              <img
                className="object-contain mr-10 h-[371px] w-[362px]"
                src={
                  img +
                  get.Product.custom_attributes.find((a) => {
                    return a.attribute_code === 'image';
                  }).value
                }
                alt={get.Product.name}
              />
              <img
                className="mt-2 object-contain h-[50px] w-[50px]"
                src={
                  img +
                  get.Product.custom_attributes.find((a) => {
                    return a.attribute_code === 'image';
                  }).value
                }
                alt={get.Product.name}
              />
            </div>
            <div className="ml-5 w-full md:w-1/2">
              <h1 className="text-3xl font-bold mb-4">{get.Product.name}</h1>
              <p className="text-gray-700 text-lg mb-4"></p>
              <hr></hr>
              <p className="text-red-600 text-xl font-semibold">
                {get.Product.price.toLocaleString('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </p>
              <div className="py-5 flex items-center">
                <p className="mr-2">Số lượng:</p>
                <button
                  className="px-2 py-1 bg-gray-200 rounded-l increment"
                  onClick={() => decreaseCount()}
                >
                  -
                </button>
                <span className="px-2 py-1 bg-gray-200">{count}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded-r decrement"
                  onClick={() => increaseCount()}
                >
                  +
                </button>
              </div>
              <button
                className="bg-gray-300 text-green-700 px-4 py-2 rounded-md"
                onClick={handlecart}
                // onClick={() => handlecart(product.sku)}

              >
                Thêm vào giỏ hàng
              </button>
              <Link to="/cart">
                <button 
                  className="ml-2 mb-2 bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={handlecart}
                  // onClick={() => handlecart(product.sku)}

                >
                  Đặt mua ngay
                </button>
              </Link>
              
              <hr></hr>
              <p className="font-medium">Mô tả chi tiết sản phẩm</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Chitiet;
