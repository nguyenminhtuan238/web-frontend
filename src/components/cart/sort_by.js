import { useState } from 'react';
import { Link } from 'react-router-dom';

function SortBy() {
    
    return (
        <div className=" w-screen bg-white border-t-2 border-b-2 h-[64px] flex items-center rounded-t-lg">
           <h1 className="ml-8 font-bold"> Sắp xếp theo</h1>
           <Link to="#">
                <button
                    type="submit"
                    className="h-[38px] w-[150px] border-2 ml-16 mr-4 rounded-lg border-blue-200 border-transparent text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Khuyến mại tốt nhất
                </button> 
            </Link>
            <Link to="#">
                <button
                    type="submit"
                    className="h-[38px] w-[150px] border-2 mr-4 rounded-lg border-blue-200 border-transparent text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Khuyến mại tốt nhất
                </button> 
            </Link>
            <Link to="#">
                <button
                    type="submit"
                    className="h-[38px] w-[150px] border-2 mr-4 rounded-lg border-blue-200 border-transparent text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Khuyến mại tốt nhất
                </button> 
            </Link>
            <Link to="#">
                <button
                    type="submit"
                    className="h-[38px] w-[150px] border-2 mr-4 rounded-lg border-blue-200 border-transparent text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Khuyến mại tốt nhất
                </button> 
            </Link>
            <Link to="#">
                <button
                    type="submit"
                    className="h-[38px] w-[150px] border-2 mr-4 rounded-lg border-blue-200 border-transparent text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Khuyến mại tốt nhất
                </button> 
            </Link>
        </div>
    )
}
export default SortBy