import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import LoginModal from "./LoginModal";

const Signup = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        "https://taskly-app-9u0e.onrender.com/register/",
        values
      );
      console.log("Signup Success:", response.data);

      const { user, access_token } = response.data;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("access_token", access_token);

      //await axios.post("https://taskly-app-q35u.onrender.com/send-verification-email", { email: values.email });

      setRedirect(true);
    } catch (error) {
      if (error.response) {
        setErrors({ api: error.response.data.error || "Signup failed. Please try again." });
      }
    }
    setSubmitting(false);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (redirect && user?.workspace_id) {
      navigate(`/workspace/${user.workspace_id}`);
    }
  }, [redirect, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Create an Account</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting, errors }) => (
            <Form className="space-y-4">
              {errors.api && <p className="text-red-500 text-sm">{errors.api}</p>}
              <div>
                <label className="block text-gray-600 text-sm font-semibold">Username</label>
                <Field type="text" name="username" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="relative">
                <label className="block text-gray-600 text-sm font-semibold">Email</label>
                <Field type="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-semibold">Password</label>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <button type="button" onClick={togglePassword} className="absolute right-3 top-3">
                    {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                  </button>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="relative">
                <label className="block text-gray-600 text-sm font-semibold">Confirm Password</label>
                <div className="relative">
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <button type="button" onClick={toggleConfirmPassword} className="absolute right-3 top-3">
                    {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                  </button>
                </div>
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                {isSubmitting ? "Signing up..." : "Sign up"}
              </button>
              <p className="text-sm text-gray-600 text-center">
                Already have an account?  <span className="text-blue-500 hover:underline cursor-pointer" onClick={() => setShowLoginModal(true)}>Log in</span>
              </p>
            </Form>
          )}
        </Formik>
      </div>

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </div>
  );
};

export default Signup;
