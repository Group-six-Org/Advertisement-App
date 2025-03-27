import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full bg-green-600 text-white p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-semibold text-orange-600 italic">
          Ad <span className="text-white italic">Mingle</span>
        </Link>

        {/* Nav Links and Auth Buttons in One Flex Container */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
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
            <li>
              <Link to="/ads" className="hover:underline">
                Browse Ads
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="hover:underline font-bold">
              LOGIN IN
            </Link>
            <Link
              to="/signup"
              className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
