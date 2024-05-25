import PostContent from '../MiddleUI/Posts/Content';
import UserImage from '../../userUi/userImage';
import UserName from '../../userUi/userName';
import './styles/trendingPost.css'
import trendPostImage from '../../assets/alex.jpg';

const trendingPost = ({
  isLogin=false
}) => {
  if (isLogin) {
    return (
    <div className='trending-post'>
      <div className='first-section'>
	  <UserImage
            image={trendPostImage}
	  />
	<div className='trending-info'>
	  <UserName
	    name='Alexanda Smith'
	  />
	  <PostContent
            content='Breaking... Isreal Not Holding Back as 4 World health Workers got hit from Isreal...'
	  />
	</div>
      </div>
      <div className='second-section'>
        <div className='more-info-div'>
	  <p>Total Engagement</p>
	  <p>2.9M</p>
	</div>
        <p className='timer'>1min ago</p>
      </div>
    </div>
  );
  } else {
    return (
      <div className='trending-post'>
        <div className='first-section'>
	  <div className='trending-info'>
	    <UserName
	      name='Sign Up'
	    />
	    <PostContent/>
	  </div>
        </div>
        <div className='second-section'>
	  <p style={{
		  'padding-left': 10,
		  'padding-bottom':10
	  }}>or</p>
          <div className='more-info-div'>

	    <p>Continue with Google</p>
	    <p>Google</p>
	  </div>
        </div>
      </div>
    );
  }
}
export default trendingPost;
