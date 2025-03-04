import React from "react";
import DrawingImage from "../assets/Drawing.jpg";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Taskly</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
        Taskly is a comprehensive task management system designed to streamline and optimize organizational task tracking, assignment, and completion.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">Our Mission</h2>
          <p className="text-gray-700 mt-2">
            To enhance productivity and collaboration by providing an intuitive and powerful task management system that simplifies work processes.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">Our Vision</h2>
          <p className="text-gray-700 mt-2">
            To be the leading platform for task management, fostering efficiency, teamwork, and seamless project execution for teams worldwide.
          </p>
        </div>
      </div>

      <div className="mt-12 p-6 bg-blue-100 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">Why Choose Taskly?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="space-y-4">
            {[
              "Seamless task assignment and tracking.",
              "Real-time notifications and updates.",
              "Enhanced collaboration with team messaging.",
              "Comprehensive analytics for performance tracking.",
              "Robust security measures ensuring data privacy.",
              "Seamless integration with other productivity tools.",
              "User-friendly interface for easy navigation.",
              "Cost-effective pricing model.",
              "24/7 support for customer satisfaction.",
            ].map((feature, index) => (
              <div key={index} className="p-4 bg-white shadow-md rounded-lg flex items-center">
                <span className="text-blue-600 text-xl font-semibold mr-3">✔</span>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src={DrawingImage}
              alt="Illustration of Taskly features"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;