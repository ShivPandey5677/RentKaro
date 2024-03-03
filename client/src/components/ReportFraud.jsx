import React, { useState } from 'react';

const ReportFraud = () => {
  const [fraudDescription, setFraudDescription] = useState('');
  const [ownerUsername, setOwnerUsername] = useState('');
  const [date, setDate] = useState('');
  const [propertyName, setPropertyName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fraudDescription,
      ownerUsername,
      date,
      propertyName
    });
  };

  return (
    <div className="justify-center container mx-auto px-4 py-8 h-screen">
        <div className="flex justify-center">
      <h2 className="text-2xl font-bold mb-4">Report a Fraud</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
        <div className="mb-4">
          <label htmlFor="fraudDescription" className="block font-semibold mb-2">Fraud Description:</label>
          <textarea id="fraudDescription" value={fraudDescription} onChange={(e) => setFraudDescription(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="ownerUsername" className="block font-semibold mb-2">Owner's Username:</label>
          <input type="text" id="ownerUsername" value={ownerUsername} onChange={(e) => setOwnerUsername(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block font-semibold mb-2">Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="propertyName" className="block font-semibold mb-2">Name of Property:</label>
          <input type="text" id="propertyName" value={propertyName} onChange={(e) => setPropertyName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default ReportFraud;