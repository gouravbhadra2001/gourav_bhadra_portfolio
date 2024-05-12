import React, { useState } from 'react';
import './FloatingActionButton.css'; // Import CSS file for styling

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if secondary buttons are open

  // Function to toggle the visibility of secondary buttons
  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/gouravbhadra2001", '_blank');
    console.log("GitHub button clicked");
  };

  // Function to handle onClick for Email button
  const handleEmailClick = () => {
    window.open("", '_blank');
    console.log("Email button clicked");
  };

  // Function to handle onClick for LinkedIn button
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/gourav-bhadra-39a2b5238", '_blank');
    console.log("LinkedIn button clicked");
  };

  return (
    <div className="fab-container">
      {/* Main floating action button */}
      <button className="fab-main" onClick={toggleButtons}>
        +
      </button>

      {/* Secondary buttons */}
      <div className={`fab-secondary-container ${isOpen ? 'open' : ''}`}>
        <button className="fab-secondary" onClick={handleGitHubClick}><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png" alt="github"/></button>
        <button className="fab-secondary" onClick={handleEmailClick}><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/email.png" alt="email"/></button>
        <button className="fab-secondary" onClick={handleLinkedInClick}><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="github"/></button>
        {/* Add more secondary buttons as needed */}
      </div>
    </div>
  );
};

export default FloatingActionButton;
