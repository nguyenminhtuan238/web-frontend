import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { searchPrice, SearchType } from '../../store/products';
import { GetALL, setloading } from '../../store/products';
import { img } from '../../unilt/key';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSnackbar } from 'notistack';
import { addcart } from '../../store/cart';
import { unwrapResult } from '@reduxjs/toolkit';
import { setScroll } from '../../store/hidden';
function SortBy() {
  const [Price, setprice] = useState([20, 37]);
  const dispatch = useDispatch();
  const get = useSelector((state) => state.products);
  const { enqueueSnackbar } = useSnackbar();
  const handleChangeL = (event, newValue) => {
    setprice(newValue);
  };
  const search = () => {
    const data = {
      max: Price[1],
      min: Price[0],
    };
    dispatch(setloading());
    dispatch(searchPrice(data));
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

  const handle = () => {
    dispatch(setloading());
    dispatch(setScroll(false));
  };

  useEffect(() => {
    const GETALL = () => {
      try {
        const res = dispatch(GetALL());
        const pd = unwrapResult(res);
        return pd;
      } catch (error) {
        console.log(error);
      }
    };
    GETALL();
  }, [dispatch]);
  const searchAZ = () => {
    dispatch(setloading());
    dispatch(SearchType(false));
  };
  const searchZA = () => {
    dispatch(setloading());
    dispatch(SearchType(true));
  };
  function valuetext(value) {
    return value.toLocaleString();
  }
  return (
    <div>
      <div className=" w-screen bg-white border-t-2 border-b-2 h-[64px] flex items-center rounded-t-lg">
        <h1 className="ml-8 font-bold"> Sắp xếp theo Giá</h1>
        <Link to="#" className="mr-4 ml-4 ">
          <Box sx={{ width: 300 }}>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={Price}
              onChange={handleChangeL}
              getAriaValueText={valuetext}
              valueLabelFormat={valuetext}
              valueLabelDisplay="on"
              step={500000}
              min={0}
              max={10000000}
            />
          </Box>
        </Link>
        <Link to="#">
          <button
            onClick={searchAZ}
            className="h-[38px] w-[150px] border-2 mr-4 rounded-lg border-blue-200 border-transparent text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            từ A đến Z
          </button>
        </Link>
        <Link to="#">
          <button
            onClick={searchZA}
            className="h-[38px] w-[150px] border-2 mr-4 rounded-lg border-blue-200 border-transparent text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            từ Z đến A
          </button>
        </Link>
        <Link to="#">
          <button
            className="h-[38px] w-[150px] border-2 mr-4 rounded-lg border-blue-200 border-transparent text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={search}
          >
            Tìm
          </button>
        </Link>
      </div>
      <div className="mb-4">
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
                      to={`../SP/chitietsp/${product.sku}`}
                    >
                      <div className="product-image py-2 px-4 ">
                        {/* Hiển thị ảnh sản phẩm */}
                        <div className="flex justify-center items-center md:h-auto bg-white ">
                          <img
                            src={product.custom_attributes?
                              img +
                              product.custom_attributes.find((a) => {
                                return a.attribute_code === 'image';
                              }).value:""
                            }
                            alt={product.name}
                            className="object-contain max-w-full h-[120px] rounded-lg"
                          />
                        </div>
                      </div>
                      <hr className="border-gray-200"></hr>

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
                      <span className=" text-white">
                        {product.qty} sản phẩm có sẵn
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default SortBy;
