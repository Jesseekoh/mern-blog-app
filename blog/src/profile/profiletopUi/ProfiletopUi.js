import './ProfiletopUi.css';
import BackButton from './BackButton'
import { Link } from 'react-router-dom';

const ProfiletopUi = () => {
  return (
    <div className='profile-top-ui'>
      <Link to='/feed'><BackButton /></Link>
    </div>
  );
}
export default ProfiletopUi;
