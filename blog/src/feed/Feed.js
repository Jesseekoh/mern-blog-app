import LeftUi from './LeftUI/LeftUi';
import MiddleUi from './MiddleUI/MiddleUi';
import RightUi from './RightUI/RightUi';
import './styles/feed.css';

const Feed = () => {
  const isLogin = true;
  return (
    <main >
      <LeftUi
        isLogin={isLogin}
      />
      <div className='main-ui'>
        <MiddleUi />
      </div>
      <RightUi
        isLogin={isLogin}
      />
    </main>
  );
}
export default Feed;
