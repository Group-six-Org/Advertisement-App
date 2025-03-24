import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Login
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your credentials to access your account.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
