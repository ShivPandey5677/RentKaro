// Popup.jsx
import axios from 'axios';
import React, { useState } from 'react';
import { makeRequest } from '../axios';

const AddTenant = ({ onClose }) => {
    const [file, setFile] = useState(null);
  const [tenant, setTenant] = useState({
    type: '',
    age: '',
    gender: '',
    email: '',
    profilePicture: '',
    veriPic:''
  });
  const upload=async()=>{
    try{
       const formData=new FormData();
       formData.append("file",file)
       const res=await makeRequest.post("/upload",formData);
       return res.data
    }catch(err){
      console.log(err);
    }
  }
  const handleInputChange = (field, value) => {
    setTenant(prevTenant => ({
      ...prevTenant,
      [field]: value
    }));
  };
  const handleProfileImage = async () => {
    let imgUrl="";
    if (file) {
      imgUrl = await upload();
      setTenant(prevTenant => ({
        ...prevTenant,
        profilePicture: imgUrl
      })
      );
    }
  };
  const handleVerificationImage = async () => {
    let imgUrl2="";
    if (file) {
      imgUrl2 = await upload();
      setTenant(prevTenant => ({
        ...prevTenant,
        veriPic: imgUrl2
      })
      );
    }
  };

  const handleSubmit = async () => {
    console.log(tenant)
    try {
      // Assuming your Express server is running on http://localhost:3001
      const response = await axios.post("http://localhost:8800/api/user/tenant", tenant,{
        withCredentials:true,
      });
      console.log("Products added successfully:", response.data);
      
    } catch (error) {
      console.log("Error adding products:", error);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-sm">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Tenant</h2>
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
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block font-semibold mb-2">Age:</label>
            <input type="text" id="age" name="age" value={tenant.age} onChange={(e) => handleInputChange("age", e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block font-semibold mb-2">Gender:</label>
            <input type="text" id="gender" name="gender" value={tenant.gender} onChange={(e) => handleInputChange("gender", e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">Verification Email:</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    value={tenant.email} 
    onChange={(e) => handleInputChange("email", e.target.value)} 
    placeholder="College/Office Mail ID"
    className="w-full px-4 py-2 border border-gray-300 rounded" 
  />
          </div>
          <div className="mb-4">
            <label htmlFor="profilePicture" className="block font-semibold mb-2">Profile Picture:</label>
            <input type="file" id="profilePicture" name="profilePicture" onChange={(e) => setFile(e.target.files[0])} className="w-full px-4 py-2 border border-gray-300 rounded" />
            <button onClick={handleProfileImage} className="text-black">Save Image</button>
          </div>
          <div className="mb-4">
            <label htmlFor="IDpicture" className="block font-semibold mb-2">College/Working ID:</label>
            <input type="file" id="IDpicture" name="IDpicture" onChange={(e) => setFile(e.target.files[0])} className="w-full px-4 py-2 border border-gray-300 rounded" />
            <button onClick={handleVerificationImage} className="text-black">Save Image</button>         
          </div>
          <div className="text-right">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTenant;