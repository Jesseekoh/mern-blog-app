import Likes from './Like';
import Comments from './Comment';
import Views from './View';
import Dislikes from './Dislike';
import PostContent from './Content';
import UserName from '../../../userUi/userName';
import UserImage from '../../../userUi/userImage';
import './styles/posts.css'
import defaultImage from '../../../assets/vinicius-wiesehofer.jpg';

const Post = ({
  name='Mike Owen',
  image=defaultImage,
  commentsNo=0,
  likesNo=0,
  viewsNo=0,
  dislikesNo=0,
  postContent='Even though no-code tool are gaining pupolarity there is just much you can\'t do with them compared to Programming Languages'
}) => {
  return (
    <div className='main-post-comp'>
       <UserImage image={image}/>
      <div className='post-second-section'>
        <div className='post-content'>
          <UserName name={name}/>
	    <PostContent content={postContent}/>
        </div>
        <div className='post-reaction-div'>
	      <Comments num={commentsNo}/>
	      <Likes num={likesNo} />
	      <Views num={viewsNo}/>
	      <Dislikes num={dislikesNo}/>
        </div>
      </div>
    </div>
  );
}

export default Post;
