import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
  const imageUrl = "https://static.developer.sony.com/images/image/v6/s3/uploads/2018/02/Spresense_Updated-header_FINAL_small.jpg?size=1920xAUTO&v=813572&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb2N1cyI6eyJ4IjowLjUsInkiOjAuNX0sInNyYyI6Ii91cGxvYWRzLzIwMTgvMDIvU3ByZXNlbnNlX1VwZGF0ZWQtaGVhZGVyX0ZJTkFMX3NtYWxsLmpwZyIsImFsdF90ZXh0IjoiU3ByZXNlbnNlIFVwZGF0ZWQgSGVhZGVyIEZJTkFMIFNtYWxsIiwiaW1hZ2VfaWQiOjgxMzU3Miwic2VydmljZSI6ImF3cy1zMyIsImF3c19idWNrZXQiOiJzb255ZHctcHJvZC1zdGF0aWMtYXNzZXRzIiwid2hpdGVsaXN0U2l6ZXMiOlsiMTIwMHhBVVRPIiwiMTAweDY1IiwiMTAweEFVVE8iLCIxMTB4ODIiLCI3NTB4QVVUTyIsIjEwMDB4QVVUTyIsIjEyMDB4QVVUTyIsIjEyMDB4ODAwIiwiMTkyMHhBVVRPIiwiMTkyMHgxMDAwIiwiMjAweDE1MCIsIjIyNXgxNzAiLCIyMjV4QVVUTyIsIjIyOXgzMDAiLCIzNjh4QVVUTyIsIjQ1MHgzNDAiLCI1MDB4QVVUTyIsIjc1MHg1MDAiLCI3eDEwIiwiN3gxMiIsIjd4MTYiLCI3eDMiLCI3eDQiLCI3eDUiLCI3eDYiLCI3eDciLCI3eDgiLCI3eDkiXSwiaW1hZ2VWZXJzaW9uIjoidjYiLCJleHAiOjE5MDQ2ODgwMDAwMDB9.nG8mW3nZ7dElpZNUt6u5n8ktc4vl_qHaNnrpIzPVMZs";
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="h-screen w-screen ">
      <img src={imageUrl} alt="Ảnh nền" className="sm:w-full md:w-full lg:w-full xl:w-full sm:h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px] "></img>
      
      <div className="mb-8 border-b-4 ">
        <ul class="list-none p-0 m-0 flex overflow-x-auto">
        <li className={`mr-4 ${activeTab === 1 ? 'font-bold' : ''}`}>
            <Link
                onClick={() => setActiveTab(1)}
            >
            Spresense
            </Link>
          </li>
          <li className={`mr-4 ${activeTab === 1 ? 'font-bold' : ''}`}>
            <Link
                onClick={() => setActiveTab(1)}
            >
            Product specifications
            </Link>
            
          </li>
          <li className={`mr-4 ${activeTab === 2 ? 'font-bold' : ''}`}>
            <Link 
                onClick={() => setActiveTab(2)}
            >
              Downloads
            </Link>
          </li>
          <li className={`mr-4 ${activeTab === 3 ? 'font-bold' : ''}`}>
            <Link 
                onClick={() => setActiveTab(3)}
            >
              Development guides
            </Link>
          </li>
          <li className="mx-4">
            Contact us
          </li>
          <li className="mx-4">
            Support
          </li>
          <li className="mx-4">
            News
          </li>
          <li className="mx-4">
            Buy Spresense
          </li>
          <li className="mx-4">
            Workshops & videos
          </li>
        </ul>
        
      </div>

      {activeTab === 1 && (
        <div className="p-4 bg-white">
          <h2 className="text-lg font-bold mb-2">Nội dung Tab 1</h2>
          <p>Đây là nội dung của Tab 1.</p>
        </div>
      )}
      {activeTab === 2 && (
        <div className="p-4 bg-white">
          <h2 className="text-lg font-bold mb-2">Nội dung Tab 2</h2>
          <p>Đây là nội dung của Tab 2.</p>
        </div>
      )}
      {activeTab === 3 && (
        
        <div className="p-4 bg-white">
          <Link to="/">
          
          </Link>
          <h2 className="text-lg font-bold mb-2">Nội dung Tab 3</h2>
          <p>Đây là nội dung của Tab 3.</p>
        </div>
      )}
    </div>
  );
};

export default Content;