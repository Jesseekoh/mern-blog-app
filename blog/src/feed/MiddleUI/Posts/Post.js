import Likes from './Like';
import Comments from './Comment';
import Views from './View';
import Dislikes from './Dislike';
import PostContent from './Content';
import UserName from '../../../userUi/userName';
import UserImage from '../../../userUi/userImage';
import './styles/posts.css'
const Post = () => {
  return (
   <div className='main-post-comp'>
     <div>
       <UserImage />
     </div>
     <div>
       <div>
         <UserName />
	 <PostContent />
       </div>
       <div>
	  <Comments />
	  <Likes />
	  <Views />
	  <Dislikes />
       </div>
     </div>
   </div>
  );
}

export default Post;
