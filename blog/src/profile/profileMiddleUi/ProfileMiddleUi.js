import './ProfileMiddleUi.css';
import UserImage from '../../userUi/userImage';
import UserName from '../../userUi/userName';
import UserBio from '../../userUi/UserBio';
import Following from '../../feed/LeftUI/Following';
import Followers from '../../feed/LeftUI/Followers';
import TotalPost from '../../feed/LeftUI/totalPost';
import { Link } from 'react-router-dom';

const ProfileMiddleUi = () => {
  return (
    <div className='profile-middle-ui'>
      <div className='profile-section'>
        <div className='user-name-image-div'>
          <UserImage height='200' width='200'/>
          <UserName text_color='#000'/>
        </div>
        <UserBio />
        <div className='follow-info-div'>
          <Following />
	  <Followers />
        </div>
        <TotalPost />
      </div>
      <div className="nav-div">
        <ul>
	  <Link to='/profile/posts'><li>Posts</li></Link>
	  <Link to='/profile/comments'><li>Comments</li></Link>
	  <Link to='/profile/likes'><li>Likes</li></Link>
	  <Link to='/profile/dislikes'><li>Dislikes</li></Link>
	</ul>
      </div>
    </div>
  );
}
export default ProfileMiddleUi;
