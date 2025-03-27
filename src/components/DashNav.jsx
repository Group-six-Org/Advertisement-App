import React from "react";
import { Link } from "react-router";

const DashNav = () => {
  return (
    <div className="bg-green-600">
    {/* Container to center content */}
    <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left: Logo & Brand Name */}
      <div className="flex items-center">
        {/* Text-based logo with “Ad” in orange and “Mingle” in white */}
        <h1 className="text-lg md:text-xl font-bold ">
          <span className="text-orange-500 italic">Ad</span>
          <span className="text-white italic"> Mingle</span>
        </h1>
      </div>

      {/* Middle: Search Bar */}
      <div className="w-full md:w-1/2 mt-3 md:mt-0 md:mx-4">
        <input
          type="text"
          placeholder="What are you looking for..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
        />
      </div>

      {/* Right: Login & Post Ad Buttons */}
      <div className="flex items-center mt-3 md:mt-0 space-x-4">
        {/* <button className="text-white font-semibold hover:underline">
          Log in
        </button> */}
        {/* <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-600">
          POST AD
        </button> */}
      </div>
    </div>
  </div>

  );
};

export default DashNav;

