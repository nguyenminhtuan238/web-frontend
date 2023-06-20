import React, { useEffect, useRef, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setmodal } from '../../store/hidden';
import { LoginAdmin } from '../../store/auth';
import { unwrapResult } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
const LoginAdminComponet = () => {
  const [count, setCount] = useState(
    Cookies.get('banadmin') ? parseInt(Cookies.get('banadmin')) : 0
  );
  const [time, setTimeban] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const clean = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookies.get('timebanadmin')) {
      clean.current = setInterval(async () => {
        setTimeban(
          time === 0 ? 0 : parseInt(Cookies.get('timebanadmin')) - 1000
        );
        if (
          new Date().getTime() - parseInt(Cookies.get('nowadmin')) >
          parseInt(Cookies.get('timebanadmin'))
        ) {
          Cookies.remove('banadmin');
          Cookies.remove('timebanadmin');
          Cookies.remove('nowadmin');
          //  Cookies.remove("settime");
          setTimeban(0);
          setCount(0);
          clearInterval(clean.current);
        }
      }, 1000);
    }
    return () => {
      clearInterval(clean.current);
    };
  }, [time]);
  const login = async (values) => {
    if (count !== 3) {
      try {
        const res = await dispatch(LoginAdmin(values));
        const Username = unwrapResult(res);
        enqueueSnackbar('Đăng nhập thành công', {
          variant: 'success',
          autoHideDuration: 1200,
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
        });
        dispatch(setmodal());
        navigate('/admin');
        return Username;
      } catch (error) {
        enqueueSnackbar(error.message, {
          variant: 'error',
          autoHideDuration: 1200,
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
        });
        setCount(count + 1);
      }
    } else {
      if (Cookies.get('banadmin')) {
        enqueueSnackbar(`Đăng Nhập Quá số lần quay lại sau 1 phút`, {
          variant: 'error',
          autoHideDuration: 1200,
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
        });
      } else {
        Cookies.set('banadmin', count);
        Cookies.set('timebanadmin', 60000);
        Cookies.set('nowadmin', new Date().getTime());
        enqueueSnackbar(`Đăng Nhập Quá số lần quay lại sau 1 phút`, {
          variant: 'error',
          autoHideDuration: 1200,
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
        });
        setTimeban(parseInt(Cookies.get('timebanadmin')));
      }
    }
  };
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string()
          .matches(/^[a-zA-Z0-9_]+$/, 'Username không hợp lệ')
          .required('Bắt buộc nhập'),
        password: Yup.string()
          .min(8, 'Password cần ít nhất 8 số')
          .required('Bắt buộc nhập'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(false);
        login(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center  py-12 sm:px-6 lg:px-8 fixed inset-0  bg-opacity-30 backdrop-blur-sm z-50  ">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mb-28 bg-white py-1 px-4 shadow sm:rounded-lg sm:px-10 mb-26 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md ">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Đăng Nhập Admin
              </h2>
            </div>
            <div className="">
              <form className=" space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md py-6 shadow-sm -space-y-px-10">
                  <div className="form-outline mb-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tài khoản Admin
                    </label>

                    <div className="mt-1">
                      <input
                        id="Username"
                        name="username"
                        type="Username"
                        autoComplete="Username"
                        onBlur={handleBlur}
                        value={values.username}
                        // onChange={(e) => setEmail(e.target.value)}
                        onChange={handleChange}
                        required
                        placeholder="admin name"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {touched.Username && (
                        <p className="text-red-500">{errors.Username}</p>
                      )}
                    </div>
                  </div>

                  <div className="form-outline mb-4 mt-6">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mật khẩu
                    </label>

                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        onBlur={handleBlur}
                        value={values.password}
                        // onChange={(e) => setPassword(e.target.value)}
                        onChange={handleChange}
                        required
                        placeholder="••••••••"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.password && touched.password && (
                        <p className="text-red-500">{errors.password}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="py-6 w-full flex justify-center  space-x-36 ">
                  <Link
                    type="submit"
                    onClick={() => dispatch(setmodal())}
                    className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 mr-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Thoát ra
                  </Link>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className=" py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default LoginAdminComponet;
