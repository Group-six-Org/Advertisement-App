import React from "react";


const VendorAds = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100">
    {/* Banner Section */}
    <div className="bg-green-500 h-64 flex items-center justify-center text-white text-center">
      <div className="bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-2xl font-bold">Welcome to Vendor Dashboard</h1>
        <p className="font-bold">The best site to market and manage all your products</p>
        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg">
          Offer Discount
        </button>
      </div>
    </div>

    {/* First Grid Section - Cars */}
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="./asset/images/car.jpg" alt="Car" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold">Toyota Land Cruiser</h2>
              <p className="text-gray-600">GHs 250,000.00</p>
              <div className="mt-4 flex justify-between">
                <button className="bg-black text-white px-4 py-2 rounded">Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    

    {/* Third Grid Section - Electronics */}
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Electronics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="./asset/images/electronics.jpg" alt="Electronics" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold">Electronics Item</h2>
              <p className="text-gray-600">GHs 5,000.00</p>
              <div className="mt-4 flex justify-between">
                <button className="bg-black text-white px-4 py-2 rounded">Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
    
  )
  
};

export default VendorAds;
