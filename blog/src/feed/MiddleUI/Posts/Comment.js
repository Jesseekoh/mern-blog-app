import defaultImg from '../../../assets/icons8-comment-50.png';

const Comments = ({
  image=defaultImg,
  num
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
        <p>{num}</p>
      </div>
    </div>
  );
}
export default Comments;
