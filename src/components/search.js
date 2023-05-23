import { setIsSearch } from '../store/hidden';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
const Search=()=>{
    const dispatch = useDispatch()
    return (
                 <div className="min-h-screen bg-gray-100 flex flex-col justify-center   py-12 sm:px-6 lg:px-8 fixed inset-0  bg-opacity-30 backdrop-blur-sm z-50  ">
          <div className=" w-[640px] bg-gray-100  animate-slideRight min-h-screen ml-auto  absolute top-0 right-0 z-50 shadow-lg " style={{boxShadow: '0 0 1000px rgba(0, 0, 0,0.5)'}}>
            <div className="absolute top-[0px] right-[0px] modal bg-gray-100 p-8">
              <Link onClick={() =>  dispatch(setIsSearch())} className="cursor-pointer">close</Link>  
            </div>
            <div className=" absolute mx-auto text-gray-600 top-[80px] right-[50px] w-[550px]">
              
              <form className="flex items-center">   
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required></input>
                </div>
                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
              </form>
            </div>
          </div>
          </div>
    )
}   
export default Search