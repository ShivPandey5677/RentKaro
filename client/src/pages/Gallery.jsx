import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomedImageIndex, setZoomedImageIndex] = useState(0); // State for the zoomed image

  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  const flatInfo = {
    parking: true,
    veg: true,
    nonveg: false,
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setZoomedImageIndex(index); // Set the zoomed image index
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const ZoomedImageModal = ({ isOpen, imageSrc, closeModal }) => {
    return (
      isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 p-2 text-white hover:text-gray-300 focus:outline-none"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={imageSrc}
              alt={`Zoomed Image`}
              className="max-h-full max-w-full"
            />
          </div>
        </div>
      )
    );
  };
  
  const [searchTerm, setSearchTerm] = useState('');
  const properties = [1, 2, 3, 4]; 

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredProperties = properties.filter(property => {
    // Perform filtering based on your search logic
    return property.toString().includes(searchTerm);
  });
  return (
    <div>
      <div className="border border-gray-500 flex">
        <div className=" p-4 w-2/3 flex flex-wrap mt-8">
          {images.slice(0, 2).map((image, index) => (
            <div key={index} className="w-1/2 p-2 relative">
              <a href="">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full cursor-pointer border-2 border-gray-200 rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                  onClick={() => openModal(index)}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="border border-gray-500 flex flex-col justify-center items-center w-1/3 p-4 ml-40 mt-20 mb-20 mr-20">
          <h2 className="text-xl font-semibold mb-4">Flat/PG Information</h2>
          <ul>
            <li className="flex items-center mb-2">
              <span className="mr-2">{flatInfo.parking ? '🅿️ Parking Available' : '🚫 No Parking'}</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="mr-2">{flatInfo.veg ? '🥦 Veg Food Available' : '🚫 No Veg Food'}</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="mr-2">{flatInfo.nonveg ? '🍗 Non-Veg Food Available' : '🚫 No Non-Veg Food'}</span>
            </li>
          </ul>
        </div>
        <ZoomedImageModal
          isOpen={isOpen}
          imageSrc={images[zoomedImageIndex]}
          closeModal={closeModal}
        />
      </div>
      <div className="flex flex-col justify-center items-center p-4 mt-8">
        <h1 className="text-xl font-semibold mb-4">Tenants Details</h1>
        <select className="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>Select Preferences...</option>
          <option>Tenant 2</option>
          <option>Tenant 3</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center">
    {filteredProperties.map(property => (
      <PropertyCard key={property} />
    ))}
  </div>
    </div>
    
  );
};

export default Gallery;
