import PostContent from '../MiddleUI/Posts/Content';
import UserImage from '../../userUi/userImage';
import UserName from '../../userUi/userName';

const mostViews = () => {
  return (
    <div>
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
	  <p>Total Views</p>
	  <p>1.3M</p>
	</div>
        <p>3min ago</p>
      </div>
    </div>
  );
}
export default mostViews;
