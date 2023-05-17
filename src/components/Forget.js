import React, { useState } from "react";

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
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md flex flex-col items-center w-50 h-50" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-6 text-center text-lg mb">Quên Mật Khẩu</h2>
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline justify-center "
          type="submit"
        >
          Đặt lại mật khẩu
        </button>
      </form>
    </div>
  );
}
export default Forget