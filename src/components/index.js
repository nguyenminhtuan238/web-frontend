import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setScroll } from '../store/hidden';
const Home = () => {
  // const [scrollTop, setScrollTop] = useState(0);
  const myElementRef = useRef(null);
  const dispatch = useDispatch();
  const handle = () => {
    var crollw = window.scrollY;
    if (crollw > myElementRef.current.offsetHeight) {
      dispatch(setScroll(true));
    } else {
      dispatch(setScroll(false));
    }
  };
  return (
    <div onScroll={handle}>
      <img
        src="https://static.developer.sony.com/images/image/v6/s3/uploads/2020/03/Header_DeveloperWorld_200311.2.jpg?size=1920xAUTO&v=791457&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb2N1cyI6eyJ4IjowLjUsInkiOjAuNX0sInNyYyI6Ii91cGxvYWRzLzIwMjAvMDMvSGVhZGVyX0RldmVsb3BlcldvcmxkXzIwMDMxMS4yLmpwZyIsImFsdF90ZXh0IjoiRGV2ZWxvcGVyIFdvcmxkIiwiaW1hZ2VfaWQiOjc5MTQ1Nywic2VydmljZSI6ImF3cy1zMyIsImF3c19idWNrZXQiOiJzb255ZHctcHJvZC1zdGF0aWMtYXNzZXRzIiwid2hpdGVsaXN0U2l6ZXMiOlsiMTIwMHhBVVRPIiwiMTAweDY1IiwiMTAweEFVVE8iLCIxMTB4ODIiLCI3NTB4QVVUTyIsIjEwMDB4QVVUTyIsIjEyMDB4QVVUTyIsIjEyMDB4ODAwIiwiMTkyMHhBVVRPIiwiMTkyMHgxMDAwIiwiMjAweDE1MCIsIjIyNXgxNzAiLCIyMjV4QVVUTyIsIjIyOXgzMDAiLCIzNjh4QVVUTyIsIjQ1MHgzNDAiLCI1MDB4QVVUTyIsIjc1MHg1MDAiLCI3eDEwIiwiN3gxMiIsIjd4MTYiLCI3eDMiLCI3eDQiLCI3eDUiLCI3eDYiLCI3eDciLCI3eDgiLCI3eDkiXSwiaW1hZ2VWZXJzaW9uIjoidjYiLCJleHAiOjE5MDQ2ODgwMDAwMDB9.OVrjgUYbit6x0V84to2JncZXgdM1T9z25pC-I3b6bAs"
        alt="Lỗi hình"
        ref={myElementRef}
      />
      <header className="w-full sticky top-0 z-10">
        <nav className="flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div>
              <a
                className="text-xl text-neutral-800 dark:text-neutral-200"
                href="#!"
              >
                Navbar
              </a>
            </div>
          </div>
        </nav>
      </header>
      <img
        src="https://static.developer.sony.com/images/image/v6/s3/uploads/2020/03/Header_DeveloperWorld_200311.2.jpg?size=1920xAUTO&v=791457&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb2N1cyI6eyJ4IjowLjUsInkiOjAuNX0sInNyYyI6Ii91cGxvYWRzLzIwMjAvMDMvSGVhZGVyX0RldmVsb3BlcldvcmxkXzIwMDMxMS4yLmpwZyIsImFsdF90ZXh0IjoiRGV2ZWxvcGVyIFdvcmxkIiwiaW1hZ2VfaWQiOjc5MTQ1Nywic2VydmljZSI6ImF3cy1zMyIsImF3c19idWNrZXQiOiJzb255ZHctcHJvZC1zdGF0aWMtYXNzZXRzIiwid2hpdGVsaXN0U2l6ZXMiOlsiMTIwMHhBVVRPIiwiMTAweDY1IiwiMTAweEFVVE8iLCIxMTB4ODIiLCI3NTB4QVVUTyIsIjEwMDB4QVVUTyIsIjEyMDB4QVVUTyIsIjEyMDB4ODAwIiwiMTkyMHhBVVRPIiwiMTkyMHgxMDAwIiwiMjAweDE1MCIsIjIyNXgxNzAiLCIyMjV4QVVUTyIsIjIyOXgzMDAiLCIzNjh4QVVUTyIsIjQ1MHgzNDAiLCI1MDB4QVVUTyIsIjc1MHg1MDAiLCI3eDEwIiwiN3gxMiIsIjd4MTYiLCI3eDMiLCI3eDQiLCI3eDUiLCI3eDYiLCI3eDciLCI3eDgiLCI3eDkiXSwiaW1hZ2VWZXJzaW9uIjoidjYiLCJleHAiOjE5MDQ2ODgwMDAwMDB9.OVrjgUYbit6x0V84to2JncZXgdM1T9z25pC-I3b6bAs"
        alt="Lỗi hình"
      />
      <h1>Trang Chu</h1>
      <img
        src="https://static.developer.sony.com/images/image/v6/s3/uploads/2020/03/Header_DeveloperWorld_200311.2.jpg?size=1920xAUTO&v=791457&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb2N1cyI6eyJ4IjowLjUsInkiOjAuNX0sInNyYyI6Ii91cGxvYWRzLzIwMjAvMDMvSGVhZGVyX0RldmVsb3BlcldvcmxkXzIwMDMxMS4yLmpwZyIsImFsdF90ZXh0IjoiRGV2ZWxvcGVyIFdvcmxkIiwiaW1hZ2VfaWQiOjc5MTQ1Nywic2VydmljZSI6ImF3cy1zMyIsImF3c19idWNrZXQiOiJzb255ZHctcHJvZC1zdGF0aWMtYXNzZXRzIiwid2hpdGVsaXN0U2l6ZXMiOlsiMTIwMHhBVVRPIiwiMTAweDY1IiwiMTAweEFVVE8iLCIxMTB4ODIiLCI3NTB4QVVUTyIsIjEwMDB4QVVUTyIsIjEyMDB4QVVUTyIsIjEyMDB4ODAwIiwiMTkyMHhBVVRPIiwiMTkyMHgxMDAwIiwiMjAweDE1MCIsIjIyNXgxNzAiLCIyMjV4QVVUTyIsIjIyOXgzMDAiLCIzNjh4QVVUTyIsIjQ1MHgzNDAiLCI1MDB4QVVUTyIsIjc1MHg1MDAiLCI3eDEwIiwiN3gxMiIsIjd4MTYiLCI3eDMiLCI3eDQiLCI3eDUiLCI3eDYiLCI3eDciLCI3eDgiLCI3eDkiXSwiaW1hZ2VWZXJzaW9uIjoidjYiLCJleHAiOjE5MDQ2ODgwMDAwMDB9.OVrjgUYbit6x0V84to2JncZXgdM1T9z25pC-I3b6bAs"
        alt="Lỗi hình"
      />
      <h1>Trang Chu</h1>
      <img
        src="https://static.developer.sony.com/images/image/v6/s3/uploads/2020/03/Header_DeveloperWorld_200311.2.jpg?size=1920xAUTO&v=791457&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb2N1cyI6eyJ4IjowLjUsInkiOjAuNX0sInNyYyI6Ii91cGxvYWRzLzIwMjAvMDMvSGVhZGVyX0RldmVsb3BlcldvcmxkXzIwMDMxMS4yLmpwZyIsImFsdF90ZXh0IjoiRGV2ZWxvcGVyIFdvcmxkIiwiaW1hZ2VfaWQiOjc5MTQ1Nywic2VydmljZSI6ImF3cy1zMyIsImF3c19idWNrZXQiOiJzb255ZHctcHJvZC1zdGF0aWMtYXNzZXRzIiwid2hpdGVsaXN0U2l6ZXMiOlsiMTIwMHhBVVRPIiwiMTAweDY1IiwiMTAweEFVVE8iLCIxMTB4ODIiLCI3NTB4QVVUTyIsIjEwMDB4QVVUTyIsIjEyMDB4QVVUTyIsIjEyMDB4ODAwIiwiMTkyMHhBVVRPIiwiMTkyMHgxMDAwIiwiMjAweDE1MCIsIjIyNXgxNzAiLCIyMjV4QVVUTyIsIjIyOXgzMDAiLCIzNjh4QVVUTyIsIjQ1MHgzNDAiLCI1MDB4QVVUTyIsIjc1MHg1MDAiLCI3eDEwIiwiN3gxMiIsIjd4MTYiLCI3eDMiLCI3eDQiLCI3eDUiLCI3eDYiLCI3eDciLCI3eDgiLCI3eDkiXSwiaW1hZ2VWZXJzaW9uIjoidjYiLCJleHAiOjE5MDQ2ODgwMDAwMDB9.OVrjgUYbit6x0V84to2JncZXgdM1T9z25pC-I3b6bAs"
        alt="Lỗi hình"
      />
      <h1>Trang Chu</h1>
      <img
        src="https://static.developer.sony.com/images/image/v6/s3/uploads/2020/03/Header_DeveloperWorld_200311.2.jpg?size=1920xAUTO&v=791457&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb2N1cyI6eyJ4IjowLjUsInkiOjAuNX0sInNyYyI6Ii91cGxvYWRzLzIwMjAvMDMvSGVhZGVyX0RldmVsb3BlcldvcmxkXzIwMDMxMS4yLmpwZyIsImFsdF90ZXh0IjoiRGV2ZWxvcGVyIFdvcmxkIiwiaW1hZ2VfaWQiOjc5MTQ1Nywic2VydmljZSI6ImF3cy1zMyIsImF3c19idWNrZXQiOiJzb255ZHctcHJvZC1zdGF0aWMtYXNzZXRzIiwid2hpdGVsaXN0U2l6ZXMiOlsiMTIwMHhBVVRPIiwiMTAweDY1IiwiMTAweEFVVE8iLCIxMTB4ODIiLCI3NTB4QVVUTyIsIjEwMDB4QVVUTyIsIjEyMDB4QVVUTyIsIjEyMDB4ODAwIiwiMTkyMHhBVVRPIiwiMTkyMHgxMDAwIiwiMjAweDE1MCIsIjIyNXgxNzAiLCIyMjV4QVVUTyIsIjIyOXgzMDAiLCIzNjh4QVVUTyIsIjQ1MHgzNDAiLCI1MDB4QVVUTyIsIjc1MHg1MDAiLCI3eDEwIiwiN3gxMiIsIjd4MTYiLCI3eDMiLCI3eDQiLCI3eDUiLCI3eDYiLCI3eDciLCI3eDgiLCI3eDkiXSwiaW1hZ2VWZXJzaW9uIjoidjYiLCJleHAiOjE5MDQ2ODgwMDAwMDB9.OVrjgUYbit6x0V84to2JncZXgdM1T9z25pC-I3b6bAs"
        alt="Lỗi hình"
      />
      <h1>Trang Chu</h1>
      <img
        src="https://static.developer.sony.com/images/image/v6/s3/uploads/2020/03/Header_DeveloperWorld_200311.2.jpg?size=1920xAUTO&v=791457&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb2N1cyI6eyJ4IjowLjUsInkiOjAuNX0sInNyYyI6Ii91cGxvYWRzLzIwMjAvMDMvSGVhZGVyX0RldmVsb3BlcldvcmxkXzIwMDMxMS4yLmpwZyIsImFsdF90ZXh0IjoiRGV2ZWxvcGVyIFdvcmxkIiwiaW1hZ2VfaWQiOjc5MTQ1Nywic2VydmljZSI6ImF3cy1zMyIsImF3c19idWNrZXQiOiJzb255ZHctcHJvZC1zdGF0aWMtYXNzZXRzIiwid2hpdGVsaXN0U2l6ZXMiOlsiMTIwMHhBVVRPIiwiMTAweDY1IiwiMTAweEFVVE8iLCIxMTB4ODIiLCI3NTB4QVVUTyIsIjEwMDB4QVVUTyIsIjEyMDB4QVVUTyIsIjEyMDB4ODAwIiwiMTkyMHhBVVRPIiwiMTkyMHgxMDAwIiwiMjAweDE1MCIsIjIyNXgxNzAiLCIyMjV4QVVUTyIsIjIyOXgzMDAiLCIzNjh4QVVUTyIsIjQ1MHgzNDAiLCI1MDB4QVVUTyIsIjc1MHg1MDAiLCI3eDEwIiwiN3gxMiIsIjd4MTYiLCI3eDMiLCI3eDQiLCI3eDUiLCI3eDYiLCI3eDciLCI3eDgiLCI3eDkiXSwiaW1hZ2VWZXJzaW9uIjoidjYiLCJleHAiOjE5MDQ2ODgwMDAwMDB9.OVrjgUYbit6x0V84to2JncZXgdM1T9z25pC-I3b6bAs"
        alt="Lỗi hình"
      />
      <h1>Trang Chu</h1>
    </div>
  );
};
export default Home;
