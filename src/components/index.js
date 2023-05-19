import { useEffect, useState } from 'react';

const Home = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scroll =
        window.innerHeight - document.getElementById('second').scrollTop;
      console.log(scroll);
      //console.log(window.scrollY)
    });
  }, []);

  return (
    <div>
      <img
        src="https://static.developer.sony.com/images/image/v6/s3/uploads/2020/03/Header_DeveloperWorld_200311.2.jpg?size=1920xAUTO&v=791457&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb2N1cyI6eyJ4IjowLjUsInkiOjAuNX0sInNyYyI6Ii91cGxvYWRzLzIwMjAvMDMvSGVhZGVyX0RldmVsb3BlcldvcmxkXzIwMDMxMS4yLmpwZyIsImFsdF90ZXh0IjoiRGV2ZWxvcGVyIFdvcmxkIiwiaW1hZ2VfaWQiOjc5MTQ1Nywic2VydmljZSI6ImF3cy1zMyIsImF3c19idWNrZXQiOiJzb255ZHctcHJvZC1zdGF0aWMtYXNzZXRzIiwid2hpdGVsaXN0U2l6ZXMiOlsiMTIwMHhBVVRPIiwiMTAweDY1IiwiMTAweEFVVE8iLCIxMTB4ODIiLCI3NTB4QVVUTyIsIjEwMDB4QVVUTyIsIjEyMDB4QVVUTyIsIjEyMDB4ODAwIiwiMTkyMHhBVVRPIiwiMTkyMHgxMDAwIiwiMjAweDE1MCIsIjIyNXgxNzAiLCIyMjV4QVVUTyIsIjIyOXgzMDAiLCIzNjh4QVVUTyIsIjQ1MHgzNDAiLCI1MDB4QVVUTyIsIjc1MHg1MDAiLCI3eDEwIiwiN3gxMiIsIjd4MTYiLCI3eDMiLCI3eDQiLCI3eDUiLCI3eDYiLCI3eDciLCI3eDgiLCI3eDkiXSwiaW1hZ2VWZXJzaW9uIjoidjYiLCJleHAiOjE5MDQ2ODgwMDAwMDB9.OVrjgUYbit6x0V84to2JncZXgdM1T9z25pC-I3b6bAs"
        alt="Lỗi hình"
      />
      <h1>Trang Chu</h1>
      <h2>Scroll Top: {scrollTop}</h2>
      <nav
        id="second"
        class="flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
      >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <div>
            <a class="text-xl text-neutral-800 dark:text-neutral-200" href="#!">
              Navbar
            </a>
          </div>
        </div>
      </nav>
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
