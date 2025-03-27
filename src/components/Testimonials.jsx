import React from "react";
import image from "../assets/images/cus 1.jpg";
import image1 from "../assets/images/cus 2.jpg";

const Testimonials = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">What Our Users Say</h2>
        <p className="text-gray-600 mt-2">
          See what our satisfied users have to say about our platform.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image}
              alt="User A"
              className="w-40 h-40 rounded-full mx-auto mb-3"
            />
            <p className="text-gray-700">
              "This platform has been amazing for my business!"
            </p>
            <h4 className="font-bold mt-2">- Araba</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image1}
              alt="User A"
              className="w-40 h-40 rounded-full mx-auto mb-3"
            />
            <p className="text-gray-700">
              "I've sold so many items quickly and easily!"
            </p>
            <h4 className="font-bold mt-2">- Noldy</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
