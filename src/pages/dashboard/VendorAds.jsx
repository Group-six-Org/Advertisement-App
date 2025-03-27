import React, { useEffect, useState } from "react";
import image from "../../assets/images/car 1.jpg";
import { Await, Link } from "react-router";
import {
  apiDeleteVendorAdvertbyId,
  apiGetVendorAdverts,
} from "../../services/adverts";

const VendorAds = () => {
  const navigate = useState;
  const [ads, setAds] = useState([]);

  const getAds = async () => {
    try {
      const response = await apiGetVendorAdverts();
      setAds(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAds();
  }, []);

  const handleDelete = async (id) => {
    //delete advert from backend
    try {
      const response = await apiDeleteVendorAdvertbyId(id);
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100">
      {/* Banner Section */}
      <div className="bg-green-500 h-64 flex items-center justify-center text-white text-center">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-2xl font-bold">Welcome to Vendor Dashboard</h1>
          <p className="font-bold">
            The best site to market and manage all your products
          </p>
          <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg">
            Offer Discount
          </button>
        </div>
      </div>

      {/* First Grid Section - Cars */}
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ads.map((ads) => (
            <div
              key={ads.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={`https:res.cloudinary.com/dw2xxofdt/image/upload/${ads.pictures[0]}`}
                alt="Car"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{ads.name}</h2>
                <div className="flex aligi-center justify-between">
                  <p className="text-gray-600">{ads.title}</p>
                  <p className="text-gray-800"> price: {ads.price}</p>
                </div>
                <div className="mt-4 flex justify-between">
                  <Link to={`/dashboard/editForm/${ads.id}`}>
                    <button className="bg-green-600 text-white px-4 py-2 rounded">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(ads.id)}
                    className="bg-orange-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Grid Section - Electronics */}
      {/* <div className="container mx-auto py-10 px-4">
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
    </div> */}
    </div>
  );
};

export default VendorAds;
