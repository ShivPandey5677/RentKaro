import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  console.log(property.imageURL);

  return (
    <div className="max-w-md rounded overflow-hidden shadow-2xl bg-gray-800 relative transition duration-300 transform hover:scale-105 my-8 mx-4">
      <img className="w-full h-auto object-cover" src={"/uploads/" + property.imageURL} alt="Property" />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex items-center justify-center opacity-0 transition duration-300 hover:opacity-100">
        <Link
          to= "/viewproperty"
           state={{ propertyData:property}}
        >
          <button className="px-4 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-300 transition duration-300">
            View More
          </button>
        </Link>
      </div>
      <div className="px-6 py-4 flex flex-col">
        <div className="font-bold text-white text-xl mb-2">Property Details</div>
        <div className="flex flex-col">
          <div className="flex felx-col">
            <h2 className="text-gray-300 text-xl">Name:</h2>
            <p className="text-gray-300 px-4 mt-1">{property.name}</p>
          </div>
          <div className="flex felx-col">
            <h2 className="text-gray-300 text-xl">Rent:</h2>
            <p className="text-gray-300 px-4 mt-1">{property.rent1}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
