import React from "react";
import axios from "axios";
import {useState, useEffect } from "react";
// import {getpd} from '../../store/products';
// import {img} from '../unilt/key'; 


function Chitiet() {
    const [product, setProducts] = useState({});
    // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productId = '0012'; // ID của sản phẩm cần lấy thông tin chi tiết
    axios.get(`http://192.168.1.9:5000/product/${productId}`)
      .then(response => {
        console.log(response)
        setProducts(response.data.product);
        // setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        // setIsLoading(false);
      });
  }, []);

    return(
        <section className="container bg-slate-100 rounded-[10px] mx-auto my-8 px-6">
            <div  className="flex flex-wrap py-5 justify-betweenitems-center">
                <div className="float-right border-r border-gray-300">
                    <img className="object-contain mr-10 h-[400px] w-[500px]" src="" alt={product.name} />
                    <img className="mt-2 object-contain h-[50px] w-[50px]" src="" alt={product.name} />
                </div>
                <div className="ml-5 w-full md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 text-lg mb-4"></p>
                    <hr></hr>
                    <p className="text-red-600 text-xl font-semibold">{product.price}</p>
                    <div className="py-5 flex items-center">
                        <p className="mr-2">Số lượng:</p>
                        <button className="px-2 py-1 bg-gray-200 rounded-l increment">-</button>
                            <span className="px-2 py-1 bg-gray-200">0</span>
                        <button className="px-2 py-1 bg-gray-200 rounded-r decrement">+</button>
                    </div>
                    <button className="bg-gray-300 text-green-700 px-4 py-2 rounded-md">Thêm vào giỏ hàng</button>
                    <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded-md">Đặt mua ngay</button>
                </div>
            </div>
            
        </section>
        
    )
}

export default Chitiet;
