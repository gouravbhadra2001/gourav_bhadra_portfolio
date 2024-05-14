import React, { useState } from 'react';
import './FloatingActionButton.css'; // Import CSS file for styling
import paper_plane from "../../Dynamic/Home/Assets/icons8-paper-plane-96.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if secondary buttons are open


  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/gouravbhadra2001", '_blank');
    console.log("GitHub button clicked");
  };

  // Function to handle onClick for Email button
  const handleEmailClick = () => {
    toast.info("Email at: 'gouravbhadra5678@gmail.com'", {
       
      autoClose: 5000, 
      hideProgressBar: false, 
      closeOnClick: false, 
      pauseOnHover: true, 
      draggable: false, 
      progress: undefined,
      
  })
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
      <button className={isOpen?"fab-main-open": "fab-main"} onClick={toggleButtons}>
      <img height={30} width={30} src={paper_plane} alt="" srcset="" />
      </button>

      <ToastContainer style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
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
