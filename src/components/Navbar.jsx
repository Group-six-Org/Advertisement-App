import React from "react";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-600 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-semibold text-orange-600 italic">
          Ad <span className="text-white italic">Mingle</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu Items (Hidden on mobile unless toggled) */}
        <div
          className={`md:flex md:items-center space-x-6 absolute md:static bg-green-600 w-full md:w-auto left-0 top-16 px-6 py-4 md:p-0 transition-all ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            {/* <li>
              <Link to="/ads" className="hover:underline">
                Browse Ads
              </Link>
            </li> */}
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            <Link to="/login" className="hover:underline font-bold">
              Login In/ Register
            </Link>
            <Link
              to="/signup"
              className="bg-orange-500 text-white px-6 py-3 rounded-md font-bold"
            >
              SELL
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
