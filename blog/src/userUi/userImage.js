import './styles/userImage.css';
import defaultImage from '../assets/icons8-user-50.png';

const userImage = ({
  height=50,
  width=50,
  image=defaultImage
}) => {
  return (
    <div className="user-image-div">
      <img className='profile-picture'
        src={image}
        alt='profile'
        height={height}
        width={width}/>
    </div>
  );
}

export default userImage;
