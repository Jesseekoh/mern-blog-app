import './signup.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupUi = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, country, bio, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (response.ok) {
      const { success, message } = data;
      if (success) {
        toast.success(message, { position: 'bottom-right' });
        navigate('/');
      } else {
        toast.error(message, { position: 'bottom-right' });
      }
    }
  };
  return (
    <div className="main-signup-div">
      <div className="signup-info">
        <h1>Join BLog Socials Today!</h1>
      </div>
      <form>
        <div className="signup-container">
          <div className="signup-top-input-div">
            <div className="signup-details-div">
              <label>Username</label>
              <input
                type="text"
                required
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
              <label>Address</label>
              <input
                type="text"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="signup-details-div">
              <label>Bio</label>
              <input
                type="text"
                required
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </div>
          <div className="signup-bottom-input-div">
            <div className="signup-password-div">
              <label>Password</label>
              <input
                type="text"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <div className="signup-password-div">
              <label>Confirm Password</label>
              <input type="text" required />
            </div> */}
          </div>
          <button onClick={handleSignup}>Signup</button>
          <p>
            Already have an account?{' '}
            <Link to="/login">
              <span>login</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default SignupUi;
