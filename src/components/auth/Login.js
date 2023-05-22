import React from 'react';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Login = ({ modal }) => {
  const { enqueueSnackbar } = useSnackbar(); // khởi tạo useSnackbar
  const navigate = useNavigate();

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Xử lý đăng nhập tại đây (gửi thông tin đăng nhập đến server)
  //   console.log(email, password);
  //   // Hiển thị thông báo đăng nhập thành công
  // };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Email không hợp lệ')
          .required('Bắt buộc nhập'),
        password: Yup.string()
          .min(6, 'Password cần ít nhất 6 số')
          .required('Bắt buộc nhập'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // registerAccount(values.name, values.email, values.password);
        //setSubmitting(false);
        console.log(values);
        if (values.email === 'a@gmail.com' && values.password === '123456') {
          console.log('ok');
          setSubmitting(false);
          enqueueSnackbar('Đăng nhập thành công!', {
            variant: 'success',
            autoHideDuration: 1000,
          });
          setTimeout(() => {
            navigate('/');
          }, 1000);
        }
        // enqueueSnackbar('Đăng nhập thành công!', {
        //   variant: 'success',
        //   autoHideDuration: 3000,
        // });
        //toast.success('Đăng ký thành công!');
        //navigate('/');
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
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center  py-12 sm:px-6 lg:px-8 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center ">
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
                  <b onClick={modal}>Quay lại</b>
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
                      onClick={modal}
                    >
                      <b>Bạn chưa đăng ký tài khoản?</b>
                    </Link>
                  </div>

                  <div className="text-sm">
                    <Link
                      to="/Forget"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={modal}
                    >
                      <b>Quên mật khẩu?</b>
                    </Link>
                  </div>
                </div>

                <div className="py-6 w-full flex justify-center  space-x-36 ">
                  <button
                    type="submit"
                    onClick={modal}
                    className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 mr-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Thoát ra
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className=" py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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