import { Link } from "react-router-dom"
import React, { useState } from 'react';
const Login=()=>{
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(email, password);
    event.preventDefault();
    // Xử lý đăng nhập tại đây (gửi thông tin đăng nhập đến server)
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-12">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Đăng Nhập
          </h2>
        </div>
        <form className="bg-white py- px-2 shadow mt-4 space-y-4 sm:rounded-lg sm:px-10" onSubmit={handleSubmit}> 
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md py-6 shadow-sm -space-y-px-10 ">
            <div className="form-outline mb-4" >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Tài khoản đăng nhập
                </label>

              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Tài khoản đăng nhập"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>

            <div className="form-outline mb-4" >
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mật khẩu
              </label>

              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Ghi nhớ đăng nhập
              </label>
            </div>

            <div className="text-sm">
            <Link to="/Forget" className="font-medium text-indigo-600 hover:text-indigo-500">
                Quên mật khẩu?
                </Link>
            </div>
          </div>

          <div className="py-6">
            <button
              type="submit"
              onClick={handleSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-6a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
                Đăng nhập
            </button>
          </div>
        </form >
      </div>
    </div>
  );
}
export default Login