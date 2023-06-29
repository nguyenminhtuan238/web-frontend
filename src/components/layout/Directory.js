import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getDirectory, getnameDirectory } from '../../store/Directory';
import { setIsVisible } from '../../store/hidden';
import { img } from '../../unilt/key';
import { setloading } from '../../store/products';
const Directory = () => {
  const get = useSelector((state) => state.Directory);
  const dispatch = useDispatch();
  const [Directory, setDirectory] = useState(1);
  useEffect(() => {
    dispatch(getDirectory());
  }, [dispatch, Directory]);
  const searchDirectory = (id) => {
    dispatch(getnameDirectory(id));
    setDirectory(id);
  };
  const handle = () => {
    dispatch(setloading());
    dispatch(setIsVisible(false));
  };
  return (
    <div>
      {get.isloading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="max-w-screen-2xl absolute  mx-auto px-4 sm:px-6 lg:px-8 border-b-4 border-indigo-500  animate-slideDown z-10 bg-white ">
            <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin mb-8"></div>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-2xl absolute  mx-auto px-4 sm:px-6 lg:px-8 border-b-4 border-indigo-500  animate-slideDown z-10 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1 ml-[150px]">
              <ul className="text-gray-400 mt-4 cursor-pointer">
                {get.Directory.map((item, index) => (
                  <li key={index}>
                    <Link
                      onClick={() => searchDirectory(item.id)}
                      className={`line-clamp-1 
                text-black dark:text-white  
                hover:bg-gray-300 focus:bg-4 
                focus:bg-gray-300 font-medium 
                rounded-lg text-sm px-4 lg:px-5 py-1 lg:py-1 mr-2 dark:hover:bg-gray-700 
                focus:outline-none dark:focus:ring-gray-800 ${
                  item.id === Directory ? 'bg-indigo-500' : ''
                } `}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-4 gap-4 col-span-2 mt-4 mb-4">
              {get.Product.length === 0 ? (
                <div className="hover:bg-gray-300 ">
                  <p className="ml-2 font-semibold">
                    Không có sản phẩm trong danh mục này
                  </p>
                </div>
              ) : (
                get.Product.map((item) => (
                  <Link
                    to={`SP/chitietsp/${item.sku}`}
                    onClick={() => handle()}
                  >
                    <div className="hover:bg-gray-300" key={item.id}>
                      <img
                        className="object-contain w-[250px] h-[150px]"
                        src={
                          img +
                          item.custom_attributes.find((a) => {
                            return a.attribute_code === 'image';
                          }).value
                        }
                        alt="Hình lỗi"
                      />
                      <p className="ml-2 font-semibold">{item.name}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Directory;
