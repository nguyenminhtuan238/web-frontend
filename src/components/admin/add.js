import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { addArt } from '../../store/Article';
import { useNavigate } from 'react-router';
function Them() {
  // Khai báo các biến trạng thái cho tiêu đề và nội dung bài viết
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const admin = useSelector((state) => state.User);
  const [user_id, setUser_id] = useState('');
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [selectedFile, setSelectedFile] = useState(null);
  const naviagate = useNavigate();
  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  useEffect(() => {
    if (!admin.admin) {
      naviagate('/admin/login');
    }
  }, [admin, naviagate]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = dispatch(
        addArt({ title, content, user_id, img: selectedFile })
      );
      const Art = unwrapResult(response);
      enqueueSnackbar('thêm thành công', {
        variant: 'success',
        autoHideDuration: 1200,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
      naviagate('/admin');
      return Art;
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, {
        variant: 'error',
        autoHideDuration: 1200,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
    }
  };
  return (
    <form
      className="w-full max-w-lg mx-auto mt-4 mt-20"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <h1 className="uppercase mb-8 font-bold text-center">
            Thêm Bài Viết Mới
          </h1>
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
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="fileInput"
          >
            Chọn Hình
          </label>
          <input
            id="fileInput"
            type="file"
            className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="user_id"
          >
            Mã Admin
          </label>
          <select
            className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="user_id"
            name="user_id"
            type="text"
            placeholder="Nhập mã user"
            value={user_id}
            onChange={(e) => setUser_id(e.target.value)}
          >
            <option value="">-- Chọn Mã Admin --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
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
