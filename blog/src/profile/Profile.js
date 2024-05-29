import ProfileBottomUi from './profileBottomUi/ProfileBottomUi';
import ProfileMiddleUi from './profileMiddleUi/ProfileMiddleUi';
import ProfiletopUi from './profiletopUi/ProfiletopUi';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams()

  return (
    <div className='profile-container'>
      <ProfiletopUi />
      <ProfileMiddleUi userId={id}/>
      <ProfileBottomUi userId={id}/>
    </div>
  );
}

export default Profile;
