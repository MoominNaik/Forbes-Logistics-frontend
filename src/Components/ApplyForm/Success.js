// Success.js
import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center p-8">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Application Submitted!</h1>
      <p className="text-lg text-gray-700 mb-6">Your application has been received. We’ll contact you soon.</p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Success;