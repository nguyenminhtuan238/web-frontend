import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArt } from '../store/Article';
import { Link } from 'react-router-dom';
function Post() {
  const Arts = useSelector((state) => state.Art);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArt());
  }, [dispatch]);

  return (
    <div className="max-w-6xl mx-auto mt-5 mb-3">
      <h1 className="mx-2 my-[20px] text-3xl font-sans font-open-sans">
        Bài viết mới nhất
      </h1>
      {Arts.isloading ? (
        'lỗi'
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {Arts.Arts.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((post) => (
            <Link to={'../baiviet/' + post.blog_id}>
              <div key={post.blog_id} className="border-2 shadow-2xl rounded-xl hover:grayscale">
                <img
                  className="mb-2 object-cover h-[200px] w-[400px] rounded-t-xl "
                  src={
                    'http://192.168.1.9/magento2/pub/media/catalog/blog/' +
                    post.img
                  }
                  alt="Ảnh minh họa"
                />
                <p className="mx-5 min-h-[50px] text-base font-medium line-clamp-2">
                  {post.content}
                </p>
                <p className="mx-5 mb-4 text-gray-700 text-sm text-right">
                  {new Date(post.created_at).toLocaleDateString('vi-VN', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  })}
                </p>
                
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Post;
