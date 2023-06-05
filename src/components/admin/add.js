import React, { useState } from 'react';
import axios from 'axios';
import { Storagekey, Userkey } from '../../unilt/key';

function Them() {
  // Khai báo các biến trạng thái cho tiêu đề và nội dung bài viết
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [user_id, setUser_id] = useState('');
  const token = localStorage.getItem(Storagekey);

  // Hàm xử lý khi người dùng nhấn nút Thêm bài viết
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://192.168.1.9:5000/blog/create/',
        { title, content, user_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      alert('Thêm bài viết thành công!');
      setTitle('');
      setContent('');
    } catch (error) {
      console.log(error);
      alert('Thêm bài viết thất bại!');
    }
  };
  return (
    <form
      className="w-full max-w-lg mx-auto mt-4 mt-20"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="title"
          >
            Tên bài viết
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="title"
            name="title"
            type="text"
            placeholder="Nhập tiêu đề bài viết"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="content"
          >
            Nội dung
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500"
            id="content"
            name="content"
            rows="10"
            placeholder="Nhập nội dung bài viết"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="user_id"
          >
            Mã User
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="user_id"
            name="user_id"
            type="text"
            placeholder="Nhập mã user"
            value={user_id}
            onChange={(e) => setUser_id(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Thêm bài viết
          </button>
        </div>
      </div>
    </form>
  );
}

export default Them;