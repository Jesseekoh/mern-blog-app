import './Styles/profileLink.css'
import defaultImage from '../../assets/icons8-user-50.png';

const profileLink = ({
  image=defaultImage
}) => {
  return (
    <div className="profile-link">
      <div className='nav-icon-div'>
        <img
	  className='nav-icon-image'
	  src={image}
	  alt=''/>
      </div>
      <div className='link-info'>
        Profile
      </div>
    </div>
  );
}

export default profileLink;
