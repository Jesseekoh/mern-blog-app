import PostContent from '../MiddleUI/Posts/Content';
import UserImage from '../../userUi/userImage';
import UserName from '../../userUi/userName';
import './styles/trendingPost.css'

const trendingPost = () => {
  return (
    <div className='trending-post'>
      <div>
        <div>
	  <UserImage />
	</div>
	<div>
	  <UserName />
	  <PostContent />
	</div>
      </div>
      <div>
        <div>
	  <p>Total Engagement</p>
	  <p>2.9M</p>
	</div>
        <p>1min ago</p>
      </div>
    </div>
  );
}
export default trendingPost;
