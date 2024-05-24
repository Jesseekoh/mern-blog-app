import defaultImg from '../../../assets/icons8-thumbs-down-64.png';

const Dislikes = (
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
        <p>0</p>
      </div>
    </div>
  );
}
export default Dislikes;
