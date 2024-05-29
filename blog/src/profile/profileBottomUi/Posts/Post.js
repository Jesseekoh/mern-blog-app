import '../ProfileBottomUi.css';
import RecentReaction from '../RecentReaction';
import RecomendedTopics from '../RecomendedTopics';
import Post from '../../../feed/MiddleUI/Posts/Post';
import { useEffect, useState } from 'react';
import useFetch from '../../../useFetch';
import BlogPost from '../../../feed/MiddleUI/blogPost/blogpost';

const ProfilePostUi = ({ userId }) => {

  const { data:posts, isLoading, error } = useFetch(`http://localhost:8000/blogs/user/${userId}`)

  return (
    <div className='Profile-Bottom-Ui'>
      <div className='left-section'>

      </div>
      <div className='middle-section'>
      {posts ? (
        posts.data.map((post) => (
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
      </div>
      <div className='right-section'>

      </div>
    </div>
  );
}
export default ProfilePostUi;
