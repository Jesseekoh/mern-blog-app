import UserFollowing from './Followers';
import UserFollowers from './Following';
import UserPostNum from './totalPost';
import ProfileLink from './profileLink';
import NewPostLink from './newPostLink';
import SettingsLink from './settingsLink';
import UserImage from '../../userUi/userImage';
import UserName from '../../userUi/userName';
import './Styles/LeftUi.css';
import { Link } from 'react-router-dom';

const LeftUi = () => {
  return (
    <section className='left-ui'>
      <div className='left-ui-user-info'>
        <div className='left-ui-user-info1'>
          <UserImage />
          <UserName text_color='#000' />
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
	  <li>
	    <Link className='custom-link' to='/profile'><ProfileLink /></Link>
	  </li>
	  <li>
	    <Link to='/new-post'><NewPostLink /></Link>
	  </li>
	  <li>
	    <Link to='/settings'><SettingsLink /></Link>
	  </li>
	</ul>
      </div>
    </section>
  );
}
export default LeftUi;
