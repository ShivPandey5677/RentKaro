import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';

const Property = () => {
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
    <div className="flex flex-col items-center bg-white p-4">
      <div className="w-full max-w-md mb-4">
        <input
          type="text"
          placeholder="Search Location..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredProperties.map(property => (
          <PropertyCard key={property} />
        ))}
      </div>
    </div>
  );
}

export default Property;
