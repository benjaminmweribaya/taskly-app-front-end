import React from "react";

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Our Services</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
        Taskly provides a range of services to help teams streamline their workflow, enhance collaboration, and improve productivity.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-500">Task Assignment</h2>
          <p className="text-gray-700 mt-2">Easily assign tasks to team members and track their progress efficiently.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-500">Collaboration</h2>
          <p className="text-gray-700 mt-2">Enhance teamwork with seamless communication and shared project spaces.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-500">Real-time Notifications</h2>
          <p className="text-gray-700 mt-2">Stay updated with instant notifications about task updates and deadlines.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-500">Analytics & Insights</h2>
          <p className="text-gray-700 mt-2">Track team performance with detailed reports and insights.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-500">Integration</h2>
          <p className="text-gray-700 mt-2">Seamlessly integrate with other productivity tools like Slack, Trello, and Google Drive.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-500">Security & Compliance</h2>
          <p className="text-gray-700 mt-2">Ensure data privacy with top-tier security protocols and compliance standards.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;