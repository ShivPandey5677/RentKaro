import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';
import { makeRequest } from '../axios';

const Gallery = ({property}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomedImageIndex, setZoomedImageIndex] = useState(0); // State for the zoomed image

  const [searchTerm, setSearchTerm] = useState('');
  const [propert, setProperty] = useState({type:0}); 
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state
  const [error, setError] = useState(null);
  const handleInputChange = (field, value) => {
    setProperty(prevState => ({
      ...prevState,
      [field]: value
    }));
  };
  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const response = await makeRequest.get('/user', { params: propert });
      setFilteredProperties(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  const images = [
  "/uploads/" + property.imageURL
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
  
  const ammeneties = [property.ammenity1,property.ammenity2]; 

  
  // const filteredProperties = properties.filter(property => {
  //   // Perform filtering based on your search logic
  //   return property.toString().includes(searchTerm);
  // });
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
          { ammeneties.map((ammenity,index)=>(<li key={index} className="flex items-center mb-2">
              <span className="mr-2">{ammenity}</span>
            </li>))}
          
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
        <Link to="/addtenant">
        <button className="border border-gray-900 rounded mb-6 p-2 hover:bg-gray-500 hover:text-white">Add Yourself As Tenant</button>
        </Link>
        {/* <select className="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>Select Preferences...</option>
          <option>Student</option>
          <option>Working</option>
          <option>No Preference</option>
        </select> */}
          <div>
          <div className="mb-4">
          <label htmlFor={`prop`} className="text-[#808080]">Proffesion Type</label>
           <div > 
                        <input
                      type="radio"
                      id="propertytype"
                      name="type"
                      value={1}
                      onChange={(e) => handleInputChange("type", e.target.value)}
                    className="border-none border-b-2 border-blue-100 p-2 rounded-md"
  />
  <label htmlFor="ptype" className="mr-2 text-black">Student</label>

  <input
    type="radio"
    id="propertytype"
    name="type"
    value={2}
    onChange={(e) => handleInputChange("type", e.target.value)}
                       className="border-none border-b-2 border-blue-100 p-2 rounded-md"
  />
  <label htmlFor="ptype" className="mr-2 text-black">Working Professional</label>
  </div>
  <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleSearch}>Search</button>
          </div>
      </div>
      <div className="flex flex-wrap justify-center">
      {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          filteredProperties.map(tenant=>(<UserCard key={tenant.id} tenant={tenant}/>))
        )}
      </div>
    </div>
    </div>
    
  );
};

export default Gallery;
