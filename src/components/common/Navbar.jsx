import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Logo" className="h-10" />
        <span className="ml-2 text-lg font-semibold text-gray-800">logo</span>
      </div>
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li><a href="/" className="hover:text-blue-600">Homepage</a></li>
        <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
        <li><a href="/contact" className="hover:text-blue-600">Contact Us</a></li>
        <li><a href="/services" className="hover:text-blue-600" >Services</a></li>
      </ul>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">Join</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Start</button>
      </div>
    </nav>
  );
};

export default Navbar;
