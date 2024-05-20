import { Dispatch, SetStateAction, FormEvent } from 'react';
import { Link } from 'react-router-dom';
export interface ISignupProps {
  username: string;
  email: string;
  password: string;
  setUsername: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent) => void;
}

const SignupForm = ({
  handleSubmit,
  username,
  email,
  password,
  setUsername,
  setEmail,
  setPassword,
}: ISignupProps) => {
  return (
    <>
      <form className="signup-form flex flex-col max-w-xl w-full mx-auto p-4">
        <div className="form-row mb-4">
          <label htmlFor="username">Username</label>
          <input
            className="w-full p-2 rounded-lg"
            type="username"
            name="username"
            id="username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-row mb-4">
          <label htmlFor="email">Email</label>
          <input
            className="w-full p-2 rounded-lg"
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row mb-3">
          <label htmlFor="password">Password</label>
          <input
            className="w-full p-2 rounded-lg"
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} className="text-white mt-4">
          Sign up
        </button>
        <p className="text-center mt-4">
          Already a user?
          <Link to={'/login'} className="text-indigo-500">
            Log in
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignupForm;
