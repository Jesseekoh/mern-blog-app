import './styles/userImage.css';
import defaultImage from '../assets/vinicius-wiesehofer.jpg';

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
