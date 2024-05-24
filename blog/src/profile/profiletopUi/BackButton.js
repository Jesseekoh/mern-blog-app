import iconImage from '../../assets/icons8-back.png';
import './BackButton.css';

const BackButton = ({ icon=iconImage }) => {
  return (
    <div className='back-icon-div'>
      <img
        src={icon}
	alt='back-buttton'
      />
    </div>
  );
}
export default BackButton;
