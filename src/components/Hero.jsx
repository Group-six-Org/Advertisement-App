import React from "react";
import { Link } from "react-router";
import image from "../assets/images/hero1.jpg";

const Hero = () => {
  return (
    <section className="text-white py-20 text-center  bg-green-600">
      <img src={image} alt="Hero 1" className="w-full h-60 object-cover" />
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-5xl font-bold leading-tight py-7">
          Post, Manage and Browse Ads with ease!
        </h1>
        <p className="text-lg mt-4">
          Discover amazing deals and post your ads effortlessly on our platform.
        </p>

        {/* Call-to-Action (CTA) Buttons */}
        <div className="mt-6 space-x-4">
          <Link
            to="/signup"
            className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold"
          >
            Browse Ads
          </Link>
          <Link
            to="/dashboard/create-ad"
            className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
          >
            Post an Ad
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
