import React, { useState } from 'react';

const Option = () => {
  const [showTenantPopup, setShowTenantPopup] = useState(false);
  const [showOwnerPopup, setShowOwnerPopup] = useState(false);

  const toggleTenantPopup = () => {
    setShowTenantPopup(!showTenantPopup);
  };

  const toggleOwnerPopup = () => {
    setShowOwnerPopup(!showOwnerPopup);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-blue-400 flex justify-center items-center">
        <button
          className="bg-transparent text-white text-4xl font-bold py-4 px-8 rounded-lg"
          onClick={toggleTenantPopup}
        >
          Tenants
        </button>
        {showTenantPopup && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg">
              <p>Tenants Popup Content</p>
              <button className="mt-4 bg-blue-400 text-white py-2 px-4 rounded-lg" onClick={toggleTenantPopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex-1 bg-blue-600 flex justify-center items-center">
        <button
          className="bg-transparent text-white text-4xl font-bold py-4 px-8 rounded-lg"
          onClick={toggleOwnerPopup}
        >
          Owners
        </button>
        {showOwnerPopup && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg">
              <p>Owners Popup Content</p>
              <button className="mt-4 bg-blue-400 text-white py-2 px-4 rounded-lg" onClick={toggleOwnerPopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Option;
