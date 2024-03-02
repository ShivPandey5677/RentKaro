import React from 'react';
import { FaHome } from 'react-icons/fa';
import Gallery from './Gallery';


const View = () => {
  return (
    <div className=" mx-auto bg-white shadow-md min-h-screen bg-white ">
      <div className="flex">
        <div className="flex justify-center items-center">
          <FaHome className="h-12 w-12 text-gray-900" />
        </div>
        <div className="flex-1 p-8 flex">
          <div className="flex-1 flex justify-between">
            <div className="flex-1 uppercase tracking-wide text-sm text-gray-500 font-semibold m-4">Name</div>
            <div className="flex-3 mt-2 text-gray-600 m-4">Location</div>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex">
            <div className="flex-1 flex flex-col items-center m-4">
              <span className="text-gray-700">Rent:</span>
              <span className="ml-2">1000</span>
            </div>
            <div className="flex-1 flex flex-col items-center m-4">
              <span className="text-gray-700">Deposit:</span> <span className="ml-2">12000</span>
            </div>
            <div className="flex-2 m-4">
              <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span>Get Owner Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Gallery/>
    </div>

  );
}

export default View;
