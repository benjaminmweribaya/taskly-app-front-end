import React from "react";

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

      <div className="mt-12 p-6 bg-blue-100 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-blue-700">Why Choose Taskly?</h2>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>Seamless task assignment and tracking.</li>
          <li>Real-time notifications and updates.</li>
          <li>Enhanced collaboration with team messaging.</li>
          <li>Comprehensive analytics for performance tracking.</li>
          <li>Robust security measures ensuring data privacy.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;