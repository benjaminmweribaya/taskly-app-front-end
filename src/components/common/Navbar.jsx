import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../auth/LoginModal.jsx";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-12 p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Logo" className="h-10" />
        <span className="ml-2 text-lg font-semibold text-gray-800">Taskly</span>
      </div>

      {/* Navigation Links */}
      <ul className={`md:flex hidden space-x-6 text-gray-700`}>
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
        <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 py-4">
          <li><Link to="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Homepage</Link></li>
          <li><Link to="/about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          <li><Link to="/services" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Services</Link></li>
        </ul>
      )}

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <button
          onClick={() => navigate("/signup")}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Join
        </button>
        <button
          onClick={() => setLoginModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && <LoginModal onClose={() => setLoginModalOpen(false)} />}
    </nav>
  );
};

export default Navbar;
