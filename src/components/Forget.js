import React, { useState } from "react";
import { Link } from "react-router-dom"

const Forget=()=>{
    const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email: ", email);
    // Gửi yêu cầu đặt lại mật khẩu tới server
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Quên Mật Khẩu
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          <Link to="/Register" className="font-medium text-indigo-600 hover:text-indigo-500">
                Bạn chưa đăng ký tài khoản?
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mb-28">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 mb-28">
          <form className="space-y-6" action="#" method="POST">
            <div className="mb-12">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email đăng ký
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Nhập email của bạn"
                value={email}
                onChange={handleInputChange}
              />
            </div>
          
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
              onClick={handleSubmit}
            >

                  Đặt lại mật khẩu

            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}
export default Forget