import PostContent from '../MiddleUI/Posts/Content';
import UserImage from '../../userUi/userImage';
import UserName from '../../userUi/userName';
import './styles/mostViews.css';

const mostViews = ({
  isLogin=false
}) => {
  if (isLogin) {
    return (
      <div className='trending-post'>
        <div className='first-section'>
            <UserImage />
          <div className='trending-info'>
            <UserName />
            <PostContent 
              content='Even though no-code tool are gaining pupolarity there is just much...'
	    />
          </div>
        </div>
        <div className='second-section'>
          <div className='more-info-div'>
            <p>Total Views</p>
            <p>1.3M</p>
          </div>
          <p className='timer'>3min ago</p>
        </div>
      </div>
    );
  } else {
    return (
    <div className='trending-post'>
      <div className='second-section'>
        <div className='more-info-div'>
          <p>Already have an account?</p>
        </div>
      </div>
      <div className='first-section'>
        <div className='trending-info'>
          <UserName
	    name='Login'/>
          <PostContent />
        </div>
      </div>
    </div>
    );
  }
}
export default mostViews;
