import React from "react";

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
            By signing up you agree to our <a href="/privacy" className="underline">privacy policies.</a>
          </small>
        </div>
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Navigate</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
            </ul>
          </div>

          {/* Official Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Official</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:underline">Privacy</a></li>
              <li><a href="/accessibility" className="hover:underline">Accessibility</a></li>
              <li><a href="/faqs" className="hover:underline">FAQs</a></li>
              <li><a href="/terms" className="hover:underline">Terms</a></li>
              <li><a href="/contacts" className="hover:underline">Contacts</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Social</h4>
            <ul className="space-y-2">
              <li>📸 <a href="#" className="hover:underline">taskly</a></li>
              <li>🐦 <a href="#" className="hover:underline">taskly</a></li>
              <li>📧 <a href="mailto:info.taskly@gmail.com" className="hover:underline">info.taskly@gmail.com</a></li>
              <li>📞 <a href="tel:+254700754234" className="hover:underline">+254 700 754 234</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-400">
          &copy; {new Date().getFullYear()} Taskly. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
