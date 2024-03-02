import React from 'react';

const Option = ({ type, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="bg-gray-800 bg-opacity-50 fixed top-0 left-0 w-full h-full"></div> {/* Background overlay */}
      <div className="relative bg-white rounded-lg p-8">
        <div className="flex flex-col items-center justify-center">
          <div className="text-black text-4xl font-bold mb-4">
            {type === "tenant" ? "Tenants" : "Owners"}
          </div>
          <button className="bg-blue-400 text-white hover:bg-blue-600 font-bold py-2 px-4 rounded-lg mb-4" onClick={onClose}>
            {type === "tenant" ? "Contact Tenants" : "Contact Owners"}
          </button>
          <button className="bg-gray-400 text-white hover:bg-gray-600 font-bold py-2 px-4 rounded-lg" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Option;
