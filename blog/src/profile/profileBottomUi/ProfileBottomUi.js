import './ProfileBottomUi.css';
import RecentReaction from './RecentReaction';
import RecomendedTopics from './RecomendedTopics';
import Post from '../../feed/MiddleUI/Posts/Post';
import ProfileCommentUi from './Comments/Comments';
import ProfilePostUi from './Posts/Post';
import ProfileLikesUi from './Likes/Likes';
import ProfileDislikeUi from './Dislikes/Dislike';
import { Route, Routes, Navigate} from 'react-router-dom';

const ProfileBottomUi = () => {
  return (
      <Routes>
        <Route path='/' element={<Navigate to='posts' replace/>} />
        <Route path='posts' element={<ProfilePostUi />} />
	<Route path='comments' element={<ProfileCommentUi />} />
        <Route path='likes' element={<ProfileLikesUi />} />
        <Route path='dislikes' element={<ProfileDislikeUi />} />
      </Routes>
  );
}
export default ProfileBottomUi;
