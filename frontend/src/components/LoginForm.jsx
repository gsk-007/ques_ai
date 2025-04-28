import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate("/");
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please fill all the details!");
      return;
    }

    try {
      await login(email, password);
      navigate("/");
      toast.success("Logic Successful");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="w-full mx-auto flex flex-col items-center p-8">
      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 p-2 w-full bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
      <button
        onClick={handleLogin}
        className="w-full p-2 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 transition duration-300"
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
