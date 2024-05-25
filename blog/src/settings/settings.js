import BackButton from '../profile/profiletopUi/BackButton';
import passwordIcon from '../assets/icons8-password-50.png';
import changeImageIcon from '../assets/icons8-image-64.png';
import './settings.css';
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div className='settings-div'>
      <Link to='/feed'><BackButton /></Link>
      <div className='setting-header-div'>
        <h2>Settings</h2>
      </div>
      <div className='setting-options-div settings-second'>
	<div className='setting-icon-div'>
	  <img 
	    src={passwordIcon}
	    alt='password icon'
	  />
	</div>
	<div className='setting-details-div'>
          <h3>Change Password</h3>
	  <p>You can change your password anytime</p>
	</div>
      </div>
      <div className='setting-options-div'>
	<div className='setting-icon-div'>
	  <img
	    src={changeImageIcon}
	    alt='change profile image icon'
	  />
	</div>
	<div className='setting-details-div'>
          <h3>Change Profile Picture</h3>
	  <p>Change profile picture to suite your current apperance.</p>
	</div>
      </div>
    </div>
  );
}
export default Settings;
