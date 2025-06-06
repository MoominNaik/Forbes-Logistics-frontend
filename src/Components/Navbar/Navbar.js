import React from 'react';
import logo from "../../Components/Assets/logo.jpeg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-[#2e130a] shadow-md h-28">
      <div className="max-w-screen-xl mx-auto px-6 py-0 flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start justify-center h-full">
          <img src={logo} alt="Forbes Logo" className="h-full w-40 object-contain" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-10 text-[17px] font-medium tracking-wide items-center">
          <a
            href="aboutUs"
            className="text-[#F4EDE5] hover:text-red-400 transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="operations"
            className="text-[#F4EDE5] hover:text-red-400 transition-colors duration-300"
          >
            Operations
          </a>
          <a
            href="careers"
            className="text-[#F4EDE5] hover:text-red-400 transition-colors duration-300"
          >
            Careers
          </a>
          <a
            href="contactUs"
            className="text-[#F4EDE5] hover:text-red-400 transition-colors duration-300"
          >
            Contact Us
          </a>

          {/* Apply Now Button */}
          <Link
            to="/careers"
            className="ml-6 bg-gradient-to-r from-brown-500 to-red-400 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;