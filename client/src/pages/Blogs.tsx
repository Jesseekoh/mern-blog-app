import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard/BlogCard';

export interface IBlogPostType {
  title: string;
  content: string;
  _id: string;
  views: number;
  likes: number;
  author: string;
  createdAt: Date;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<IBlogPostType[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:8000/blogs/all');
        if (response.ok) {
          let data = await response.json();
          data = data.data;

          setBlogs(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      {blogs ? (
        blogs.map((post) => (
          <BlogCard
            title={post.title}
            id={post._id}
            likes={post.likes}
            views={post.views}
            key={post._id}
            authorId={post.author}
            createdAt={post.createdAt}
          />
        ))
      ) : (
        <h3>There are no posts</h3>
      )}
    </>
  );
};

export default Blogs;
