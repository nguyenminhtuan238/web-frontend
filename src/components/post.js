import React, { useEffect, useState } from "react";
import axios from "axios";


function Post(){
    const [post, setPost] = useState({});
    const [l, setl] = useState(true);
    useEffect(() => {
        axios
          .get(`http://192.168.1.9:5000/blog/detail/10`)
          .then(response=> {
            console.log(response.data)
            setPost(response.data.result);
            setl(false)
           
        })
          .catch((error) => console.log(error));
    },[]);

    return(
        <div className="max-w-6xl mx-auto">
            <h1 className="mx-2 my-[20px] text-3xl font-medium">Bài viết mới nhất</h1>
            {
            l?"lỗi":
            <div className="grid grid-cols-3 gap-4 ">
                <div>
                    <img className="mb-2 object-contain h-[200px] w-[400px]" src="https://static.developer.sony.com/images/image/v6/s3/uploads/2023/04/Hackster.png?size=1920xAUTO&v=826024&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb2N1cyI6eyJ4IjowLjUsInkiOjAuNX0sInNyYyI6Ii91cGxvYWRzLzIwMjMvMDQvSGFja3N0ZXIucG5nIiwiYWx0X3RleHQiOiJIYWNrc3RlciIsImltYWdlX2lkIjo4MjYwMjQsInNlcnZpY2UiOiJhd3MtczMiLCJhd3NfYnVja2V0Ijoic29ueWR3LXByb2Qtc3RhdGljLWFzc2V0cyIsIndoaXRlbGlzdFNpemVzIjpbIjEyMDB4QVVUTyIsIjEwMHg2NSIsIjEwMHhBVVRPIiwiMTEweDgyIiwiNzUweEFVVE8iLCIxMDAweEFVVE8iLCIxMjAweEFVVE8iLCIxMjAweDgwMCIsIjE5MjB4QVVUTyIsIjE5MjB4MTAwMCIsIjIwMHgxNTAiLCIyMjV4MTcwIiwiMjI1eEFVVE8iLCIyMjl4MzAwIiwiMzY4eEFVVE8iLCI0NTB4MzQwIiwiNTAweEFVVE8iLCI3NTB4NTAwIiwiN3gxMCIsIjd4MTIiLCI3eDE2IiwiN3gzIiwiN3g0IiwiN3g1IiwiN3g2IiwiN3g3IiwiN3g4IiwiN3g5Il0sImltYWdlVmVyc2lvbiI6InY2IiwiZXhwIjoxOTA0Njg4MDAwMDAwfQ.G4iXLf6L67YXYDu5UKQnWIBGz2mpHfA5_3oTZQMopSk" alt="Ảnh minh họa"/>
                    <p className="mx-5 text-gray-700 text-sm">{post[0].created_at}</p>
                    <p className="mx-5 text-base font-medium line-clamp-2">{post[0].content}</p>
                </div>
            </div>
            }
        </div>
        
    )
}

export default Post;