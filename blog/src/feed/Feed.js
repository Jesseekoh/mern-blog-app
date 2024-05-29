import LeftUi from './LeftUI/LeftUi';
import MiddleUi from './MiddleUI/MiddleUi';
import RightUi from './RightUI/RightUi';
import './styles/feed.css';
import useFetch from '../useFetch';
import { useState, useContext, useEffect } from 'react';
import { loginContext } from '../loginContext';

const Feed = () => {
  const {isLogin, setIsLogin} = useContext(loginContext);
  const [data, setData]  = useState(null);
  const [isLoading, setLoading]  = useState(true);
  const [error, setError]  = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/myProfile', {credentials: 'include'})
      .then(res => {
        if (!res.ok) {
          throw Error('User Unauthorized!');
        }
        return res.json();
      })
      .then(data => {
        setLoading(false);
        setError(false);
        setData(data);
        setIsLogin(true);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
        setIsLogin(false);
      });
  }, []);

  return (
    <>
    {isLoading && <div>Loading...</div>}
    {(error || data) && <main >
       <LeftUi
        isLogin={isLogin}
	user={data}
      />
      <div className='main-ui'>
        <MiddleUi />
      </div>
      <RightUi
        isLogin={isLogin}
      />
    </main>}
    </>
  );
}
export default Feed;
