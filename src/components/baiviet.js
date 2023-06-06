import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Baiviet() {
  const [post, setPost] = useState({});
  const [l, setl] = useState(true);
  useEffect(() => {
    axios
      .get(`http://192.168.1.9:5000/blog/detail/9`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data.result);
        setl(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="max-w-2xl mx-auto">
      {l ? (
        'lỗi'
      ) : (
        <div>
          <h1 className="text-3xl font-sans font-open-sans mb-4">{post[0].title}</h1>
          <p className="text-gray-700 text-sm mb-4">{post[0].created_at}</p>
          <img
            className="mb-4 object-fill h-[350px] w-[694px]"
            src={"http://192.168.1.9/magento2/pub/media/catalog/blog/" + post[0].img}
            alt="Ảnh minh họa"
          />
          <p className="text-sm leading-relaxed mb-4">{post[0].content}</p>
          <a href="#" className="text-blue-500 hover:underline">
            Đọc tiếp
          </a>
        </div>
      )}
    </div>
  );
}

export default Baiviet;
