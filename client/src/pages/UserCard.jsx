import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-2xl bg-gray-800 relative transition duration-300 transform hover:scale-105 my-8 mx-auto">
      <img className="w-auto h-48 object-cover" src="https://via.placeholder.com/800x400" alt="User" />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex items-center justify-center opacity-0 transition duration-300 hover:opacity-100">
        <Link to="/reportfraud">
        <button className="px-4 py-2 bg-red-500 text-gray-800 font-semibold rounded hover:bg-gray-300 transition duration-300 mr-4">Report</button>
        </Link>
        <button className="px-4 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-300 transition duration-300">Contact</button>
      </div>
      <div className="px-4 py-2 flex flex-col">
        <div className="font-bold text-white text-xl mb-2">User Details</div>
        <div className="flex flex-col">
          <div className="flex flex-col">
           
            <p className="text-gray-300 px-2 mt-1">Pandu shiv</p> 
          </div>
          <div className="flex flex-col">
            
            <p className="text-gray-300 px-2 mt-1">pandu@example.com</p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
