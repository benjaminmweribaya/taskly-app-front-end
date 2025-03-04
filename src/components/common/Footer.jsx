import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaXTwitter, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 p-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-lg">Join us to get the latest updates on upcoming events.</p>
          <div className="flex flex-col md:flex-row items-center justify-center mt-4">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 w-full md:w-80 rounded-l-md border-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
          <small className="text-gray-400 block mt-2">
            By signing up you agree to our <a href="/privacy-policy" className="underline">privacy policies.</a>
          </small>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-lg font-semibold mb-3">Navigation Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Official Links</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/accessibility" className="hover:underline">Accessibility</a></li>
              <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Contacts</h4>
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <FaEnvelope />
              <a href="mailto:info.taskly@gmail.com" className="hover:underline">info.taskly@gmail.com</a>
            </div>
            <div className="flex items-center space-x-2 mt-2 justify-center md:justify-start">
              <FaPhone />
              <a href="tel:+254700754234" className="hover:underline">+254 700 754 234</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Follow us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com/TasklyWebApp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaFacebookF size={24} />
              </a>
              <a href="https://instagram.com/TasklyWebApp" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://tiktok.com/@TasklyWebApp" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaTiktok size={24} />
              </a>
              <a href="https://youtube.com/@TasklyWebApp" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
                <FaYoutube size={24} />
              </a>
              <a href="https://x.com/TasklyWebApp" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaXTwitter size={24} />
              </a>
              <a href="https://linkedin.com/company/TasklyWebApp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-400">
          &copy; {new Date().getFullYear()} Taskly. All Rights Reserved.
        </div>
      </div>
    </footer >
  );
};

export default Footer;
