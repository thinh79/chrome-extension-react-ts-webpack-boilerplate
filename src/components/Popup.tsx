import React from 'react';
import '@/tailwind.css';

const Popup = () => {
  // Function to handle button click
  const handleClick = () => {
    // Sending a message to the background script
    chrome.runtime.sendMessage({ message: 'buttonClicked' }, function(response) {
      console.log('Response from background:', response);
    });

    console.log('Button clicked. Message sent to background script.');
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Extension Popup</h1>
      <p className="mb-4">Welcome to the popup of the extension!</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-md"
      >
        Click Me
      </button>
    </div>
  );
};

export default Popup;
