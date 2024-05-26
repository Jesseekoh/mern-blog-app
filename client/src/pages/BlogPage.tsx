import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IBlogPostType } from './Blogs';
const BlogPage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState<IBlogPostType>({} as IBlogPostType);

  useEffect(() => {
    const getBlogDetails = async () => {
      try {
        const resp = await fetch(`http://localhost:8000/blogs/post/${blogId}`);

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
      <h1 className="font-black text-3xl my-4">{blog.title}</h1>
      <p>{blogId}</p>
      <p className="leading-normal text-xl">{blog.content}</p>
    </>
  );
};

export default BlogPage;
