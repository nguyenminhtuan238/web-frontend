import React from "react";
import { useEffect } from "react";
// import {getpd} from '../../store/products';
import {img} from '../unilt/key'; 
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getid } from "../store/products";
function Chitiet() {
    const get = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const pdid=useParams()
  useEffect(() => {
    const getpdbyid=async ()=>{
       await  dispatch(getid(pdid.id))
    }
    getpdbyid()
  }, [dispatch,pdid]);

    return(
        <div>
        {get.isloading?<div className="flex justify-center items-center">
  <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin mb-8"></div>
</div>:
        <section className="container bg-slate-100 rounded-[10px] mx-auto my-8 px-6">
            <div  className="flex flex-wrap py-5 justify-betweenitems-center">
                <div className="float-right border-r border-gray-300">
                    <img className="object-contain mr-10 h-[400px] w-[500px]" 
                        src={img+get.Product.custom_attributes.find(a=>{return a.attribute_code==='image'}).value} 
                        alt={get.Product.name} />
                    <img className="mt-2 object-contain h-[50px] w-[50px]" 
                        src={img+get.Product.custom_attributes.find(a=>{return a.attribute_code==='image'}).value} 
                         alt={get.Product.name} />
                </div>
                <div className="ml-5 w-full md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">{get.Product.name}</h1>
                    <p className="text-gray-700 text-lg mb-4"></p>
                    <hr></hr>
                    <p className="text-red-600 text-xl font-semibold">{get.Product.price}</p>
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
        }
        </div>
        
    )
}

export default Chitiet;
