import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setScroll } from '../store/hidden';
import { Outlet } from 'react-router-dom';
const Home = () => {
  const myElementRef = useRef(null);
  const l = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(1);
  window.addEventListener('scroll', () => {
    var crollw = window.scrollY;
    if (myElementRef.current) {
      if (crollw > myElementRef.current.offsetHeight+20) {
        dispatch(setScroll(true));
      } else {
        dispatch(setScroll(false));
      }
    }
  });
  const handle = () => {
    console.log(l);
  };
  return (
    <div>
      <img
        src="https://static.developer.sony.com/images/image/v6/s3/uploads/2020/03/Header_DeveloperWorld_200311.2.jpg?size=1920xAUTO&v=791457&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb2N1cyI6eyJ4IjowLjUsInkiOjAuNX0sInNyYyI6Ii91cGxvYWRzLzIwMjAvMDMvSGVhZGVyX0RldmVsb3BlcldvcmxkXzIwMDMxMS4yLmpwZyIsImFsdF90ZXh0IjoiRGV2ZWxvcGVyIFdvcmxkIiwiaW1hZ2VfaWQiOjc5MTQ1Nywic2VydmljZSI6ImF3cy1zMyIsImF3c19idWNrZXQiOiJzb255ZHctcHJvZC1zdGF0aWMtYXNzZXRzIiwid2hpdGVsaXN0U2l6ZXMiOlsiMTIwMHhBVVRPIiwiMTAweDY1IiwiMTAweEFVVE8iLCIxMTB4ODIiLCI3NTB4QVVUTyIsIjEwMDB4QVVUTyIsIjEyMDB4QVVUTyIsIjEyMDB4ODAwIiwiMTkyMHhBVVRPIiwiMTkyMHgxMDAwIiwiMjAweDE1MCIsIjIyNXgxNzAiLCIyMjV4QVVUTyIsIjIyOXgzMDAiLCIzNjh4QVVUTyIsIjQ1MHgzNDAiLCI1MDB4QVVUTyIsIjc1MHg1MDAiLCI3eDEwIiwiN3gxMiIsIjd4MTYiLCI3eDMiLCI3eDQiLCI3eDUiLCI3eDYiLCI3eDciLCI3eDgiLCI3eDkiXSwiaW1hZ2VWZXJzaW9uIjoidjYiLCJleHAiOjE5MDQ2ODgwMDAwMDB9.OVrjgUYbit6x0V84to2JncZXgdM1T9z25pC-I3b6bAs"
        alt="Lỗi hình"
        ref={myElementRef}
        id="Scroll"
        onClick={handle}
      />
      <header className="w-full sticky top-0 z-10 sm:hidden lg:block bg-white ">
        <nav className="flex  flex-wrap items-center p-5 justify-between mx-auto   max-w-screen-xl  ">
          <div>
            <ul className="list-none p-2 m-0 flex overflow-x-auto flex justify-between">
              <li
                className={`mr-4 text-zinc-600  ${
                  activeTab === 1 ? 'font-bold' : ''
                }`}
              >
                <Link
                  to="/SP"
                  className={
                    activeTab === 1
                      ? 'border-b-[4px] border-indigo-600 '
                      : 'hover:border-b-[4px] border-Gray-900'
                  }
                  onClick={() => setActiveTab(1)}
                >
                  Product specifications
                </Link>
              </li>

              <li
                className={`mr-4 text-zinc-600  ${
                  activeTab === 2 ? 'font-bold' : ''
                }`}
              >
                <Link
                  to="/"
                  className={
                    activeTab === 2
                      ? 'border-b-[4px] border-indigo-600'
                      : 'hover:border-b-[4px] border-Gray-900'
                  }
                  onClick={() => setActiveTab(2)}
                >
                  Development guides
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default Home;
