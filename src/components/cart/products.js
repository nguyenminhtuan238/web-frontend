import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.9:5000/product/list')
      .then(response => {
        setProducts(response.data.product.items);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    <div className="product-list">
      <div className="product-grid">
        {/* Hiển thị danh sách sản phẩm */}
        {products.map((product) => (
          <Link to={`product/${product.id}`}>
            <div key={product.id} className="product-item">
              <div className="product-image">
                {/* Hiển thị ảnh sản phẩm */}
                <img
                  // src={product.custom_attributes.find(attr => attr.attribute_code === 'image').value}
                  src="http://192.168.1.9/magento2/pub/media/catalog/product/cache/80c6d82db34957c21ffe417663cf2776////m/o/modem_wifi_4_cong.jpg"
                  alt={product.name}
                />
              </div>

              {/* Hiển thị tên sản phẩm */}
              <div className="product-name">{product.name}</div>

              {/* Hiển thị giá sản phẩm */}
              <div className="product-price">{product.price} đ</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-centermt-8 mb-8">
        <Stack spacing={2}>
          <Pagination count={10} showFirstButton showLastButton />
          {/* <Pagination count={10} hidePrevButton hideNextButton /> */}
        </Stack>
      </div>
    </div>
  );
};

export default ProductsPage;