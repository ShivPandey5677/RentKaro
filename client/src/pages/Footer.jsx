import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#535C91] bg-opacity-50">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="logo-container2">
          <p className="h1-bold">RentKaro</p>
        </div>
        <div className="flex space-x-4">
          <Link to="/home" className="font-bold hover:text-blue-500">Home</Link>
          <Link to="/about" className="font-bold hover:text-blue-500">About</Link>
          <Link to="/reportfraud" className="font-bold hover:text-blue-500">Report A Fraud</Link>
          <Link to="/contact" className="font-bold hover:text-blue-500">Contact Us</Link>
          <Link to="/signup" className="font-bold hover:text-blue-500">SignUp</Link>
          <Link to="/login" className="font-bold hover:text-blue-500">LogIn</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
