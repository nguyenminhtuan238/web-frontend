import React, { useState } from 'react';
import { SnackbarProvider } from 'notistack';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Forget = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  // const handleInputChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Email: ', email);
  //   // Gửi yêu cầu đặt lại mật khẩu tới server
  //   // Hiển thị thông báo đăng nhập thành công
  //   enqueueSnackbar('Gửi yêu cầu thành công', {
  //     variant: 'success',
  //     autoHideDuration: 3000, // tự động đóng sau 3 giây
  //   });
  // };

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Email không hợp lệ')
          .required('Bắt buộc nhập'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        console.log(values);
        enqueueSnackbar('Yêu cầu thành công!', {
          variant: 'success',
          autoHideDuration: 1000,
        });
        setTimeout(() => {
          navigate('/');
        }, 1000);
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
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Quên Mật Khẩu
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <Link
                to="/Register"
                className="font-medium text-indigo-600 hover:text-indigo-500 text-red-300"
              >
                <b>Bạn chưa đăng ký tài khoản?</b>
              </Link>
            </p>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mb-28">
            <div className="bg-white py-1 px-4 shadow sm:rounded-lg sm:px-10 mb-26">
              <form className=" space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md py-6 shadow-sm -space-y-px-10">
                  <div className="form-outline mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email đăng nhập
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

                  <div className="py-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Đặt lại mật khẩu
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default () => (
  <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
    <Forget />
  </SnackbarProvider>
);
