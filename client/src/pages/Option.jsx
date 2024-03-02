import React from 'react';

const Option = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-blue-400 flex justify-center items-center">
        <button className="bg-white text-blue-400 hover:bg-blue-200 hover:text-white text-4xl font-bold py-4 px-8 rounded-lg">
        <a href="https://wa.me/7457012139" target="_blank" rel="noopener noreferrer">
        Tenants
        </a>
          
        </button>
      </div>
      <div className="flex-1 bg-blue-600 flex justify-center items-center">
        <button className="bg-white text-blue-600 hover:bg-blue-400 hover:text-white text-4xl font-bold py-4 px-8 rounded-lg">
          Owners
        </button>
      </div>
    </div>
  );
};

export default Option;
