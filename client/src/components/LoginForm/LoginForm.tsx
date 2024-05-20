import { Dispatch, FormEvent, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
interface ILoginProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent) => void;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}
const LoginForm = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}: ILoginProps) => {
  return (
    <form
      className="login-form flex flex-col max-w-xl w-full mx-auto p-4"
      onSubmit={handleSubmit}
    >
      <div className="form-row mb-4">
        <label htmlFor="email">Email</label>
        <input
          className="w-full p-2 rounded-lg"
          type="email"
          name="email"
          id="email"
          placeholder="You@email.com"
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
          placeholder="Your password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="text-white mt-4" type="submit">
        Log In
      </button>

      <p className="text-center mt-4">
        Not a user?
        <Link to={'/signup'} className="pl-2 text-indigo-500">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
