import React, { memo, useEffect, useRef, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setmodal } from '../../store/hidden';
import { LoginUser } from '../../store/auth';
import { unwrapResult } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { ban, timeban } from '../../unilt/key';
const Login = () => {
  const [count, setCount] = useState(
    Cookies.get(ban) ? parseInt(Cookies.get(ban)) : 0
  );
  const [time, settimeban] = useState(0);
  const [futute, setfutute] = useState(
    Cookies.get('now')
      ? new Date().getTime() - parseInt(Cookies.get('now'))
      : new Date().getTime()
  );
  const { enqueueSnackbar } = useSnackbar();
  const clean = useRef(null);
  const dispatch = useDispatch();
  console.log(futute);
  // console.log((new Date().getTime()-parseInt(Cookies.get("now"))))
  useEffect(() => {
    if (Cookies.get(timeban)) {
      clean.current = setInterval(async () => {
        // console.log(parseInt(Cookies.get(timeban)))

        await Cookies.set(
          timeban,
          parseInt(Cookies.get(timeban)) === 0
            ? 0
            : parseInt(Cookies.get(timeban)) - 1000
        );
        settimeban(time === 0 ? 0 : time - 1000);
        setfutute(new Date().getTime() - parseInt(Cookies.get('now')));
        //  console.log(Cookies.get(timeban)/1000)
        if (parseInt(Cookies.get(timeban)) === 0) {
          settimeban(0);
          setCount(0);
          clearInterval(clean.current);
          await Cookies.remove(timeban);
          await Cookies.remove(ban);
          setfutute(0);
          console.log(Cookies.get(timeban));
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
        const res = await dispatch(LoginUser(values));
        const user = unwrapResult(res);
        if (user !== undefined) {
          enqueueSnackbar('Đăng nhập thành công', {
            variant: 'success',
            autoHideDuration: 1200,
            anchorOrigin: { vertical: 'top', horizontal: 'right' },
          });
          dispatch(setmodal());
        }
      } catch (error) {
        enqueueSnackbar(error.message, {
          variant: 'error',
          autoHideDuration: 1200,
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
        });
        setCount(count + 1);
      }
    } else {
      await Cookies.set(ban, count);
      await Cookies.set(timeban, 3000);
      await Cookies.set('now', new Date().getTime());
      enqueueSnackbar('Đăng Nhập Quá số lần quay lại sau 3 phút', {
        variant: 'error',
        autoHideDuration: 1200,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
      // console.log(parseInt(Cookies.get(timeban))-1000)
      // console.log(parseInt(Cookies.get(timeban))===0)
      // setInterval(() => {

      settimeban(parseInt(Cookies.get(timeban)));
      // }, 1000);
      // setTimeout(() => {
      //   Cookies.remove(ban)
      //   setCount(0)
      // },30000 );
    }
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Email không hợp lệ')
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
                Đăng Nhập Tài Khoản
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                <Link
                  className="font-medium text-indigo-600 hover:text-indigo-500 text-red-300"
                  to="/"
                >
                  <b onClick={() => dispatch(setmodal())}>Quay lại</b>
                </Link>
              </p>
            </div>
            <div className="">
              <form className=" space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md py-6 shadow-sm -space-y-px-10">
                  <div className="form-outline mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tài khoản đăng nhập
                    </label>

                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onBlur={handleBlur}
                        value={values.email}
                        // onChange={(e) => setEmail(e.target.value)}
                        onChange={handleChange}
                        required
                        placeholder="my@gmail.com"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.email && touched.email && (
                        <p className="text-red-500">{errors.email}</p>
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

                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember_me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Ghi nhớ đăng nhập
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between ">
                  <div className="text-sm">
                    <Link
                      to="/Register"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() => dispatch(setmodal())}
                    >
                      <b>Bạn chưa đăng ký tài khoản?</b>
                    </Link>
                  </div>

                  <div className="text-sm">
                    <Link
                      to="/Forget"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() => dispatch(setmodal())}
                    >
                      <b>Quên mật khẩu?</b>
                    </Link>
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

export default Login;
