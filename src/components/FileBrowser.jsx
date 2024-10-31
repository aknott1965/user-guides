import React, { useState } from 'react';
import './FileBrowser.css';

function FileBrowser() {
  const [showError, setShowError] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const manualLinks = [
    { 
      name: 'How to update Forecast', 
      path: 'User Manuals/Instructions for updating FY25 Forecast.pdf'
    },
    { 
      name: 'October Board report',
      path: 'User Manuals/Finance Forecast Update jr.pdf'
    }
  ];

  const handleManualClick = async (path) => {
    try {
      const response = await fetch(`http://localhost:5000/open-file?path=${path}`);
      if (!response.ok) {
        setShowError(true);
      } else {
        setSelectedFile(`http://localhost:5000/open-file?path=${path}`);
      }
    } catch (error) {
      setShowError(true);
    }
  };

  if (showError) {
    return (
      <div className="error-container">
        <div className="error-message">
          File not found. Please check if the file exists.
        </div>
        <button
          onClick={() => setShowError(false)}
          className="nav-button"
        >
          Return to Navigation
        </button>
      </div>
    );
  }

  if (selectedFile) {
    return (
      <div className="pdf-container">
        <div className="pdf-toolbar">
          <button
            onClick={() => setSelectedFile(null)}
            className="nav-button"
          >
            Return to Navigation
          </button>
        </div>
        <iframe
          src={selectedFile}
          className="pdf-iframe"
          title="PDF Viewer"
        />
      </div>
    );
  }

  return (
    <div className="navbar">
      {manualLinks.map((link, index) => (
        <button
          key={index}
          onClick={() => handleManualClick(link.path)}
          className="nav-button"
        >
          {link.name}
        </button>
      ))}
    </div>
  );
}

export default FileBrowser; 