import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IBlogPostType } from './Blogs';
const BlogPage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState<IBlogPostType>({});

  useEffect(() => {
    const getBlogDetails = async () => {
      try {
        const resp = await fetch(`http://localhost:8000/${blogId}`);

        if (resp.ok) {
          const data = await resp.json();
          setBlog(data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getBlogDetails();
  });
  return (
    <>
      <h1>Blog Title</h1>
      <p>{blogId}</p>
    </>
  );
};

export default BlogPage;
