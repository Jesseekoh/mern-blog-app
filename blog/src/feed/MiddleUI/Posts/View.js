import defaultImg from '../../../assets/icons8-view-50.png';

const Views = (
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
        <p>1.6k</p>
      </div>
    </div>
  );
}
export default Views;
