import { Button } from '@mui/material';
import Likes from '../Posts/Like';
import Comments from '../Posts/Comment';
import Views from '../Posts/View';
import Dislikes from '../Posts/Dislike';
import PostContent from '../Posts/Content';
import UserName from '../../../userUi/userName';
import UserImage from '../../../userUi/userImage';
import '../Posts/styles/posts.css';
import defaultImage from '../../../assets/frank.jpg';
import BlogContent from './blogContent';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import {
	postContext,
	deleteIdContext,
	deletePostContext
} from '../../../postContext';
import { CiBookmarkPlus } from 'react-icons/ci';
import { GoEye } from 'react-icons/go';
import { BsHandThumbsUp } from 'react-icons/bs';

const BlogPost = ({ id, title, likes, views, authorId, createdAt }) => {
  const { openDeleteDialog, setDeleteDialog } = useContext(deletePostContext);
  const [authorName, setAuthorName] = useState('');
  const { postNo, setPostNo } = useContext(postContext);
  const {blogId, setBlogId} = useContext(deleteIdContext)

  useEffect(() => {
    const getAuthorName = async () => {
      const response = await fetch(`http://localhost:8000/profile/${authorId}`);
      const data = await response.json();
      setAuthorName(data.data.username);
    };
    getAuthorName();
  }, []);

  const deleteBlog = () => {
    setDeleteDialog(true);
    setBlogId(id)
  }

  return (
    <div className="blog-card mb-10 bg-white">
      <div className="img__wrapper">
        <div className="delete-blogg-div">
          <Button onClick={deleteBlog}>Delete</Button>
        </div>
        <Link to={`/blogs/${id}`}>
          <img
            src={'https://placehold.co/800x250?text=Blog+Image'}
            className="max-w-full object-cover block mx-auto pt-3"
            alt="blog banner"
          />
        </Link>
      </div>
      <div className="p-4">
        <div className="author-info flex items-center gap-2 text-orange-300">
          <img
            src={defaultImage}
            alt="author"
            className="rounded-full h-10 w-10 mr-1"
          />

          <Link to={`/profile/${authorId}`} className="cursor-pointer text-3xl">
            {authorName}
          </Link>
        </div>
        <div className="blog__desc_main">
          <Link to={`/blogs/${id}`}>
            <div
              className="blog__title text-4xl font-bold"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </Link>
        </div>

        <div className="blog__info flex justify-between mt-4 items-center col-span-5">
          <CiBookmarkPlus
            fontWeight={900}
            size={30}
            className="bookmark-btn cursor-pointer hover:text-yellow-400  text-yellow-700 border-yellow-700  p-1"
          />
          <p className="flex items-center">
            <span className="mr-2">{views}</span>
            <GoEye />
          </p>
          <p className="flex items-center">
            <span className="mr-2">{likes}</span>
            <BsHandThumbsUp />
          </p>
          <p className="text-sm">{new Date(createdAt).toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
