import { Link } from "react-router-dom"
const Directory=()=>{
    return(
        <div className="max-w-screen-2xl absolute  mx-auto px-4 sm:px-6 lg:px-8 border-b-4 border-indigo-500  animate-slideDown z-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1 ml-[150px]">
            <ul className="text-gray-400 mt-4 cursor-pointer">
              <li>
                <Link className="line-clamp-1 text-black dark:text-white  hover:bg-gray-300 focus:bg-4 focus:bg-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-1 lg:py-1 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                  Nấm
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-4 col-span-2 mt-4 mb-4">
            <div className="hover:bg-gray-300">
              <img
                className="object-contain w-[250px] h-[150px]"
                src="https://static.developer.sony.com/images/image/v6/s3/uploads/2017/07/Open-Devices-Header-5.6.jpg?size=225x170&v=784&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzcmMiOiIvdXBsb2Fkcy8yMDE3LzA3L09wZW4tRGV2aWNlcy1IZWFkZXItNS42LmpwZyIsImFsdF90ZXh0IjoiT3BlbiBEZXZpY2VzIEhlYWRlciA1LjYiLCJpbWFnZV9pZCI6Ijc4NCIsInNlcnZpY2UiOiJhd3MtczMiLCJhd3NfYnVja2V0Ijoic29ueWR3LXByb2Qtc3RhdGljLWFzc2V0cyIsImZvY3VzIjp7IngiOjAuNSwieSI6MC41fSwid2hpdGVsaXN0U2l6ZXMiOlsiMTIwMHhBVVRPIiwiMTAweDY1IiwiMTAweEFVVE8iLCIxMTB4ODIiLCI3NTB4QVVUTyIsIjEwMDB4QVVUTyIsIjEyMDB4QVVUTyIsIjEyMDB4ODAwIiwiMTkyMHhBVVRPIiwiMTkyMHgxMDAwIiwiMjAweDE1MCIsIjIyNXgxNzAiLCIyMjV4QVVUTyIsIjIyOXgzMDAiLCIzNjh4QVVUTyIsIjQ1MHgzNDAiLCI1MDB4QVVUTyIsIjc1MHg1MDAiLCI3eDEwIiwiN3gxMiIsIjd4MTYiLCI3eDMiLCI3eDQiLCI3eDUiLCI3eDYiLCI3eDciLCI3eDgiLCI3eDkiXSwiaW1hZ2VWZXJzaW9uIjoidjYiLCJleHAiOjE5MDQ2ODgwMDAwMDB9.dJ3lxb1l_rIV2YhYU1CztQVxCeiEGRq4xyOp_qwTErM"
                alt="Hình lỗi"
              />
              <p className="ml-2 font-semibold">Nấm mối</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Directory