import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-[#151517] bg-opacity-100">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="logo-container2">
          <p className="h1-bold" style={{ color: 'white' }}>RentKaro</p>
        </div>
        <div className="flex space-x-4">
          <Link to="/reportfraud" className="font-bold hover:text-blue-400 text-white">Report A Fraud</Link>
          <Link to="/ChatBot" className="font-bold hover:text-blue-400 text-white">Customer Support</Link>
          {/* Add the following links */}
          <Link to="/terms" className="font-bold hover:text-blue-400 text-white">Terms and Conditions</Link>
          <Link to="/copyright" className="font-bold hover:text-blue-400 text-white">
            © {currentYear} RentKaro
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
