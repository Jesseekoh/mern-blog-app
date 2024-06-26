import Feed from './feed/Feed';
import Profile from './profile/Profile';
import NewPost from './NewPost/NewPost';
import Notfound from './Notfound.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Settings from './settings/settings';
import SignUpUi from './signup/signup';
import LogInUi from './login/login';
import BlogDetails from './fullBlogContent/blogDetails';
import { loginContext } from './loginContext';
import {
	postContext,
	deletePostContext,
	deleteIdContext
} from './postContext';
import { useState } from 'react';
/*
import Axios from 'axios';
import { useEffect, useState } from 'react';
*/

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [openDeleteDialog, setDeleteDialog] = useState(false);
  const [posts, setPosts] = useState([]);
  const [blogId, setBlogId] = useState(null);

  return (
    <Router> 
      <deleteIdContext.Provider value={{blogId, setBlogId}}>
      <deletePostContext.Provider value={{openDeleteDialog, setDeleteDialog}}>
      <loginContext.Provider value={{isLogin, setIsLogin}}>
      <postContext.Provider value={{posts, setPosts}}>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/new-post' element={<NewPost />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/signup' element={<SignUpUi />} />
          <Route path='/login' element={<LogInUi />} />
          <Route path='/blogs/:id' element={<BlogDetails />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </postContext.Provider>
      </loginContext.Provider>
      </deletePostContext.Provider>
      </deleteIdContext.Provider>
    </Router>
  );
}

export default App;
