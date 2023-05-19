import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="text-6xl font-bold text-gray-700">404</div>
        <p className="text-2xl font-medium mt-4 mb-8">Page not found</p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Trang Chủ
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
