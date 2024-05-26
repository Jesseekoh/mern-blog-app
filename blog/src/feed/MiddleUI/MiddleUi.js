import Post from './Posts/Post';
import BlogPost from './blogPost/blogpost';
import './styles/middleUi.css';
import image1 from '../../assets/aliy.jpg';
import { useEffect, useState } from 'react';

const MiddleUi = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:8000/blogs/all');
        if (response.ok) {
          let data = await response.json();
          data = data.data;
          console.log(data);
          setPosts(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <section className="middle-section">
      {posts ? (
        posts.map((post) => (
          <BlogPost
            id={post._id}
            key={post._id}
            title={post.title}
            likes={post.likes}
            views={post.views}
            authorId={post.author}
            createdAt={post.createdAt}
          />
        ))
      ) : (
        <h3>There are no posts</h3>
      )}
      <Post commentsNo={2} likesNo={4} viewsNo={8} dislikesNo={1} />

      <Post />
    </section>
  );
};
export default MiddleUi;
