import defaultImg from '../../../assets/icons8-love-32.png';

const Likes = (
  {image=defaultImg
  }) => {
  return (
    <div className='reaction-div'>
      <div className='reaction-icon-div'>
        <img
	  className='reaction-icon'
          src={image}
          alt=''/>
      </div>
      <div className='reaction-stats-div'>
        <p>1.5k</p>
      </div>
    </div>
  );
}
export default Likes;
