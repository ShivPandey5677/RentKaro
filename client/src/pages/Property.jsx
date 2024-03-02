import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';

const Property = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const properties = [1, 2, 3, 4]; // Mock data

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProperties = properties.filter(property => {
    // Perform filtering based on your search logic
    return property.toString().includes(searchTerm);
  });

  const handleInputChange = (field, value) => {
    // Handle input changes
  };

  const handleSearch = () => {
    // Handle search functionality
  };
  
  return (
    <div className="flex flex-col items-center bg-white p-4">
      <div className="w-full flex flex-col m-4 bg-gray-100 rounded-lg p-4">
        <div>
        <input
  type="text"
  placeholder="Search Location..."
  className="w-1/4 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  value={searchTerm}
  onChange={handleSearchChange}
/>

  </div>
  <div className="flex justify-between items-center mb-4">
    <div className="flex">
      <input
        type="radio"
        id="propertytype-flat"
        name="type"
        value={1}
        onChange={(e) => handleInputChange("type", e.target.value)}
        className="border-none border-b-2 border-blue-100 p-2 rounded-md mr-2"
      />
      <label htmlFor="propertytype-flat" className="text-black">Flat</label>

      <input
        type="radio"
        id="propertytype-pg"
        name="type"
        value={2}
        onChange={(e) => handleInputChange("type", e.target.value)}
        className="border-none border-b-2 border-blue-100 p-2 rounded-md mx-2"
      />
      <label htmlFor="propertytype-pg" className="text-black">PG</label>

      <input
        type="radio"
        id="propertytype-house"
        name="type"
        value={3}
        onChange={(e) => handleInputChange("type", e.target.value)}
        className="border-none border-b-2 border-blue-100 p-2 rounded-md mx-2"
      />
      <label htmlFor="propertytype-house" className="text-black">Full House</label>
    </div>
    <button onClick={handleSearch} className="text-black border-2 border-black rounded-lg px-4 py-2">Search</button>
  </div>
</div>


      <div className="flex flex-wrap justify-center">
        {/* {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : ( */}
          {filteredProperties.map(property => (
            <PropertyCard key={property} />
          ))}
        {/* )} */}
      </div>
    </div>
  );
  
}

export default Property;
