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
            <div className="mb-11">
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
              onSubmit={handleSubmit}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-3-6.5a1.5 1.5 0 113 0v1a1.5 1.5 0 01-3 0v-1zm3-3a1.5 1.5 0 110 3h-1a1.5 1.5 0 110-3h1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
              Đặt lại mật khẩu
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}
export default Forget