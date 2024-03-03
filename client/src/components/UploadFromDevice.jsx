import React, { useState } from 'react';

const UploadFromDevice = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Logic to upload the selected file
    if (selectedFile) {
      // Here you can handle the file upload logic
      console.log("Uploading file:", selectedFile);
      // For demonstration, let's reset the selected file after upload
      setSelectedFile(null);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="file-input"
      />
      <label htmlFor="file-input">
        <button>Upload from Device</button>
      </label>
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default UploadFromDevice;
