import './ProfileMiddleUi.css';
import UserImage from '../../userUi/userImage';
import UserName from '../../userUi/userName';
import UserBio from '../../userUi/UserBio';
import Following from '../../feed/LeftUI/Following';
import Followers from '../../feed/LeftUI/Followers';
import TotalPost from '../../feed/LeftUI/totalPost';
import { Link } from 'react-router-dom';
import useFetch from '../../useFetch';

const ProfileMiddleUi = ({ userId, totalPost }) => {
  const { data, isLoading, error } = useFetch(`http://localhost:8000/profile/${userId}`);
  console.log(data, isLoading, error);

  return (
    <>
    {isLoading && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {data && <div className='profile-middle-ui'>
      <div className='profile-section'>
        <div className='user-name-image-div'>
          <UserImage height='200' width='200'/>
        </div>
          <UserName
	    text_color='#000'
	    name={data.data.username}
	  />
        <UserBio
          data={data.data}
	/>
        <div className='follow-info-div'>

        </div>
        <TotalPost
          total={data.data.totalPost}
	/>
      </div>
      <div className="nav-div">
        <ul>
	  <Link to='/profile/posts'><li>Posts</li></Link>
	</ul>
      </div>
    </div>}
    </>
  );
}
export default ProfileMiddleUi;
