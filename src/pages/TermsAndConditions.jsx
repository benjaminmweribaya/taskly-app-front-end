import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Terms and Conditions</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
        Welcome to Taskly! These terms outline the rules and regulations for using our platform.
      </p>
      
      <div className="space-y-6">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mt-2">By accessing or using Taskly, you agree to comply with these Terms and Conditions.</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">2. User Accounts</h2>
          <p className="text-gray-700 mt-2">You must create an account to use Taskly. You are responsible for maintaining the security of your account credentials.</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">3. Acceptable Use</h2>
          <p className="text-gray-700 mt-2">You agree not to use Taskly for unlawful or harmful activities, including spamming, hacking, or violating others' rights.</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">4. Intellectual Property</h2>
          <p className="text-gray-700 mt-2">All content, trademarks, and branding on Taskly belong to us or our partners. You may not copy or distribute without permission.</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">5. Limitation of Liability</h2>
          <p className="text-gray-700 mt-2">Taskly is provided "as is." We are not liable for any direct or indirect damages arising from its use.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;