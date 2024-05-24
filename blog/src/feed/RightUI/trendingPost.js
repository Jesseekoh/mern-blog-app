import PostContent from '../MiddleUI/Posts/Content';
import UserImage from '../../userUi/userImage';
import UserName from '../../userUi/userName';
import './styles/trendingPost.css'

const trendingPost = () => {
  return (
    <div className='trending-post'>
      <div className='first-section'>
	  <UserImage />
	<div className='trending-info'>
	  <UserName />
	  <PostContent/>
	</div>
      </div>
      <div className='second-section'>
        <div className='more-info-div'>
	  <p>Total Engagement</p>
	  <p>2.9M</p>
	</div>
        <p className='timer'>1min ago</p>
      </div>
    </div>
  );
}
export default trendingPost;
