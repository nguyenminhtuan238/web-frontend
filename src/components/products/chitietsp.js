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
import CheckIcon from '@mui/icons-material/Check';

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
        <div className="bg-gray-100 pt-8 pb-8">
                    <div className="w-[1250px] h-[550px] bg-white mx-auto container mb-8" >
                        <div class="grid grid-cols-3 gap-4 ">
                            
                            <div class="col-span-1 bg-white p-4 border-r-2 border-gray-200">
                                <img 
                                    src={
                                        img +
                                        get.Product.custom_attributes.find((a) => {
                                          return a.attribute_code === 'image';
                                        }).value
                                      }
                                      alt={get.Product.name}
                                    className="h-[445px] object-contain"
                                />
                                
                                <img 
                                    src={
                                        img +
                                        get.Product.custom_attributes.find((a) => {
                                          return a.attribute_code === 'image';
                                        }).value
                                      }
                                      alt={get.Product.name}
                                    className=" box w-[75px] h-[75px] object-contain"
                                />

                            </div>

                            <div class="col-span-1 bg-white mt-8 ml-8">
                                <h1 className="text-2xl">{get.Product.name}</h1>
                                <p className="text-black font-semibold ml-4 mt-8 mb-4 text-3xl">
                                  {get.Product.price.toLocaleString('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                  })}
                                </p>
                                <hr></hr>
                                <div className="mt-8 bg-red-50 mr-2 p-4 mb-8 rounded-2xl">
                                  <p className="ml-4 mb-4"> <CheckIcon/> Giao hàng trên toàn quốc</p>
                                  <p className="ml-4"> <CheckIcon/> Vận chuyển: 24/7</p>
                                  <p className="ml-4 mt-4"> <CheckIcon/> Được kiểm tra khi nhận hàng</p>
                                </div>
                                <hr></hr>
                                
                                <div className="py-5 ml-4 mt-2 flex items-center">
                                  <p>Số lượng:</p>
                                  <button
                                    className="px-2 py-1 ml-4 bg-gray-200 rounded-l increment"
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
                                <div className="flex justify-center items-center mt-4">
                                  <button
                                    className="bg-gray-300 text-green-700 px-4 py-2 rounded-md"
                                    onClick={handlecart}
                                    // onClick={() => handlecart(product.sku)}

                                  >
                                    Thêm vào giỏ hàng
                                  </button>
                                    <button 
                                      className="ml-6 bg-red-500 text-white px-4 py-2 rounded-md"
                                      onClick={handlecart}
                                      // onClick={() => handlecart(product.sku)}
                                    >
                                      Đặt mua ngay
                                    </button>
                                </div>
                            </div>

                            <div class="col-span-1 pl-12 bg-white p-4 flex items-center">
                                <img src={require("./mekong.JPG")}
                                    alt="ảnh"
                                    className="object-fill h-[350px] border-2 shadow-xl "
                                />
                            </div>

                        </div>
                    </div>

                    <div className="w-[1250px] h-auto bg-white mx-auto container" >

                        <div class="grid grid-cols-5 gap-6">
                            <div class="col-span-2 bg-white p-4">
                                <h1 className="text-lg">Thông Tin Chi Tiết</h1>
                                <table className="table-auto mt-4">
                                    <tbody className="flex flex-col">
                                        <tr className="flex flex-row">
                                            <td className="min-w-[200px] text-left bg-red-50  px-4 py-2">Công ty phát hành</td>
                                            <td className="min-w-full text-left font-light px-4 py-2">Mekong Group</td>
                                        </tr>
                                        <tr className="flex flex-row">
                                            <td className="min-w-[200px] text-left bg-red-50 px-4 py-2">Ngày cập nhật </td>
                                            <td className="min-w-full text-left bg-gray-50 font-light px-4 py-2">
                                              {new Date(get.Product.updated_at).toLocaleDateString(
                                                'vi-VN',
                                                {
                                                  day: '2-digit',
                                                  month: '2-digit',
                                                  year: 'numeric',
                                                  hour: '2-digit',
                                                  minute: '2-digit',
                                                  second: '2-digit',
                                                }
                                              )}
                                            </td>
                                        </tr>
                                        <tr className="flex flex-row">
                                            <td className="min-w-[200px] text-left bg-red-50 px-4 py-2">Số lượng</td>
                                            <td className="min-w-full text-left font-light px-4 py-2">{get.Product.qty} sản phẩm</td>
                                        </tr>
                                        <tr className="flex flex-row">
                                            <td className="min-w-[200px] text-left bg-red-50 px-4 py-2">Trọng lượng </td>
                                            <td className="min-w-full text-left bg-gray-50 font-light px-4 py-2 ">{get.Product.weight} kg</td>
                                        </tr>
                                        <tr className="flex flex-row">
                                            <td className="min-w-[200px] text-left bg-red-50 px-4 py-2">Mã sản phẩm </td>
                                            <td className="min-w-full text-left font-light px-4 py-2">{get.Product.sku}</td>
                                        </tr>
                                        <tr className="flex flex-row">
                                            <td className="min-w-[200px] text-left bg-red-50 px-4 py-2">Nhà cung cấp </td>
                                            <td className="min-w-full text-left bg-gray-50 font-light px-4 py-2">Mekong's subsidiary</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="w-full col-span-3 bg-white p-4">
                                <h1 className="text-lg">Mô Tả Sản Phẩm</h1>
                                <p className="ml-2 mt-2">{get.Product.custom_attributes[0].value.replace(/<\/?p>/g, '')}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
      )}
    </div>
  );
}

export default Chitiet;
