import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
          <p className="text-gray-700 text-sm mb-4">{Arts.Art[0].created_at}</p>
          <img
            className="mb-4 object-fill h-[350px] w-[694px]"
            src={
              'http://192.168.1.9/magento2/pub/media/catalog/blog/' +
              Arts.Art[0].img
            }
            alt="Ảnh minh họa"
          />
          <p className="text-sm leading-relaxed mb-4">{Arts.Art[0].content}</p>
        </div>
      )}
    </div>
  );
}

export default Baiviet;
