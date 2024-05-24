import defaultImg from '../../../assets/icons8-comment-50.png';

const Comments = (
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
        <p>100</p>
      </div>
    </div>
  );
}
export default Comments;
