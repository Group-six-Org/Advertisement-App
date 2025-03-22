import React from "react";
import { Link } from "react-router";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-600 py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold text-orange-600 italic">
            Ad <span className="text-white italic">Mingle</span>
          </h2>
          <p className="text-white mt-2">Connecting Buyers with Sellers</p>
          <p className="text-white text-sm mt-4">© 2025 AdMingle</p>
        </div>

        <div className="text-white text-sm">
          <p className="font-semibold">About Us</p>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/how-it-works" className="hover:underline">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/why-vdl" className="hover:underline">
                Why VDL?
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white text-sm">
          <p className="font-semibold">Home</p>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4 items-end">
          <a
            href="#"
            className="bg-orange-600 text-white px-6 py-2 rounded-md text-sm flex items-center space-x-2"
          >
            <span>Contact Us</span>
            <span>→</span>
          </a>
          <div className="flex space-x-4 text-white">
            <Link to="#">
              <Instagram className="hover:text-gray-900" size={20} />
            </Link>
            <Link to="#">
              <Facebook className="hover:text-gray-900" size={20} />
            </Link>
            <Link to="#">
              <Linkedin className="hover:text-gray-900" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
