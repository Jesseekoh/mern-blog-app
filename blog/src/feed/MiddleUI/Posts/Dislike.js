import defaultImg from '../../../assets/icons8-thumbs-down-64.png';
import { useState } from 'react';

const Dislikes = ({
  image=defaultImg
}) => {
  const [dislike, setDislike] = useState(0);

  const method = () => {
    if (dislike > 0) {
      setDislike(dislike - 1);
    } else {
      setDislike(dislike + 1);
    }
  }
  return (
    <div className='reaction-div'>
      <div
	  onClick={method}
	  className='reaction-icon-div'>
        <img
	  className='reaction-icon'
          src={image}
          alt=''/>
      </div>
      <div className='reaction-stats-div'>
        <p>{dislike}</p>
      </div>
    </div>
  );
}
export default Dislikes;
