import { FormEvent, useState } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
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
        navigate('/');
      } else {
        toast.error(message, {
          position: 'top-right',
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-3xl font-bold">Login</h1>
      <LoginForm
        handleSubmit={handleSubmit}
        password={password}
        email={email}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Login;
