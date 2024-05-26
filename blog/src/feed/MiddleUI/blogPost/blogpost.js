import Likes from '../Posts/Like';
import Comments from '../Posts/Comment';
import Views from '../Posts/View';
import Dislikes from '../Posts/Dislike';
import PostContent from '../Posts/Content';
import UserName from '../../../userUi/userName';
import UserImage from '../../../userUi/userImage';
import '../Posts/styles/posts.css'
import defaultImage from '../../../assets/frank.jpg';
import BlogContent from './blogContent';
import { Link } from 'react-router-dom';

const blogPost = ({
  name='Frank Willsv',
  image=defaultImage,
  commentsNo=0,
  likesNo=0,
  viewsNo=0,
  time=1,
  postContent='Even though no-code tool are gaining pupolarity there is just much you can\'t do with them compared to Programming Languages'
}) => {
  return (
    <div className='main-post-comp'>
       <UserImage image={image}/>
      <div className='post-second-section'>
        <div className='post-content'>
          <UserName name={name}/>
	    <Link to='/blog-content'><BlogContent time={time}/></Link>
        </div>
        <div className='post-reaction-div'>
	      <Comments num={commentsNo}/>
	      <Likes num={likesNo} />
	      <Views num={viewsNo}/>
        </div>
      </div>
    </div>
  );
}

export default blogPost;
