import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteArt, getArt } from '../../store/Article';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { Logout } from '../../store/auth';
import { Artsimg, defaultimg } from '../../unilt/key';
function Admin() {
  const Art = useSelector((state) => state.Art);
  const admin = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const [cofirm, setconfirm] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const nav = useNavigate();
  const handleClose = () => {
    setconfirm(null);
  };
  const handleOpen = (blogId) => {
    setconfirm(blogId);
  };
  const handleDelete = () => {
    try {
      const res = dispatch(deleteArt(cofirm));
      const Art = unwrapResult(res);

      enqueueSnackbar('xóa thành công', {
        variant: 'success',
        autoHideDuration: 1200,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
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
  useEffect(() => {
    if (!admin.admin) {
      nav('/admin/login');
    }
  }, [admin, nav]);
  useEffect(() => {
    const get = async () => {
      await dispatch(getArt());
    };
    get();
  }, [dispatch]);
  return (
    <div className="w-screen">
      <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center lg:order-2">
            {/* <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> */}
            <Link
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              onClick={() => dispatch(Logout())}
              to="/admin/login"
            >
              Đăng xuất
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            ></button>
          </div>
          <div
            className="hidden justify-between items-center w-screen lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Quản lí bài viết
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <h1 className="mt-4 flex items-center justify-center w-screen font-bold text-3xl">
          Quản Lí Bài Viết
        </h1>
        <Link to="/add">
          <button
            type="submit"
            className="ml-16 mb-2 mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Thêm bài viết
          </button>
        </Link>
      </div>

      <div className="flex flex-col mt-4">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light ml-4 truncate w-5 overflow-hidden">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr className="bg-gray-400 text-center">
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Tên bài viết
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Hình ảnh bài viết
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Mô tả
                    </th>

                    <th scope="col" className="px-6 py-4">
                      Ngày đăng
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Quản lí
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Art.isLoading
                    ? 'ádasdasdasd'
                    : Art.Arts.map((blog) => {
                        return (
                          <tr
                            key={blog.blog_id}
                            className="border-b dark:border-neutral-500"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
                              {blog.blog_id}
                            </td>
                            <td className="whitespace-normal px-6 py-4 overflow-hidden line-clamp-5 max-w-[300px] min-w-[300px] max-h-[120px] ">
                              {blog.title}
                            </td>
                            <td className="whitespace-nowrap px-8 py-4 ">
                              <img
                                src={blog.img ? Artsimg + blog.img : defaultimg}
                                className="object-cover h-[100px] w-[100px]"
                                alt="Lỗi Hình"
                              />
                            </td>
                            <td className="whitespace-normal px-6 py-4 overflow-hidden line-clamp-5 max-w-[600px] min-w-[600px] max-h-[120px]  ">
                              {blog.content}
                            </td>

                            <td className="whitespace-nowrap px-6 py-4">
                              {new Date(blog.created_at).toLocaleDateString(
                                'vi-VN',
                                {
                                  day: '2-digit',
                                  month: '2-digit',
                                  year: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  second: '2-digit',
                                }
                              )}
                            </td>
                            {/* <td class="whitespace-nowrap px-6 py-4">23/5/2023</td> */}
                            <td className="mt-8 mb-8 whitespace-nowrap px-6 py-4 text-center">
                              <Link to={'/update/' + blog.blog_id}>
                                <button
                                  type="submit"
                                  className="mr-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-stone-200 hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Sửa
                                </button>
                              </Link>
                              <button
                                type="submit"
                                className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-900  mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={() => handleOpen(blog.blog_id)}
                              >
                                Xóa
                              </button>
                            </td>
                            <Dialog
                              open={cofirm === blog.blog_id}
                              onClose={handleClose}
                              aria-labelledby="alert-dialog-title"
                              aria-describedby="alert-dialog-description"
                            >
                              <DialogTitle id="alert-dialog-title">
                                {'Bạn thật sự muốn xóa?'}
                              </DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                  Bài viết sẽ bị mất vĩnh viễn bạn có thật muốn
                                  xóa?
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleClose}>Thoát</Button>
                                <Button onClick={handleDelete} autoFocus>
                                  Đồng ý
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
