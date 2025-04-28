const LoginForm = () => {
  return (
    <div className="w-full mx-auto flex flex-col items-center p-8">
      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        className="mb-4 p-2 w-full bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        className="mb-4 p-2 w-full bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Remember Me and Forgot Password */}
      <div className="flex justify-between w-full mb-6">
        <label className="flex items-center text-sm">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Forgot password?
        </a>
      </div>

      {/* Login Button */}
      <button className="w-full p-2 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 transition duration-300">
        Login
      </button>
    </div>
  );
};

export default LoginForm;
