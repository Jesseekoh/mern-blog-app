import '../ProfileBottomUi.css';
import RecentReaction from '../RecentReaction';
import RecomendedTopics from '../RecomendedTopics';
import Post from '../../../feed/MiddleUI/Posts/Post';

const DislikeProfileUi = () => {
  return (
    <div className='Profile-Bottom-Ui'>
      <div className='left-section'>
        <RecentReaction />
      </div>
      <div className='middle-section'>
        <Post />
        <Post />
        <Post />
      </div>
      <div className='right-section'>
        <RecomendedTopics />
      </div>
    </div>
  );
}
export default DislikeProfileUi;
