import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    if (onClose) onClose();
    navigate("/signup");
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-6 shadow-lg rounded-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
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

        <Formik
          initialValues={{ identifier: "", password: "" }}
          validationSchema={Yup.object({
            identifier: Yup.string().required("Email or Username is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              const response = await axios.post(
                "https://taskly-app-q35u.onrender.com/login",
                values
              );
              localStorage.setItem("access_token", response.data.access_token);
              localStorage.setItem("refresh_token", response.data.refresh_token);

              navigate("/dashboard");
              if (onClose) onClose();
            } catch (error) {
              setErrors({ api: error.response?.data?.error || "Login failed" });
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form className="space-y-4">
              {errors.api && (
                <div className="text-red-500 text-sm">{errors.api}</div>
              )}
              <div>
                <label className="block text-gray-600 text-sm font-semibold">
                  Email or Username
                </label>
                <Field
                  type="text"
                  name="identifier"
                  placeholder="Enter email or username"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="identifier"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm font-semibold">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
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
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Sign Up
                </span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginModal;