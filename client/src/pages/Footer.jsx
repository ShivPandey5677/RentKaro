import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#151517] bg-opacity-100">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="logo-container2">
          <p className="h1-bold" style={{ color: 'white' }}>RentKaro</p>
        </div>
        <div className="flex space-x-4">
        <Link to="/home" className="font-bold hover:text-blue-400 text-white" >Home</Link>


          <Link to="/about" className="font-bold hover:text-blue-400 text-white" >About</Link>
          <Link to="/reportfraud" className="font-bold hover:text-blue-400 text-white" >Report A Fraud</Link>
          <Link to="/contact" className="font-bold hover:text-blue-400 text-white" >Contact Us</Link>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;