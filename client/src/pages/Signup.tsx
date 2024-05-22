import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../components/SignupForm/SignupForm';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ username, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const { success, message } = data;
      if (success) {
        toast.success(message, {
          position: 'bottom-right',
        });
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        toast.error(message, {
          position: 'bottom-right',
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">SignUp</h1>
      <SignupForm
        username={username}
        email={email}
        password={password}
        setUsername={setUsername}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Signup;
