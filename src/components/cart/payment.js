dimport { useState } from 'react';
import { provinces } from 'vietnam-provinces';

function PaymentPage() {
  const [selectedOption, setSelectedOption] = useState('');
  const [country_id, setCountry_id] = useState('');
  const [street, setStreet] = useState('');
  const [telephone, setTelephone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Country_id:', country_id);
    console.log('Street:', street);
    console.log('Telephone:', telephone);
    console.log('Postcode:', postcode);
    console.log('City:', city);
    console.log('Firstname:', firstname);
    console.log('Lastname:', lastname);
    console.log('Email:', email);
    // Add code to process the payment here
  }; 

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

//   const handleNewInformation = () => {
//     // window.location.href = '/payment';
//   };

  return (
    <div >
      <h1 className="my-5 text-3xl font-bold text-center sm:w-full">
            Thông Tin Thanh Toán
      </h1>

      {/* Lấy thông tin hiện có */}

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
        {selectedOption === 'existing-information' && (
            <div className="max-w-6xl mx-auto">
            <form onSubmit={handleSubmit} className="sm:ml-[300px] sm:mr-[300px] pb-1 pl-4 pr-4 mb-4 pt-2 shadow-2xl">
    
            <div className="block mb-8">
              <h1 className="font-bold mb-4">
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
    
            <button
              className="w-full sm:w-[505px] px-4 py-2 mb-8 block font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Thanh Toán
            </button>
          </form>
          </div>
        )}
      </div>

      {/* Phần Thêm Thông tin */}

      <div>
        <label  className="flex items-center justify-center w-screen mr-4 mb-2">
          <input
            type="radio"
            value="new-information"
            checked={selectedOption === 'new-information'}
            onChange={handleOptionChange}
            // onClick={handleNewInformation}
            className="mr-2 "
          />
          Thêm thông tin mới
        </label>
        {selectedOption === 'new-information' && (
            <div className="max-w-6xl mx-auto">
            <form onSubmit={handleSubmit} className="sm:ml-[300px] sm:mr-[290px] pb-1 pl-4 pr-4  pt-2 shadow-2xl">
        
                <label className=" mb-2 mr-4 font-bold text-gray-700" htmlFor="firstname">
                Họ:
                </label>
                <input
                className="w-full sm:w-[200px] px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="firstname"
                type="text"
                placeholder="Enter your firstname"
                value={firstname}
                onChange={(event) => setFirstname(event.target.value)}
                />
        
                <label className=" mb-2 mr-4 ml-4 font-bold text-gray-700" htmlFor="lastname">
                Tên:
                </label>
                <input
                className="w-full sm:w-[200px] px-3 py-2 mb-5 mr-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="lastname"
                type="text"
                placeholder="Enter your lastname"
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
                />
        
                <label className=" block mb-2 font-bold text-gray-700" htmlFor="street">
                Tên đường:
                </label>
                <input
                className="w-full sm:w-[505px] block px-3 py-2 mb-10 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="street"
                type="text"
                placeholder="Enter your street"
                value={street}
                onChange={(event) => setStreet(event.target.value)}
                />
                
                <label className=" mb-2 mr-4 font-bold text-gray-700" htmlFor="city">
                Thành phố:
                </label>
                <select
                className=" w-full sm:w-[150px] px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                >
                <option value="">Chọn thành phố </option>
                {provinces.map((province) => (
                    <option key={province.code} value={province.name}>
                    {province.name}
                    </option>
                ))}
                </select>
                
                <label className=" mb-2 ml-4 mr-4 font-bold text-gray-700" htmlFor="country_id">
                Quốc gia:
                </label>
                <select
                className="w-full sm:w-[150px] px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="country_id"
                value={country_id}
                onChange={(event) => setCountry_id(event.target.value)}
                >
                <option value=""> Chọn quốc gia </option>
                <option value="VN"> Việt Nam </option>
                </select>
        
                <label className="block mb-2 font-bold text-gray-700" htmlFor="telephone">
                Số điện thoại:
                </label>
                <input
                className="w-full sm:w-[505px] px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="telephone"
                type="text"
                placeholder="Enter your telephone"
                value={telephone}
                onChange={(event) => setTelephone(event.target.value)}
                />
                
                <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
                Email:
                </label>
                <input
                className="w-full sm:w-[505px] px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                className="w-full sm:w-[505px] px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="postcode"
                type="text"
                placeholder="Enter your number postcode"
                value={postcode}
                onChange={(event) => setPostcode(event.target.value)}
                />
        
                <div className="block mb-8">
                <h1 className="font-bold">
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
        
                <button
                className="w-full sm:w-[505px] px-4 py-2 mb-8 block font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
                >
                Thanh Toán
                </button>
            </form>
            </div>
        )} 
      </div>
    </div>
  );
}
export default PaymentPage