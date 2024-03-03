import React, { useState } from "react";
import axios from "axios";
import { makeRequest } from "../axios";
const Listproperty = () => {
  const [file, setFile] = useState(null);
  const [property, setProperty] = useState([
    { id: 1, name: "", price1:'',price2:'',price3:'',ammenity1:"",ammenity2:"",imgURL:"",location:"",ptype:0},
  ]);
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
  const handleInputChange = (index, field, value) => {
    setProperty((prevProperty) =>
      prevProperty.map((property, i) => (i === index ? { ...property, [field]: value } : property))
    );
  };
  let imgUrl="";
  const handleImage = async () => {
    if (file) {
      imgUrl = await upload();
      setProperty((prevProperty) =>
        prevProperty.map((prop, index) => (index === property.length - 1 ? { ...prop, imgURL: imgUrl } : prop))
      );
    }
  };
  const handleAddProduct =async () => {
    const newProduct = { id: property.length + 1, name: "", price1:'',price2:'',price3:'',ammenity1:"",ammenity2:"",imgURL:"",location:"",ptype:0 };
    setProperty([...property, newProduct]);
  };

  const handleSubmit = async () => {
    try {
      // Assuming your Express server is running on http://localhost:3001
      const response = await axios.post("http://localhost:8800/api/property/addproperty", property,{
        withCredentials:true,
      });
      console.log("Products added successfully:", response.data);
    } catch (error) {
      console.log("Error adding products:", error);
    }
  };

  return (
    <div className="flex flex-col bg-slate-900">
      <h2 className="flex justify-center gradient-text items-center font-bold text-4xl my-8">List Your Properties</h2>
      <div  className="flex flex-wrap justify-center">
      {property.map((property, index) => (
        <div key={index} className=" flex flex-col space-x-1 py-4 border-4 border-blue-500 border-solid m-4 p-4 rounded-md bg-slate-900 ">
          <label htmlFor={`propertyName${index}`} className=" text-[#808080]">Product Name:</label>
          <input
            type="text"
            id={`propertyName${index}`}
            value={property.name}
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
            className="border-2 border-black rounded-md py-2 text-center"
          />

          <label htmlFor={`propertyPrice${index}`} className="text-[#808080]">Property Price for 1BHK/Single Sharing/Full House:</label>
          <input
            type="number"
            id={`propertyPrice${index}`}
            value={property.price1}
            onChange={(e) => handleInputChange(index, "price1", e.target.value)}
            className="border-2 border-black rounded-md py-1 text-center"
          />
            <label htmlFor={`propertyPrice${index}`} className="text-[#808080]">Property Price for 2BHK/Double Sharing:</label>
          <input
            type="number"
            id={`propertyPrice${index}`}
            value={property.price2}
            onChange={(e) => handleInputChange(index, "price2", e.target.value)}
            className="border-2 border-black rounded-md py-1 text-center"
          />
            <label htmlFor={`propertyPrice${index}`} className="text-[#808080]">Property Price for 3BHK/Triple Sharing:</label>
          <input
            type="number"
            id={`propertyPrice${index}`}
            value={property.price3}
            onChange={(e) => handleInputChange(index, "price3", e.target.value)}
            className="border-2 border-black rounded-md py-1 text-center"
          />
          <label htmlFor={`propertyMMEN${index}`} className="text-[#808080]">Property Ammentiy1:</label>
          <input
            type="text"
            id={`propertyammen1${index}`}
            value={property.ammenity1}
            onChange={(e) => handleInputChange(index, "ammenity1", e.target.value)}
            className="border-2 border-black rounded-md py-1 text-center"
          />
           <label htmlFor={`propertyammen${index}`} className="text-[#808080]">Property Ammenity2:</label>
          <input
            type="text"
            id={`propertyammen${index}`}
            value={property.ammenity2}
            onChange={(e) => handleInputChange(index, "ammenity2", e.target.value)}
            className="border-2 border-black rounded-md py-1 text-center"
          />
          <label htmlFor={`propertyImage${index}`} className="text-[#808080]">Property Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="border-2 border-black rounded-md py-1 text-white text-center"
          />
          <button onClick={handleImage} className="text-white">Save Image</button>
          <label htmlFor={`propertyLocation${index}`} className="text-[#808080]">Property Location:</label>
          <input
            type="text"
            id={`propertyLocation${index}`}
            value={property.location}
            onChange={(e) => handleInputChange(index, "location", e.target.value)}
            className="border-2 border-black rounded-md py-1 text-center"
          />
           <label htmlFor={`propertytype${index}`} className="text-[#808080]">Property Type</label>
           <div > 
                        <input
                      type="radio"
                      id="propertytype"
                      name="ptype"
                      value={11}
                      onChange={(e) => handleInputChange(index, "ptype", e.target.value)}
                    className="border-none border-b-2 border-blue-100 p-2 rounded-md"
  />
  <label htmlFor="ptype" className="mr-2 text-white">Flat</label>

  <input
    type="radio"
    id="propertytype"
    name="ptype"
    value={2}
    onChange={(e) => handleInputChange(index, "ptype", e.target.value)}
                       className="border-none border-b-2 border-blue-100 p-2 rounded-md"
  />
  <label htmlFor="ptype" className="mr-2 text-white">PG</label>
  <input
    type="radio"
    id="propertytype"
    name="ptype"
    value={3}
    onChange={(e) => handleInputChange(index, "ptype", e.target.value)}
                       className="border-none border-b-2 border-blue-100 p-2 rounded-md"
  />
  <label htmlFor="ptype" className="mr-2 text-white">Full House</label>
 </div>
        </div>
        
      ))}
      </div>
   <div className="flex mx-5 justify-center space-x-1.5">
      <button onClick={handleAddProduct} className=" bg-blue-500 outline-none p-2 text-white rounded-md">Add More Property</button>
      <button onClick={handleSubmit} className="top-full right-0 bg-green-500 text-white py-2 px-4 rounded-md">Submit</button>
      </div>

    </div>
  );
};

export default Listproperty;