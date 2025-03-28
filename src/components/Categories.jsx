import React from "react";
import { Link } from "react-router";
import image1 from "./../assets/images/car 1.jpg";
import image2 from "./../assets/images/car 2.jpg";
import image3 from "./../assets/images/home 1.jpg";
import image4 from "./../assets/images/home 2.jpg";
import image5 from "./../assets/images/iphone.jpg";
import image6 from "./../assets/images/car 3.jpg";
import image7 from "./../assets/images/car 4.jpg";
import image8 from "./../assets/images/home 3.jpg";
import image9 from "./../assets/images/headset.jpg";
import image10 from "./../assets/images/blender.jpg";

const Categories = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto object-contain">
        <h2 className="text-center text-3xl text-gray-800 font-bold mb-6">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-3">
          {/* Vehicles */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-center">Vehicles</h3>
            <div className="grid grid-cols-2 gap-2 py-3">
              <img
                src={image1}
                alt="Vehicle 1"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
              <img
                src={image2}
                alt="Vehicle 2"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
              <img
                src={image6}
                alt="Vehicle 1"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
              <img
                src={image7}
                alt="Vehicle 1"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Houses */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-center">Real Estates</h3>
            <div className="grid grid-cols-2 gap-2 py-3">
              <img
                src={image3}
                alt="House 1"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
              <img
                src={image4}
                alt="House 2"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
              <img
                src={image8}
                alt="Vehicle 1"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
              <img
                src={image3}
                alt="Vehicle 1"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Electronics */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-center">Electronics</h3>
            <div className="grid grid-cols-2 gap-2 py-3">
              <img
                src={image5}
                alt="Electronic 1"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
              <img
                src={image9}
                alt="Electronic 2"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
              <img
                src={image10}
                alt="Vehicle 1"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
              <img
                src={image5}
                alt="Vehicle 1"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <Link
          to="/signup"
          className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
        >
          Explore More Ads
        </Link>
      </div>
    </section>
  );
};

export default Categories;
