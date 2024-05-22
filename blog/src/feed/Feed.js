import LeftUi from './LeftUI/LeftUi';
import MiddleUi from './MiddleUI/MiddleUi';
import RightUi from './RightUI/RightUi';
import './styles/feed.css';

const Feed = () => {
  return (
    <main >
      <LeftUi />
      <div className='main-ui'>
        <MiddleUi />
      </div>
      <RightUi />
    </main>
  );
}
export default Feed;
