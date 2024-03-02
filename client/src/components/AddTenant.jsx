// Popup.jsx
import React, { useState } from 'react';

const AddTenant = ({ onClose }) => {
  const [formData, setFormData] = useState({
    type: '',
    age: '',
    gender: '',
    email: '',
    profilePicture: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('College/Office Mail Has Been Sent For Verification(Check Your Mail)');
    // Close the popup
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-sm">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Tenant</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="type" className="block font-semibold mb-2">Type:</label>
            <select id="type" name="type" value={formData.type} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded">
              <option value="working">Working</option>
              <option value="student">Student</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block font-semibold mb-2">Age:</label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block font-semibold mb-2">Gender:</label>
            <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">Verification Email:</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    value={formData.email} 
    onChange={handleChange} 
    placeholder="College/Office Mail ID"
    className="w-full px-4 py-2 border border-gray-300 rounded" 
  />
          </div>
          <div className="mb-4">
            <label htmlFor="profilePicture" className="block font-semibold mb-2">Profile Picture:</label>
            <input type="file" id="profilePicture" name="profilePicture" onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="IDpicture" className="block font-semibold mb-2">College/Working ID:</label>
            <input type="file" id="IDpicture" name="IDpicture" onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>
          <div className="text-right">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTenant;
