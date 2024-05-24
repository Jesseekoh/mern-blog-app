import './Styles/newPostLink.css';
import defaultImage from '../../assets/icons8-plus-50.png';

const newPostLink = ({
  image=defaultImage
}) => {
  return (
    <div className="post-link">
      <div className='nav-icon-div'>
        <img
	  className='nav-icon-image'
          src={image}
          alt=''/>
      </div>
      <div className='link-info'>
        New Post
      </div>
    </div>
  );
}

export default newPostLink;
