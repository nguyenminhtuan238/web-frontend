import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setScroll } from '../store/hidden';
import { Outlet } from 'react-router-dom';
//import { defaultimg } from '../unilt/key';
const Home = () => {
  const myElementRef = useRef(null);
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.hidden);
  const [activeTab, setActiveTab] = useState(window.location.pathname);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      var crollw = window.scrollY;
      if (myElementRef.current) {
        if (crollw > myElementRef.current.offsetHeight) {
          dispatch(setScroll(true));
        } else {
          dispatch(setScroll(false));
          <video src="">

          </video>
        }
      }
    });
  }, [dispatch]);
  const handle = () => {
    console.log(window.location.pathname);
  };
  return (
    <div className="z-10">
      
        <video 
        src={require("./video/media2.mp4")} autoPlay loop muted controls
        className="object-fill w-screen h-[550px] "
          ref={myElementRef}
          id="Scroll"
          onClick={handle}
      />
      
      <header
        className={`w-full ${
          hidden.changscroll ? 'sticky top-0' : ''
        }  sm:hidden lg:block bg-white`}
      >
        
        <nav className="flex  flex-wrap items-center p-5 justify-between mx-auto   max-w-screen-xl  ">
          <div>
            <ul className="list-none p-2 m-0 flex overflow-x-auto flex justify-between">
              <li
                className={`mr-4 text-zinc-600  ${
                  activeTab === '/SP' ? 'font-bold' : ''
                }`}
              >
                <Link
                  to="/SP"
                  className={
                    activeTab === '/SP'
                      ? 'border-b-[4px] border-indigo-600 '
                      : 'hover:border-b-[4px] border-Gray-900'
                  }
                  onClick={() => setActiveTab('/SP')}
                >
                  Sản phẩm
                </Link>
              </li>

              <li
                className={`mr-4 text-zinc-600  ${
                  activeTab === '/ALL' ? 'font-bold' : ''
                }`}
              >
                <Link
                  to="/ALL"
                  className={
                    activeTab === '/ALL'
                      ? 'border-b-[4px] border-indigo-600'
                      : 'hover:border-b-[4px] border-Gray-900'
                  }
                  onClick={() => setActiveTab('/ALL')}
                >
                  Tất cả các sản phẩm
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
