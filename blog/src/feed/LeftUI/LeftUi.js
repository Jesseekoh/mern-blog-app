import UserFollowing from './Followers';
import UserFollowers from './Following';
import UserPostNum from './totalPost';
import ProfileLink from './profileLink';
import NewPostLink from './newPostLink';
import SettingsLink from './settingsLink';
import UserImage from '../../userUi/userImage';
import UserName from '../../userUi/userName';
import './Styles/LeftUi.css';

const LeftUi = () => {
  return (
    <section className='left-ui'>
      <div className='left-ui-user-info'>
        <div className='left-ui-user-info1'>
          <UserImage />
          <UserName />
	      </div>
	      <div className='left-ui-user-info2'>
          <UserFollowers />
          <UserFollowing />
	      </div>
	      <div className='left-ui-user-info3'>
	        <UserPostNum />
	      </div>
      </div>
      <div className='left-ui-nav'>
        <ul>
	        <li><ProfileLink /></li>
	        <li><NewPostLink /></li>
	        <li><SettingsLink /></li>
	      </ul>
      </div>
    </section>
  );
}
export default LeftUi;
