import React, { useEffect, useState } from "react";
import axios from "axios";


function Post(){
    const [post, setPost] = useState({});
    const [l, setl] = useState(true);
    useEffect(() => {
        axios
          .get(`http://192.168.1.9:5000/blog/detail/9`)
          .then(response=> {
            console.log(response.data)
            setPost(response.data.result);
            setl(false)
           
        })
          .catch((error) => console.log(error));
    },[]);

    return(
        <div className="max-w-6xl mx-auto">
            <h1 className="mx-2 my-[20px] text-3xl font-sans font-open-sans">Bài viết mới nhất</h1>
            {
            l?"lỗi":
            <div className="grid grid-cols-3 gap-4 ">
                <div>
                    <img className="mb-2 object-fill h-[200px] w-[400px]" src={"http://192.168.1.9/magento2/pub/media/catalog/blog/" + post[0].img} alt="Ảnh minh họa"/>
                    <p className="mx-5 text-gray-700 text-sm">{post[0].created_at}</p>
                    <p className="mx-5 text-base font-medium line-clamp-2">{post[0].content}</p>
                </div>
            </div>
            }
        </div>
    )
}

export default Post;