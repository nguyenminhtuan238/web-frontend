import { useState } from 'react';
import { provinces } from 'vietnam-provinces';
import { useDispatch, useSelector } from 'react-redux';
import { CartAddress, Checkout } from '../../store/cart';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';
function PaymentPage() {
  const [selectedOption, setSelectedOption] = useState('existing-information');
  const [countryId, setCountry_id] = useState('');
  const [street, setStreet] = useState('');
  const [telephone, setTelephone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const User = useSelector((state) => state.User);
  const [payment, setpayment] = useState('checkmo');
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate=useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(payment)
    try {
      if(selectedOption==='existing-information'){
        const data={
          firstname:User.User.firstname,
          lastname:User.User.lastname,
          countryId:User.User.addresses[0].country_id,
          street:User.User.addresses[0].street[0],
          city:User.User.addresses[0].city,
          telephone:User.User.addresses[0].telephone,
          postcode:User.User.addresses[0].postcode,
          email:User.User.email
        }
          await dispatch(CartAddress(data))
         const res=await dispatch(Checkout({method:payment}))
         const check=unwrapResult(res)
         enqueueSnackbar('Thanh Toán Thành Công', {
          variant: 'success',
          autoHideDuration: 1200,
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
        });
        navigate("/")
        return check
      }
      if(selectedOption==='new-information'){
        const data={
          firstname,
          lastname,
          countryId,
          street,
          city,
          telephone,
          postcode,
          email:User.User.email
        }
        await dispatch(CartAddress(data))
        const res=await dispatch(Checkout({method:payment}))
        const check=unwrapResult(res)
        enqueueSnackbar('Thanh Toán Thành Công', {
         variant: 'success',
         autoHideDuration: 1200,
         anchorOrigin: { vertical: 'top', horizontal: 'right' },
       });
       navigate("/")
       return check
      }  
    } catch (error) {
      console.log(error)
    }
   
  }; 

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div >
      <h1 className="my-5 text-3xl font-bold text-center sm:w-screen">
            Thông Tin Thanh Toán
      </h1>

      <div>
        <label className="flex items-center justify-center w-screen mb-2 ">
          <input
            type="radio"
            value="existing-information"
            checked={selectedOption === 'existing-information'}
            onChange={handleOptionChange}
            className="ml-2 mr-2"
          />
          Lấy thông tin hiện có
        </label>
        <label  className="flex items-center justify-center w-screen mb-2">
          <input
            type="radio"
            value="new-information"
            checked={selectedOption === 'new-information'}
            onChange={handleOptionChange}
            // onClick={handleNewInformation}
            className="mr-2 "
          />
          Nhập thông tin mới
        </label>

        {/* Lấy thông tin hiện có */}

        {selectedOption === 'existing-information' && (
            <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="pb-1 pl-4 pr-4 pt-2 shadow-2xl border-2 rounded-3xl">
    
            <div className="block mb-8">
              <h1 className="font-bold mb-2">
                Hình thức thanh toán
              </h1>
              <label className="block ml-2">
                <input type="radio" name="payment-method" value="checkmo "  onChange={(e)=>setpayment(e.target.value)}/>
                <span className="ml-2">checkmo</span>
              </label>
              <label className="block ml-2">
                <input type="radio" name="payment-method" value="purchaseorder" onChange={(e)=>setpayment(e.target.value)}/>
                <span className="ml-2">purchaseorder</span>
              </label>
              <label className="block ml-2">
                <input type="radio" name="payment-method" value="free" onChange={(e)=>setpayment(e.target.value)}/>
                <span className="ml-2">free</span>
              </label>
            </div>
            <div className="mx-auto flex justify-center">
              <button
              className="w-1/2  px-4 py-2 mb-8 mr-4 font-bold text-white bg-gray-700 rounded hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              type="submit"
              >
                Hủy
              </button>
              <button
                className="w-1/2  px-4 py-2 mb-8 font-bold text-white bg-blue-700 rounded hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Thanh Toán
              </button>
            </div>
            
          </form>
          </div>
        )}
      

      {/* Phần Nhập Thông tin mới */}

        {selectedOption === 'new-information' && (
            <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="pb-1 pl-4 pr-4 pt-2 mb-8 shadow-2xl border-2 rounded-3xl">
        
                <label className="block mb-2 font-bold text-gray-700" htmlFor="firstname">
                Họ:
                </label>
                <input
                className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="firstname"
                type="text"
                placeholder="Enter your firstname"
                value={firstname}
                onChange={(event) => setFirstname(event.target.value)}
                />
        
                <label className=" block mb-2 font-bold text-gray-700" htmlFor="lastname">
                Tên:
                </label>
                <input
                className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="lastname"
                type="text"
                placeholder="Enter your lastname"
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
                />
        
                <label className=" block mb-2 font-bold text-gray-700" htmlFor="street">
                Địa chỉ nhà:
                </label>
                <input
                className="w-full block px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="street"
                type="text"
                placeholder="Enter your street"
                value={street}
                onChange={(event) => setStreet(event.target.value)}
                />
                
                <label className="block mb-2 font-bold text-gray-700" htmlFor="city">
                Thành phố:
                </label>
                <select
                className=" w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                >
                {provinces.sort((a, b) => a.name.localeCompare(b.name)).map((province) => (
                  <option key={province.code} value={province.name}>
                    {province.name}
                  </option>
                ))}
                </select>
                
                <label className="block mb-2 font-bold text-gray-700" htmlFor="country_id">
                Quốc gia:
                </label>
                <select
                className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="country_id"
                value={countryId}
                onChange={(event) => setCountry_id(event.target.value)}
                >
                <option value=""> Chọn quốc gia </option>
                <option value="VN"> Việt Nam </option>
                </select>
        
                <label className="block mb-2 font-bold text-gray-700" htmlFor="telephone">
                Số điện thoại:
                </label>
                <input
                className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="telephone"
                type="tel"
                placeholder="Enter your telephone"
                value={telephone}
                onChange={(event) => setTelephone(event.target.value)}
                pattern="[0-9]*"
                />
                
                <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
                Email:
                </label>
                <input
                className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
        
                <label className="block mb-2 font-bold text-gray-700" htmlFor="postcode">
                Mã bưu điện:
                </label>
                <input
                className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="postcode"
                type="text"
                placeholder="Enter your number postcode"
                value={postcode}
                onChange={(event) => setPostcode(event.target.value)}
                />
        
                <div className="block mb-8">
                <h1 className="font-bold mb-2">
                    Hình thức thanh toán
                </h1>
                <label className="block ml-2">
                    <input type="radio" name="payment-method" value="cash"/>
                    <span className="ml-2">Thanh toán bằng tiền mặt</span>
                </label>
                <label className="block ml-2">
                    <input type="radio" name="payment-method" value="bank-transfer"/>
                    <span className="ml-2">Chuyển khoản ngân hàng</span>
                </label>
                <label className="block ml-2">
                    <input type="radio" name="payment-method" value="digital-wallet" />
                    <span className="ml-2">Ví điện tử</span>
                    
                </label>
                </div>
        
                <div className="mx-auto flex justify-center">
                  <button
                  className="w-1/2  px-4 py-2 mb-8 mr-4 font-bold text-white bg-gray-700 rounded hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  type="submit"
                  >
                    Hủy
                  </button>
                  <button
                    className="w-1/2  px-4 py-2 mb-8 font-bold text-white bg-blue-700 rounded hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Thanh Toán
                  </button>
                </div>
            </form>
            </div>
        )} 
      </div>
    </div>
  );
}
export default PaymentPage