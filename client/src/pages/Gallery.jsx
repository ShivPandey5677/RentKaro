import React, { useState } from 'react';

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

  return (
    <div className="flex">
      <div className="w-2/3 flex flex-wrap">
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
      <div className="w-1/3 p-4">
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
  );
};

export default Gallery;
