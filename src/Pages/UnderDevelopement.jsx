import React from 'react';
import { Wrench } from 'lucide-react';

const UnderDevelopment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-yellow-100 rounded-full">
            <Wrench size={40} className="text-yellow-600" />
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Page Under Development
        </h1>
        <p className="text-gray-600 mb-4">
          We're working hard to finish this page. Please check back soon!
        </p>
        <button
          onClick={() => window.history.back()}
          className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UnderDevelopment;
