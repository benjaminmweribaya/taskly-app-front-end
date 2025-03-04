import React from 'react';

const Accessibility = () => {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Accessibility Statement</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
          Taskly is committed to ensuring our platform is accessible to all users, including those with disabilities.
        </p>
        
        <div className="space-y-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500">1. Commitment to Accessibility</h2>
            <p className="text-gray-700 mt-2">We strive to make Taskly compliant with Web Content Accessibility Guidelines (WCAG) 2.1.</p>
          </div>
  
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500">2. Features for Accessibility</h2>
            <p className="text-gray-700 mt-2">Our platform includes keyboard navigation, screen reader compatibility, and adjustable text sizes.</p>
          </div>
  
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500">3. Reporting Issues</h2>
            <p className="text-gray-700 mt-2">If you experience any accessibility issues, please contact us at <span className="text-blue-500">support@taskly.com</span>.</p>
          </div>
        </div>
      </div>
    );
  };

  export default Accessibility;