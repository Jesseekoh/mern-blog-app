const LoginForm = () => {
  return (
    <div className="login-form flex flex-col max-w-xl w-full mx-auto p-4">
      <div className="form-row mb-4">
        <label htmlFor="email">Email</label>
        <input
          className="w-full p-2 rounded-lg"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="form-row mb-3">
        <label htmlFor="password">Password</label>
        <input
          className="w-full p-2 rounded-lg"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <button className="text-white" type="submit">
        Log In
      </button>
    </div>
  );
};

export default LoginForm;
