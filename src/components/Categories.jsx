import React from "react";
import image1 from "./../assets/images/car 1.jpg";
import image2 from "./../assets/images/car 2.jpg";
import image3 from "./../assets/images/home 1.jpg";
import image4 from "./../assets/images/home 2.jpg";
import image5 from "./../assets/images/iphone.jpg";

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
                src={image1}
                alt="Vehicle 1"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
              <img
                src={image1}
                alt="Vehicle 1"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Houses */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-center">Houses</h3>
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
                src={image1}
                alt="Vehicle 1"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
              <img
                src={image1}
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
                src={image5}
                alt="Electronic 2"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
              <img
                src={image1}
                alt="Vehicle 1"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
              <img
                src={image1}
                alt="Vehicle 1"
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
