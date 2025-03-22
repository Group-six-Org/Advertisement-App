import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-orange-500 text-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight py-7">
          View, Post, Manage and Browse Ads with ease!
        </h1>
        <p className="text-lg mt-4">
          Discover amazing deals and post your ads effortlessly on our platform.
        </p>

        {/* Call-to-Action (CTA) Buttons */}
        <div className="mt-6 space-x-4">
          <Link
            to="/adverts"
            className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold"
          >
            Browse Ads
          </Link>
          <Link
            to="/dashboard/create-ad"
            className="bg-gray-800 text-white px-6 py-3 rounded-md font-semibold"
          >
            Post an Ad
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
