import defaultImg from '../../../assets/icons8-love-32.png';
import { useState } from 'react';

const Likes = ({ image = defaultImg, num }) => {
  const [likeNo, setLikeNo] = useState(num);
  const [isClicked, setIsClicked] = useState(false);

  const method = () => {
    if (isClicked) {
      setIsClicked(false);
      setLikeNo(likeNo - 1);
    } else {
      setLikeNo(likeNo + 1);
      setIsClicked(true);
    }
  };
  return (
    <div className="reaction-div">
      <div onClick={method} className="reaction-icon-div">
        <img className="reaction-icon" src={image} alt="" />
      </div>
      <div className="reaction-stats-div">
        <p>{likeNo}</p>
      </div>
    </div>
  );
};
export default Likes;
