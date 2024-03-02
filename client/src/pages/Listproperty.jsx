import React, { useState } from "react";

const Listproperty = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "", price:'',catogary:"",imgURL:"",location:"" },
  ]);

  const handleInputChange = (index, field, value) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) => (i === index ? { ...product, [field]: value } : product))
    );
  };

  const handleAddProduct = () => {
    const newProduct = { id: products.length + 1, name: "", price:'' ,catogary:"",imgURL:"",location:"" };
    setProducts([...products, newProduct]);
  };

  const handleSubmit = () => {
    // Your submit logic here
    console.log("Products submitted:", products);
  };

  return (
    <div className="flex flex-col bg-slate-900 h-screen">
      <h2 className="flex justify-center gradient-text items-center font-bold text-4xl my-8">List Your Properties</h2>
      <div  className="flex flex-wrap justify-center">
      {products.map((product, index) => (
        <div key={index} className=" flex flex-col space-x-1 py-4 border-4 border-blue-500 border-solid m-4 p-4 rounded-md bg-slate-900 ">
          <label htmlFor={`productName${index}`} className=" text-[#808080]">Product Name:</label>
          <input
            type="text"
            id={`productName${index}`}
            value={product.name}
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
            className="border-2 border-black rounded-md py-2 text-center"
          />

          <label htmlFor={`productPrice${index}`} className="text-[#808080]">Product Price:</label>
          <input
            type="number"
            id={`productPrice${index}`}
            value={product.price}
            onChange={(e) => handleInputChange(index, "price", e.target.value)}
            className="border-2 border-black rounded-md py-1 text-center"
          />
          <label htmlFor={`productCategory${index}`} className="text-[#808080]">Product Category:</label>
          <input
            type="text"
            id={`productCategory${index}`}
            value={product.catogary}
            onChange={(e) => handleInputChange(index, "catogary", e.target.value)}
            className="border-2 border-black rounded-md py-1 text-center"
          />
          <label htmlFor={`productImage${index}`} className="text-[#808080]">Product ImageURL:</label>
          <input
            type="text"
            id={`productImage${index}`}
            value={product.imgURL}
            onChange={(e) => handleInputChange(index, "imgURL", e.target.value)}
            className="border-2 border-black rounded-md py-1 text-center"
          />
          <label htmlFor={`productLocation${index}`} className="text-[#808080]">Product Location:</label>
          <input
            type="text"
            id={`productLocation${index}`}
            value={product.location}
            onChange={(e) => handleInputChange(index, "location", e.target.value)}
            className="border-2 border-black rounded-md py-1 text-center"
          />
        </div>
        
      ))}
      </div>
   <div className="flex mx-5 justify-center space-x-1.5">
      <button onClick={handleAddProduct} className=" bg-blue-500 outline-none p-2 text-white rounded-md">Add More Product</button>
      <button onClick={handleSubmit} className="top-full right-0 bg-green-500 text-white py-2 px-4 rounded-md">Submit</button>
      </div>

    </div>
  );
};

export default Listproperty;