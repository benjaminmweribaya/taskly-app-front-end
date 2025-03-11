import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Menu, X } from "lucide-react";
import TasklyLogo from "../../assets/TasklyLogo.jpg";

const Navbar = ({ onLogin }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md py-12 p-4 flex justify-between items-center">

      {/* Clickable and Enlarged Taskly Logo (No Shadow) */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={TasklyLogo}
            alt="Taskly Logo"
            className="h-16 w-auto brightness-110 transition-transform transform hover:scale-105"
          />
        </Link>
        <span className="ml-2 text-xl font-bold text-gray-800"></span>
      </div>

      <ul className="md:flex hidden space-x-6 text-gray-700">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
        <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
      </ul>

      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 py-4">
          <li><Link to="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Homepage</Link></li>
          <li><Link to="/about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          <li><Link to="/services" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Services</Link></li>
        </ul>
      )}

      <div className="hidden md:flex space-x-4">
        {user ? (
          <>
            {location.pathname === "/" && (
              <button
                onClick={() => navigate("/workspace")}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 font-bold"
              >
                My Workspace
              </button>
            )}
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Join
            </button>
            <button
              onClick={onLogin}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
