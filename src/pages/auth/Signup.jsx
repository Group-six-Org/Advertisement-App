import React from "react";
import { apiSignup } from "../../services/auth";

const SignUp = () => {
  const handleSubmit = async (data) => {
    const payload = {
      firstName: data.firstname,
      lastName: data.lastname,
    };
    try {
      await apiSignup();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Vendor Sign Up
        </h2>

        <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700">
                Business Name *
              </label>
              <input
                type="text"
                name="businessName"
                placeholder="Enter business name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Owner's Name *
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="ownerFirstName"
                  placeholder="First Name"
                  className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="ownerLastName"
                  placeholder="Last Name"
                  className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Business Location *
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Contact Number *
              </label>
              <input
                type="tel"
                name="contact"
                placeholder="Enter phone number"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700">
                Business Website / Social Media *
              </label>
              <input
                type="text"
                name="website"
                placeholder="Website or social media link"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Email *
              </label>
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
                Product Type & Description *
              </label>
              <textarea
                name="description"
                placeholder="Describe your products"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="2"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Product Quantity *
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Number of products available"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Full-Width Button */}
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full max-w-sm bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
