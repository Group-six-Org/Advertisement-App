import React from "react";
// import images from "./../assets/images/blender.jpg"
// import image2 from "./../assets/images/car.jpg"

const Dashoverv = () => {
 
  return (
   
    <div className="min-h-screen bg-gray-100 p-6">
    {/* Header */}
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Welcome, Vendor</h1>
      <p className="text-gray-600">
        Here’s a simple summary of your advertisements.
      </p>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Total Ads</h2>
        <p className="text-2xl font-bold">33</p>
      </div>
      <div className="bg-green-500 text-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold">For Rent</h2>
        <p className="text-2xl font-bold">18</p>
      </div>
      <div className="bg-yellow-500 text-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold">For Sale</h2>
        <p className="text-2xl font-bold">15</p>
      </div>
      <div className="bg-purple-500 text-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Total Views</h2>
        <p className="text-2xl font-bold">2300</p>
      </div>
    </div>

    {/* Recent Ads */}
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-3">Recent Adverts</h2>
      <div className="border-b py-2 flex justify-between">
        <span>Luxury Car</span>
        <span className="bg-green-200 text-green-700 px-2 py-1 rounded-full text-sm">
          6 Items
        </span>
      </div>
      <div className="border-b py-2 flex justify-between">
        <span> Real Estate & Property</span>
        <span className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded-full text-sm">
          5 Items
        </span>
      </div>
      <div className="border-b py-2 flex justify-between">
        <span> Home & Kitchen </span>
        <span className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded-full text-sm">
          8 Items
        </span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Electronics</span>
        <span className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded-full text-sm">
          15 Items
        </span>
      </div>
    </div>

    {/* Quick Actions */}
    <div className="flex flex-col md:flex-row gap-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Create New Ad
      </button>
      <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
        Manage My Ads
      </button>
      <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        View Analytics
      </button>
    </div>
  </div>

  );

};

export default Dashoverv;
