import BackButton from '../profile/profiletopUi/BackButton';
import PostButton from './postButton';
import PostInput from './postInput';
import './NewPost.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const NewPost = () => {
  const [text, setText] = useState('');

  return (
    <div className='new-post-div'>
      <Link to="/feed"><BackButton /></Link>
      <PostButton />
      <PostInput
        setText={setText}
	text={text}
      />
    </div>
  );
}
export default NewPost;
