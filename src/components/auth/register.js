import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser } from '../../store/auth';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
const Register = () => {
  const Dispatch = useDispatch();
  const User = useSelector((state) => state.User);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  useEffect(() => {
    if (User.User) {
      navigate('/');
    }
  }, [User.User]);
  const handleSubmit = async (values) => {
    try {
      const response = await Dispatch(RegisterUser(values));
      unwrapResult(response);
      enqueueSnackbar('Đăng kí thành công', {
        variant: 'success',
        autoHideDuration: 1200,
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
      });
      navigate('/');
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
        autoHideDuration: 1200,
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
      });
    }
  };

  return (
    <Formik
      initialValues={{ firstname: '', lastname: '', email: '', password: '' }}
      validationSchema={Yup.object({
        firstname: Yup.string().required('Bắt buộc nhập'),
        lastname: Yup.string().required('Bắt buộc nhập'),
        email: Yup.string()
          .email('Email không hợp lệ')
          .required('Bắt buộc nhập'),
        password: Yup.string()
          .min(8, 'Mật khẩu cần ít nhất 8 ký tự')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
            'Mật khẩu phải bao gồm ít nhất một chữ cái viết hoa, một chữ cái viết thường, một chữ số và một ký tự đặc biệt'
          )
          .required('Bắt buộc nhập'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(false);

        handleSubmit(values);
        // values.firstname = '';
        // values.lastname = '';
        // values.password = '';
        // values.email = '';
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
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-2 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
              Đăng ký tài khoản
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Firstname
                  </label>
                  <div className="mt-1">
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      autoComplete="firstname"
                      onBlur={handleBlur}
                      value={values.firstname}
                      onChange={handleChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.firstname && touched.firstname && (
                      <p className="text-red-500">{errors.firstname}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Lastname
                  </label>
                  <div className="mt-1">
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      autoComplete="lastname"
                      onBlur={handleBlur}
                      value={values.lastname}
                      onChange={handleChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.lastname && touched.lastname && (
                      <p className="text-red-500">{errors.lastname}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      placeholder="my@gmail.com"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
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
                      onChange={handleChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.password && touched.password && (
                      <p className="text-red-500">{errors.password}</p>
                    )}
                  </div>
                </div>

                <div className="z-10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group  w-full flex justify-center  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Đăng ký
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
export default Register;
