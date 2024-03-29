import React from 'react';
import { Link } from 'react-router-dom';

const LoginPopup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-80 z-50">
      <div className="bg-white p-8 rounded-md flex flex-col  items-center">
        
        <div className = "flex flex-col">
        <div className="border-2 border-blue-500 rounded-md p-4 m-4">
            <div clasname="justify-center">
          <p className="text-blue-500 text-lg font-semibold mb-2">Tenant Section</p>
          </div>
          <Link to ="/login">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mr-4" onClick={() => console.log("Tenant login clicked")}>Login</button>
          </Link>
        </div>

        <div className="border-2 border-blue-500 rounded-md p-4 m-4">
          <p className="text-blue-500 text-lg font-semibold mb-2">Owner Section</p>
          <Link to ="/login">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" onClick={() => console.log("Owner login clicked")}>Login</button>
          </Link>
        </div>
        </div>
        <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg m-4" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginPopup;
