import React from "react";
import { apiLogin } from "../../services/auth";
import { useNavigate } from "react-router";

const Login = () => {
  const nagivate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await apiLogin(formData);

      localStorage.setItem("token", response.data.accessTokenLogin);

      console.log(response);
      nagivate("/adverts");
      alert("successful");
    } catch (error) {
      console.log(error);
      alert("failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Login
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your credentials to access your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
            required
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-green-600 font-semibold hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
