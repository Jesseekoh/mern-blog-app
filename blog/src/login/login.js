import { useState, useContext } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginContext } from '../loginContext';

const LoginUi = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLogin, setIsLogin } = useContext(loginContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    const { success, message } = data;
    if (success) {
      toast.success(message, {
        position: 'top-right',
      });
      setIsLogin(true);
      navigate('/');
    } else {
      toast.error(message, { position: 'top-right' });
    }
  };
  return (
    <div className="main-signup-div">
      <div className="signup-info">
        <h1>Login to BLog Socials</h1>
      </div>
      <form onSubmit={handleLogin}>
        <div className="signup-container">
          <div className="signup-top-input-div">
            <div className="signup-details-div">
              <label>Email</label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="signup-details-div">
              <label>Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Login</button>
          <p>
            Dont have an account?{' '}
            <Link to="/signup">
              <span>sign up</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginUi;
