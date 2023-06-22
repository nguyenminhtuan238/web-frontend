import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getpd, setloading } from '../../store/products';
import { img } from '../../unilt/key';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSnackbar } from 'notistack';
import { addcart } from '../../store/cart';
import { unwrapResult } from '@reduxjs/toolkit';
import { setScroll } from '../../store/hidden';
const ProductsPage = () => {
  const [p, setp] = useState(1);
  const get = useSelector((state) => state.products);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const handleChange = (event, value) => {
    setp(value);
  };
  const handlecart = async (id) => {
    try {
      const res = await dispatch(
        addcart({
          sku: id,
          qty: 1,
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
  useEffect(() => {
    const getPD = () => {
      dispatch(setloading());
      dispatch(getpd(p));
    };
    getPD();
  }, [dispatch, p]);
  const handle = () => {
    dispatch(setloading());
    dispatch(setScroll(false));
  };
  return (
    <div>
      {get.isloading ? (
        <div className="flex justify-center items-center">
          <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin mb-8"></div>
        </div>
      ) : (
        <div className="product-list md:w-4/5 sm:w-full lg:w-3/4 xl:w-2/3 mx-auto">
          <div className="product-grid grid grid-cols-1 md:grid-cols-5 gap-4 mt-8 flex">
            {/* Hiển thị danh sách sản phẩm */}
            {get.Product.map((product) => (
              <div key={product.id}>
                <div className="product-item col-span-1 border-2 rounded-lg">
                  <Link
                    onClick={() => handle()}
                    to={`chitietsp/${product.sku}`}
                  >
                    <div className="product-image py-2 px-4 ">
                      {/* Hiển thị ảnh sản phẩm */}
                      <div className="flex justify-center items-center md:h-auto bg-white ">
                        <img
                          src={
                            img +
                            product.custom_attributes.find((a) => {
                              return a.attribute_code === 'image';
                            }).value
                          }
                          alt={product.name}
                          className="object-contain max-w-full h-[120px] rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Hiển thị tên sản phẩm */}
                    <div
                      className="product-name overflow-hidden mt-2 ml-4 line-clamp-2 min-h-[50px]"
                      title={product.name}
                    >
                      {product.name}
                    </div>
                  </Link>
                  {/* Hiển thị giá sản phẩm */}
                  <div className="product-price mt-2 mb-1 flex">
                    <span className="text-lg font-bold text-red-700 ml-4">
                      {product.price.toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      })}
                    </span>

                    <Link
                      onClick={() => handlecart(product.sku)}
                      className="ml-auto mr-4 hover:bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center"
                    >
                      <AddShoppingCartIcon />
                    </Link>
                  </div>
                  <div className="rounded-full bg-red-400 ml-2 mr-2 mb-2 flex items-center justify-center">
                  <span className="text-white">
                    {product.qty === 0 ? "Hết hàng" : `${product.qty} sản phẩm có sẵn`}
                  </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-16 mb-16">
            <Stack spacing={1}>
              <Pagination
                count={get.getpage}
                page={p}
                onChange={handleChange}
              />
              {/* <Pagination count={10} hidePrevButton hideNextButton /> */}
            </Stack>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductsPage;
