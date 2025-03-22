import React from "react";
import { Link } from "react-router";

const Cta = () => {
  return (
    <section className="bg-gray-100 text-white py-12 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Get Started Today!</h2>
        <p className="text-lg mt-2">
          Join thousands of users already benefiting from our platform.
        </p>
        <Link
          to="/signup"
          className="bg-white text-green-500 px-6 py-3 mt-4 inline-block font-bold rounded-md"
        >
          Sign Up Now
        </Link>
      </div>
    </section>
  );
};

export default Cta;
