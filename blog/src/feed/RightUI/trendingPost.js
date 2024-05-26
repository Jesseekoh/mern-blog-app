import PostContent from '../MiddleUI/Posts/Content';
import UserImage from '../../userUi/userImage';
import UserName from '../../userUi/userName';
import './styles/trendingPost.css';
import trendPostImage from '../../assets/alex.jpg';
import { Link } from 'react-router-dom';

const trendingPost = ({ isLogin = false }) => {
  if (isLogin) {
    return (
      <div className="trending-post">
        <div className="first-section">
          <UserImage image={trendPostImage} />
          <div className="trending-info">
            <UserName name="Alexanda Smith" />
            <PostContent content="Breaking... Isreal Not Holding Back as 4 World health Workers got hit from Isreal..." />
          </div>
        </div>
        <div className="second-section">
          <div className="more-info-div">
            <p>Total Engagement</p>
            <p>2.9M</p>
          </div>
          <p className="timer">1min ago</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="trending-post">
        <div className="first-section">
          <div className="trending-info">
            <Link to="/signup">
              <UserName name="Sign Up" />
            </Link>
            <PostContent />
          </div>
        </div>
        <div className="second-section">
          <div className="more-info-div"></div>
        </div>
      </div>
    );
  }
};
export default trendingPost;
