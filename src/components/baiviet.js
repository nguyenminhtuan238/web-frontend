import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getidArt } from '../store/Article';
function Baiviet() {
  const Arts = useSelector((state) => state.Art);
  const dispatch = useDispatch();
  const id = useParams();
  useEffect(() => {
    dispatch(getidArt(id.id));
  }, [dispatch, id.id]);
  return (
    <div className="max-w-2xl mx-auto mt-3 mb-3">
      {Arts.loadingArt ? (
        'lỗi'
      ) : (
        <div>
          <h1 className="text-3xl font-sans font-open-sans mb-4">
            {Arts.Art[0].title}
          </h1>
          <p className="text-gray-700 text-sm mb-4">
            {new Date(Arts.Art[0].created_at).toLocaleDateString('vi-VN', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            })}
          </p>
          <img
            className="mb-4 object-cover h-[350px] w-[694px]"
            src={
              'http://192.168.1.9/magento2/pub/media/catalog/blog/' +
              Arts.Art[0].img
            }
            alt="Ảnh minh họa"
          />
          {/* <span className="text-sm leading-relaxed mb-4">{Arts.Art[0].content}</span> */}
          {Arts.Art.map((art, index) => (
            <div key={index} className="mb-4">
              {art.content.split('\n').map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed">
                  <span className="first-line:text-indent-2 ml-5 ">
                    {paragraph}
                  </span>
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Baiviet;
