import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { updateif } from '../store/auth';
const Thongtin = () => {
  const User = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [countryId, setcountry_id] = useState("");
  const [street, setstreet] = useState("");
  const [city, setcity] = useState("");
  const [telephone , settelephone ] = useState("");
  const [postcode, setpostcode] = useState("");
  useEffect(() => {
    if(!User.User){
      navigate("/")
    }else{
      setfirstname(User.User.firstname)
      setlastname(User.User.lastname)
      setcountry_id(User.User.addresses[0]?.country_id?User.User.addresses[0].country_id:"")
      setstreet(User.User.addresses[0]?.street?User.User.addresses[0].street:"")
      setcity(User.User.addresses[0]?.city?User.User.addresses[0].city:"")
      settelephone(User.User.addresses[0]?.telephone?User.User.addresses[0].telephone:"")
      setpostcode(User.User.addresses[0]?.postcode?User.User.addresses[0].postcode:"")
    }
  }, [User.User,navigate]);
  const updateifn=async (e)=>{
    e.preventDefault()
    try {
      const res=await dispatch(updateif({firstname,lastname,countryId,street,city,telephone,postcode,email:User.User.email}))
      const l=unwrapResult(res)
      console.log(l)
      return l
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md mt-8 mb-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Thông tin người dùng
        </h2>
      </div>
      <form className="p-6 space-y-6 " onSubmit={(e)=>updateifn(e)}>
      <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="firstname">
            Họ 
          </label>
          <input
          type="text"
          value={firstname}
          required
          onChange={(e)=>setfirstname(e.target.value)} 
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="lastname">
            Tên
          </label>
          <input
          type="text"
          value={lastname}
          required
          onChange={(e)=>setlastname(e.target.value)}  
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="country">
            Quốc Gia
          </label>
          <input 
          type="text"
          value={countryId}
          required
          onChange={(e)=>setcountry_id(e.target.value)} 
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="street">
          Đường 
          </label>
          <input 
          type="text"
          value={street}
          required
          onChange={(e)=>setstreet(e.target.value)} 
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
          Thành Phố
          </label>
          <input
          type="text"
          value={city}
          required
          onChange={(e)=>setcity(e.target.value)}  
           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="postcode">
          Mã Bưu điện
          </label>
          <input
          type="number"
          required
          value={postcode}
          onChange={(e)=>setpostcode(e.target.value)}  
           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label 
           className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Số điện thoại:
          </label>
          <input 
          value={telephone}
          required
            onChange={(e)=>settelephone(e.target.value)} 
           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="(123) 456-7890"/>
        </div>
        <div className="py-6 w-full flex justify-center  space-x-36 ">
          <Link
            to="/"
            className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mr-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Quản lí IOT
          </Link>
          <button
            type="submit"
            className=" py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
          Cập Nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default Thongtin;
