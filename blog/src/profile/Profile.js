import ProfileBottomUi from './profileBottomUi/ProfileBottomUi';
import ProfileMiddleUi from './profileMiddleUi/ProfileMiddleUi';
import ProfiletopUi from './profiletopUi/ProfiletopUi';

const Profile = () => {
  return (
    <div className='profile-container'>
      <ProfiletopUi />
      <ProfileMiddleUi />
      <ProfileBottomUi />
    </div>
  );
}

export default Profile;
