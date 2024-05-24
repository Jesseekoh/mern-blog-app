import PostContent from '../MiddleUI/Posts/Content';
import UserImage from '../../userUi/userImage';
import UserName from '../../userUi/userName';
import './styles/mostViews.css';

const mostViews = () => {
  return (
    <div className='trending-post'>
      <div className='first-section'>
	  <UserImage />
	<div className='trending-info'>
	  <UserName />
	  <PostContent />
	</div>
      </div>
      <div className='second-section'>
        <div className='more-info-div'>
	  <p>Total Views</p>
	  <p>1.3M</p>
	</div>
        <p className='timer'>3min ago</p>
      </div>
    </div>
  );
}
export default mostViews;
