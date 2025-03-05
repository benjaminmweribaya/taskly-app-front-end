import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        "https://taskly-app-q35u.onrender.com/register",
        values
      );
      console.log("Signup Success:", response.data);

      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setErrors({ api: error.response.data.error || "Signup failed" });
      }
    }
    setSubmitting(false);

  };

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
              <div>
                <label className="block text-gray-600 text-sm font-semibold">Email</label>
                <Field type="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-semibold">Password</label>
                <Field type="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                {isSubmitting ? "Signing up..." : "Sign up"}
              </button>
              <p className="text-sm text-gray-600 text-center">
                Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
