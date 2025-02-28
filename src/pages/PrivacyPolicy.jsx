import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Privacy Policy</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
        Your privacy is important to us. This Privacy Policy outlines how Taskly collects, uses, and protects your information.
      </p>
      
      <div className="space-y-6">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">1. Information We Collect</h2>
          <p className="text-gray-700 mt-2">We collect information such as name, email address, and usage data to enhance your experience on our platform.</p>
        </div>
        
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">2. How We Use Your Information</h2>
          <p className="text-gray-700 mt-2">Your information is used to provide and improve our services, personalize your experience, and ensure account security.</p>
        </div>
        
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">3. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 mt-2">We use cookies to enhance user experience and analyze site traffic. You can manage cookie preferences in your browser settings.</p>
        </div>
        
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">4. Data Retention</h2>
          <p className="text-gray-700 mt-2">We retain your data as long as necessary for legal and business purposes. You may request data deletion at any time.</p>
        </div>
        
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">5. Your Responsibilities</h2>
          <p className="text-gray-700 mt-2">You are responsible for maintaining account security and protecting your login credentials.</p>
        </div>
        
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">6. Compliance and Legal Obligations</h2>
          <p className="text-gray-700 mt-2">We comply with applicable privacy laws and regulations to ensure your data is protected.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;