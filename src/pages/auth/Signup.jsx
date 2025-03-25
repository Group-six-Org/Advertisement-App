import React from "react";
import image from "../../assets/images/signup-bg.jpg";
import { apiSignupVendor } from "../../services/auth";

const SignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const res = await apiSignupVendor(formData, {
        Headers: {
          "Content-type": "application/json",
        },
      });
      alert("this load was successfull");
      console.log(res);
    } catch (error) {
      console.log(error);
      alert("failed");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full h-64 md:h-96">
        <img
          src={image}
          alt="signup bg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter first name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter last name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Email & Password */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                User Name
              </label>
              <input
                name="userName"
                type="text"
                placeholder="Enter last name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Email *
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Password *
              </label>
              <input
                name="password"
                type="password"
                placeholder="Create a password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Confirm Password *
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Confirm Password & Role Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Sign Up As *
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none">
                <option>User</option>
                <option>Vendor</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 text-sm mt-3">
            Already have an account?{" "}
            <a href="#" className="text-green-600 font-medium hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
