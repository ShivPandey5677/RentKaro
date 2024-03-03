import React from 'react';

const SupportSection = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Support</h2>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4a4 4 0 100 8 4 4 0 000-8z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-600">Our Support Center is located at:</p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zM9 14.879V12a1 1 0 112 0v2.879a4.5 4.5 0 11-2 0zM5 10a1 1 0 112 0c0 1.732 1.117 3.069 2.482 3.758.39.174.83.26 1.302.26s.913-.086 1.302-.26C11.883 13.069 13 11.732 13 10a1 1 0 112 0c0 2.118-1.463 4.183-3.605 5.245a.75.75 0 01-.79 0C6.463 14.183 5 12.118 5 10zm5-8a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-600">123 Street Name, City, Country</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
