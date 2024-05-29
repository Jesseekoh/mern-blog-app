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
import logoutIcon from '../../assets/icons8-back-button-50.png';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../useFetch';
import { loginContext } from '../../loginContext';
import { useContext } from 'react';

const LeftUi = ({
  isLogin = false,
  user
}) => {
  const navigate = useNavigate();
  const { setIsLogin } = useContext(loginContext);

  const logoutUser = () => {
    fetch('http://localhost:8000/logout', {credentials: 'include'})
      .then(res => {
        if (!res.ok) {
          throw new Error('Error while logging out user.., check network!');
	}
	return res.json();
      })
      .then(data => {
        setIsLogin(false);
        toast.success(data.message, { position: 'top-right' });
	navigate('/');
      })
      .catch(err => {
        toast.error(err.message, { position: 'top-right' });
      });
  }
	
  if (isLogin) {
  return (
    <section className='left-ui'>
      <div className='left-ui-user-info'>
        <div className='left-ui-user-info1'>
          <UserImage />
          <UserName
	    text_color='#000'
	    name={user.data.username}
	  />
	      </div>
	      <div className='left-ui-user-info2'>
	  
	      </div>
	      <div className='left-ui-user-info3'>
	        <UserPostNum
	          total={user.data.totalPost}
	        />
	      </div>
      </div>
      <div className='left-ui-nav'>
        <ul>
	  <li>
	    <Link className='custom-link' to={`/profile/${user.data.id}`}><ProfileLink /></Link>
	  </li>
	  <li>
	    <Link to='/new-post'><NewPostLink /></Link>
	  </li>
	  <li>
	    <Link to='/settings'><SettingsLink /></Link>
	  </li>
	  <li className='logout-list-item' onClick={logoutUser}>
	    <div className='logout-icon-div'><img src={logoutIcon} /></div>
	    <p>Logout</p>
	  </li>
	</ul>
      </div>
    </section>
  );
  } else {
    return (
    <section className='left-ui'>
      <div className='left-ui-user-info'>
        <div className='left-ui-user-info1'>
          <UserName
            name='Blog App'
	    text_color='#000' />
              </div>
              <div className='left-ui-user-info2'>
              </div>
              <div className='left-ui-user-info3'>
              </div>
      </div>
      <div className='left-ui-nav'>
        <ul>
          <li>
          </li>
        </ul>
      </div>
    </section>
  );
  }
}
export default LeftUi;
