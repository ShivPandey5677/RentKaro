import React from 'react'
import PropertyCard from '../components/PropertyCard'

const Property = () => {
  const properties = [1, 2, 3, 4]; 
  
  return (
    <div className="flex flex-wrap justify-center">
      {properties.map(property => (
        <PropertyCard key={property} />
      ))}
    </div>
  );
}

export default Property
