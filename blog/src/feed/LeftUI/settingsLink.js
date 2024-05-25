import './Styles/settingsLink.css';
import './Styles/LeftUi.css';
import defaultImage from '../../assets/icons8-setting-50.png';

const settingsLink = ({
  image=defaultImage
}) => {
  return (
    <div className="settings-link">
      <div className='nav-icon-div'>
        <img
	  className='nav-icon-image'
          src={image}
          alt=''/>
      </div>
      <div className='link-info'>
        Settings
      </div>
    </div>
  );
}

export default settingsLink;
