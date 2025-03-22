import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        <p className="text-gray-600 mt-2">
          We are a trusted platform connecting buyers and sellers, making it
          easy to find and advertise products. Our mission is to provide a
          seamless and secure marketplace for everyone.
        </p>

        <img
          src="your-image-url.jpg"
          alt="About Us Image"
          className="w-full md:w-1/2 h-auto mx-auto my-6 rounded-lg shadow-lg"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="text-gray-500 mt-2">
              To become the most reliable marketplace for people looking to buy
              and sell goods conveniently.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Why Choose Us?</h3>
            <p className="text-gray-500 mt-2">
              Secure transactions, easy listing process, and a large audience
              for your ads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
