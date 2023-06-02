import React, { useEffect, useState } from "react";
import axios from "axios";


function Baiviet(){
    const [post, setPost] = useState({});

    useEffect(() => {
        axios
          .get(`http://192.168.1.9:5000/blog/detail/1`)
          .then(response=> {
            setPost(response.data.result);
            console.log(response.data.result)
        })
          .catch((error) => console.log(error));
    },[]);
    return(
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{post[0].title}</h1>
            <p className="text-gray-700 text-sm mb-4">{post[0].created_at}</p>
            <img className="mb-4 object-contain h-[400px] w-[694px]" src="https://static.developer.sony.com/images/image/v6/s3/uploads/2022/05/Foto_Blog-post.jpg?size=1920xAUTO&v=817735&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb2N1cyI6eyJ4IjowLjUsInkiOjAuNX0sInNyYyI6Ii91cGxvYWRzLzIwMjIvMDUvRm90b19CbG9nLXBvc3QuanBnIiwiYWx0X3RleHQiOiJGb3RvIEJsb2cgUG9zdCIsImltYWdlX2lkIjo4MTc3MzUsInNlcnZpY2UiOiJhd3MtczMiLCJhd3NfYnVja2V0Ijoic29ueWR3LXByb2Qtc3RhdGljLWFzc2V0cyIsIndoaXRlbGlzdFNpemVzIjpbIjEyMDB4QVVUTyIsIjEwMHg2NSIsIjEwMHhBVVRPIiwiMTEweDgyIiwiNzUweEFVVE8iLCIxMDAweEFVVE8iLCIxMjAweEFVVE8iLCIxMjAweDgwMCIsIjE5MjB4QVVUTyIsIjE5MjB4MTAwMCIsIjIwMHgxNTAiLCIyMjV4MTcwIiwiMjI1eEFVVE8iLCIyMjl4MzAwIiwiMzY4eEFVVE8iLCI0NTB4MzQwIiwiNTAweEFVVE8iLCI3NTB4NTAwIiwiN3gxMCIsIjd4MTIiLCI3eDE2IiwiN3gzIiwiN3g0IiwiN3g1IiwiN3g2IiwiN3g3IiwiN3g4IiwiN3g5Il0sImltYWdlVmVyc2lvbiI6InY2IiwiZXhwIjoxOTA0Njg4MDAwMDAwfQ.9ObdyJ9EB7WqJWaHXaXo_oYYw1CnOt-BPq9V010UG1o" alt="Ảnh minh họa"/>
            <p className="text-sm leading-relaxed mb-4">{post[0].content}</p>
            <a href="#" className="text-blue-500 hover:underline">Đọc tiếp</a>
        </div>
    )
}

export default Baiviet;