import useFetch from '../useFetch';
import './blogDetails.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FullDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/blogs/post/${id}`
  );

  console.log(data, isLoading, error);
  return (
    <div className="blog-content-div">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: data.data.title }}
            className="post-header-div"
          />
          <div
            dangerouslySetInnerHTML={{ __html: data.data.content }}
            className="post-content-div"
          />
        </div>
      )}
    </div>
  );
};
export default FullDetails;
