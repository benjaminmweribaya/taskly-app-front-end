import React from "react";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    if (onClose) onClose();
    navigate("/signup");
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Close when clicking outside the modal
    >
      <div
        className="relative bg-white p-6 shadow-lg rounded-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Login to Taskly
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

          <button
            type="button"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Continue with Google
          </button>

          <p className="text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <span
              onClick={handleSignupRedirect}
              className="text-blue-500 hover:underline cursor-pointer">
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;