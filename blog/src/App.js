import Feed from './feed/Feed';
import Profile from './profile/Profile';
import NewPost from './NewPost/NewPost';
import Notfound from './Notfound.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Settings from './settings/settings';
import SignUpUi from './signup/signup';
import LogInUi from './login/login';
import FullBlogUi from './fullBlogContent/fullBlogUi';
/*
import Axios from 'axios';
import { useEffect, useState } from 'react';
*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/profile/*' element={<Profile />} />
        <Route path='/new-post' element={<NewPost />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/blog-content' element={<FullBlogUi />} />
        <Route path='/signup' element={<SignUpUi />} />
        <Route path='/login' element={<LogInUi />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
