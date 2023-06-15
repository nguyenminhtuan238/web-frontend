import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { getidArt, updateArt } from '../../store/Article';
import { StorageAdminkey } from '../../unilt/key';
function UpdateBlog() {
  // Khai báo các biến trạng thái cho tiêu đề và nội dung bài viết
  const Art = useSelector((state) => state.Art);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blog_id, setBlog_id] = useState('');
  const dispatch = useDispatch();
  const getid = useParams();
  const naviagate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [selectedFile, setSelectedFile] = useState(null);
  const handleChange = (event) => {
    localStorage.setItem(StorageAdminkey,"asdsadasd")
    setSelectedFile(event.target.files[0]);
  };
  useEffect(() => {
    async function getArt() {
      try {
        const res = await dispatch(getidArt(getid.id));
        const Art = unwrapResult(res);
        setTitle(Art[0].title);
        setContent(Art[0].content);
        setBlog_id(Art[0].blog_id);
      } catch (error) {
        console.log(error);
      }
    }
    getArt();
  }, [dispatch, getid.id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedFile);
    try {
      const data = { title, content, blog_id, img: selectedFile };
      await dispatch(updateArt(data));
      enqueueSnackbar('cập nhật thành công', {
        variant: 'success',
        autoHideDuration: 1200,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
      naviagate('/admin');
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
    <div>
      {Art.loadingArt ? (
        'ádasd'
      ) : (
        <form
          className="w-full max-w-lg mx-auto mt-4 mt-20"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
            <h1 className="uppercase mb-8 font-bold text-center">Cập nhật Viết Mới</h1>
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
                htmlFor="blog_id"
              >
                Mã Blog
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="blog_id"
                name="blog_id"
                type="text"
                value={blog_id}
                disabled
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Cập nhật bài viết
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default UpdateBlog;
